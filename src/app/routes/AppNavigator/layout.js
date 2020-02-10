import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

const CANDIDATE = 'CANDIDATE'
const RECRUITER = 'RECRUITER'
const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
const AUTHENTICATED = 'AUTHENTICATED'
const USER_EXISTS = 'USER_EXISTS'
const USER_NOT_EXIST = 'USER_NOT_EXISTS'
const USER_PROFILE_FILLED = 'USER_PROFILE_FILLED'
const USER_PROFILE_NOT_FILLED = 'USER_PROFILE_NOT_FILLED'
const NO_ROLE = 'NO_ROLE'
const COMPANIES_EXIST = 'COMPANIES_EXIST'
const NO_COMPANIES = 'NO_COMPANIES'
const SINGLE_COMPANY = 'SINGLE_COMPANY'
const MULTIPLE_COMPANIES = 'MULTIPLE_COMPANIES'
const CURRENT_COMPANY_CHOOSEN = 'CURRENT_COMPANY_CHOOSEN'
const CURRENT_COMPANY_NOT_CHOOSEN = 'CURRENT_COMPANY_NOT_CHOOSEN'

const AppNavigator = props => {
  // Check if info about current session loaded
  const isSessionEmpty = useSelector(state => state.firebase.auth.isEmpty)

  // Receiving current userId
  const userId = useSelector(state => state.firebase.auth.uid)

  // Check if user is authenticated
  const isAuthenticated = isSessionEmpty ? NOT_AUTHENTICATED : AUTHENTICATED

  // Receiving detailed info about current user from DB
  useFirestoreConnect([{ collection: 'users', doc: userId }])

  // Receiving current user data from store
  const user = useSelector(({ firestore: { data: { users } } }) => {
    return users && users[userId]
  })

  // Check if detailed info about user is loaded
  const isUser = user ? USER_EXISTS : USER_NOT_EXIST

  // Check if user has filled mandatory info in profile
  const isUserProfileFilled =
    isUser === USER_EXISTS && user.firstName && user.lastName && user.email
      ? USER_PROFILE_FILLED
      : USER_PROFILE_NOT_FILLED

  // Receiving user role
  const stateRole = useSelector(state => state.user && state.user.role)

  let role = NO_ROLE

  // From redux state or from DB
  if (stateRole || (user && user.role)) {
    role = stateRole || (user && user.role)
  }

  // Receiving user companies
  const isCompanies =
    isUser === USER_EXISTS && user.companies && user.companies.length
      ? COMPANIES_EXIST
      : NO_COMPANIES

  // Receiving companies ids
  const companiesIds =
    isUser === USER_EXISTS && user.companies && user.companies.length
      ? user.companies
      : []

  // Checking number of companies
  const hasUserMultipleCompanies =
    isUser === USER_EXISTS && user.companies && companiesIds.length === 1
      ? SINGLE_COMPANY
      : MULTIPLE_COMPANIES

  // Getting of choosen earlier company id
  const choosenCompanyId = user && user.currentCompany
  const isCompanyChoosen =
    isUser === USER_EXISTS && user.currentCompany
      ? CURRENT_COMPANY_CHOOSEN
      : CURRENT_COMPANY_NOT_CHOOSEN

  // App routing map
  // TODO change routes to constants
  const routingMap = {
    [CANDIDATE]: {
      [USER_PROFILE_FILLED]: '/dashboard', // TODO should be changed to candidate dashboard
      [USER_PROFILE_NOT_FILLED]: '/candidate/' + userId + '/profile'
    },
    [RECRUITER]: {
      [COMPANIES_EXIST]: {
        [USER_PROFILE_FILLED]: {
          [CURRENT_COMPANY_CHOOSEN]:
            '/companies/' + choosenCompanyId + '/dashboard',
          [CURRENT_COMPANY_NOT_CHOOSEN]: {
            [SINGLE_COMPANY]: '/companies/' + companiesIds[0] + '/dashboard',
            [MULTIPLE_COMPANIES]: '/companies'
          }
        },
        [USER_PROFILE_NOT_FILLED]: '/recruiter/' + userId + '/profile'
      },
      [NO_COMPANIES]: {
        [USER_PROFILE_FILLED]: '/companies/new/data',
        [USER_PROFILE_NOT_FILLED]: '/companies/new/recruiter'
      }
    }
  }

  // Final redirect
  return isAuthenticated === AUTHENTICATED && role !== NO_ROLE ? (
    role === CANDIDATE ? (
      <Redirect to={routingMap[role][isUserProfileFilled]} />
    ) : (
      <Redirect
        to={
          isUserProfileFilled === USER_PROFILE_FILLED
            ? isCompanyChoosen === CURRENT_COMPANY_NOT_CHOOSEN
              ? routingMap[role][isCompanies][isUserProfileFilled][
                  isCompanyChoosen
                ][hasUserMultipleCompanies]
              : routingMap[role][isCompanies][isUserProfileFilled][
                  isCompanyChoosen
                ]
            : routingMap[role][isCompanies][isUserProfileFilled]
        }
      />
    )
  ) : (
    <React.Fragment></React.Fragment>
  )
}

export default AppNavigator
