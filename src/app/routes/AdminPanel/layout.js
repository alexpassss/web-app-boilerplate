import React from 'react'
import {
  PageHeader,
  SidebarWrapperPrimary,
  SidebarPrimary,
  ScrollableWrapper,
  ContentWrapper
} from '../../components'
import {
  Box,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { People, Palette } from '@material-ui/icons'
import { STYLEGUIDE_PATH } from '../paths'

const Layout = () => {
  return (
    <React.Fragment>
      <SidebarWrapperPrimary>
        <SidebarPrimary captionText="Menu" isSidebarOpened={true}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Main
              </ListSubheader>
            }>
            <ListItem button>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button component={RouterLink} to={STYLEGUIDE_PATH}>
              <ListItemIcon>
                <Palette />
              </ListItemIcon>
              <ListItemText primary="Styleguide" />
            </ListItem>
          </List>
        </SidebarPrimary>
        <ContentWrapper>
          <ScrollableWrapper>
            <PageHeader title="Admin panel" />
            <Box className="container-fluid">
              <Box className="row">
                <Box className="col-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui nunc mattis enim ut tellus. Suspendisse in est ante in. At
                  volutpat diam ut venenatis. Quam adipiscing vitae proin
                  sagittis nisl rhoncus mattis rhoncus. Laoreet id donec
                  ultrices tincidunt arcu non sodales. Sit amet purus gravida
                  quis. Sit amet porttitor eget dolor morbi non arcu. Sed
                  viverra tellus in hac habitasse platea dictumst. Donec enim
                  diam vulputate ut pharetra sit amet aliquam. Ut diam quam
                  nulla porttitor massa. Aliquam faucibus purus in massa. Leo a
                  diam sollicitudin tempor id. Quisque non tellus orci ac
                  auctor. Enim sed faucibus turpis in eu mi bibendum neque
                  egestas. Tincidunt lobortis feugiat vivamus at augue eget.
                  Felis donec et odio pellentesque diam. Viverra nibh cras
                  pulvinar mattis. Integer malesuada nunc vel risus commodo
                  viverra maecenas. Nunc mattis enim ut tellus elementum
                  sagittis vitae et leo. Faucibus in ornare quam viverra orci
                  sagittis eu volutpat odio. Tincidunt vitae semper quis lectus
                  nulla at volutpat. Iaculis at erat pellentesque adipiscing
                  commodo elit. Porttitor massa id neque aliquam vestibulum
                  morbi blandit. Diam sollicitudin tempor id eu nisl nunc mi
                  ipsum. Habitant morbi tristique senectus et netus et malesuada
                  fames. Ut tellus elementum sagittis vitae et leo duis. Luctus
                  accumsan tortor posuere ac ut consequat semper viverra. Lectus
                  mauris ultrices eros in cursus. Egestas purus viverra accumsan
                  in nisl nisi. Ac tortor dignissim convallis aenean et tortor
                  at. Imperdiet proin fermentum leo vel orci porta non pulvinar
                  neque. Magna eget est lorem ipsum dolor. Ut placerat orci
                  nulla pellentesque. Arcu non sodales neque sodales ut etiam
                  sit. Amet risus nullam eget felis eget nunc lobortis. Duis
                  convallis convallis tellus id interdum velit laoreet. Sagittis
                  nisl rhoncus mattis rhoncus. Sit amet consectetur adipiscing
                  elit ut. Volutpat est velit egestas dui id ornare arcu odio
                  ut. Ut morbi tincidunt augue interdum velit euismod. Libero
                  justo laoreet sit amet cursus sit. Et leo duis ut diam quam
                  nulla porttitor. Auctor neque vitae tempus quam pellentesque.
                  Quam viverra orci sagittis eu volutpat odio. Amet justo donec
                  enim diam. Laoreet id donec ultrices tincidunt arcu non
                  sodales neque sodales. Habitasse platea dictumst vestibulum
                  rhoncus est pellentesque elit ullamcorper dignissim.
                  Ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                  lobortis. Viverra maecenas accumsan lacus vel facilisis
                  volutpat est velit. Ultricies lacus sed turpis tincidunt.
                  Mauris in aliquam sem fringilla ut morbi tincidunt. Tellus in
                  hac habitasse platea. Fames ac turpis egestas maecenas
                  pharetra. Semper eget duis at tellus at urna. Vulputate enim
                  nulla aliquet porttitor lacus luctus accumsan tortor posuere.
                  Vehicula ipsum a arcu cursus vitae. Sagittis nisl rhoncus
                  mattis rhoncus urna neque viverra justo. Sollicitudin nibh sit
                  amet commodo nulla facilisi nullam. Nunc pulvinar sapien et
                  ligula ullamcorper. Amet nisl suscipit adipiscing bibendum est
                  ultricies. Vitae nunc sed velit dignissim sodales ut. Viverra
                  aliquet eget sit amet tellus. Ac felis donec et odio
                  pellentesque diam volutpat. Fusce ut placerat orci nulla
                  pellentesque dignissim enim. Sed faucibus turpis in eu mi
                  bibendum neque egestas congue. Facilisi morbi tempus iaculis
                  urna id volutpat lacus laoreet non. Sit amet nisl suscipit
                  adipiscing bibendum est. Dolor sit amet consectetur adipiscing
                  elit. Sagittis vitae et leo duis ut diam. Netus et malesuada
                  fames ac turpis egestas sed tempus urna. Eget mi proin sed
                  libero enim sed faucibus turpis. Et netus et malesuada fames
                  ac turpis egestas integer. Ullamcorper morbi tincidunt ornare
                  massa eget egestas. Sit amet porttitor eget dolor morbi. Duis
                  at consectetur lorem donec massa. Erat imperdiet sed euismod
                  nisi porta lorem mollis aliquam ut. Morbi non arcu risus quis
                  varius. At volutpat diam ut venenatis tellus in metus. Hac
                  habitasse platea dictumst vestibulum rhoncus est pellentesque
                  elit ullamcorper. Feugiat scelerisque varius morbi enim nunc
                  faucibus a pellentesque. In arcu cursus euismod quis viverra
                  nibh cras pulvinar mattis. Aliquam purus sit amet luctus
                  venenatis lectus magna. Lacinia at quis risus sed vulputate
                  odio ut enim. Sagittis eu volutpat odio facilisis mauris sit
                  amet massa vitae. Integer vitae justo eget magna fermentum
                  iaculis eu non. Volutpat consequat mauris nunc congue nisi
                  vitae suscipit. Tincidunt eget nullam non nisi est. Volutpat
                  ac tincidunt vitae semper quis lectus. Odio euismod lacinia at
                  quis. Sed viverra ipsum nunc aliquet bibendum enim facilisis.
                  Tincidunt vitae semper quis lectus nulla at. Habitasse platea
                  dictumst quisque sagittis purus sit amet. Nibh mauris cursus
                  mattis molestie a iaculis at erat. Sit amet luctus venenatis
                  lectus magna fringilla urna. Duis tristique sollicitudin nibh
                  sit amet commodo nulla. At volutpat diam ut venenatis tellus
                  in. Cras semper auctor neque vitae tempus. Duis ultricies
                  lacus sed turpis. Quis ipsum suspendisse ultrices gravida
                  dictum fusce ut placerat. Iaculis urna id volutpat lacus
                  laoreet non. Phasellus vestibulum lorem sed risus ultricies
                  tristique nulla aliquet. Augue interdum velit euismod in
                  pellentesque massa placerat. Est ultricies integer quis
                  auctor. Purus viverra accumsan in nisl nisi scelerisque.
                  Ornare aenean euismod elementum nisi quis eleifend. Tristique
                  senectus et netus et malesuada. Ullamcorper malesuada proin
                  libero nunc consequat interdum varius sit amet. At urna
                  condimentum mattis pellentesque id nibh. Nisl suscipit
                  adipiscing bibendum est ultricies integer quis auctor elit.
                  Sed augue lacus viverra vitae congue eu. Semper risus in
                  hendrerit gravida rutrum quisque non. Elementum facilisis leo
                  vel fringilla est ullamcorper eget nulla. Vestibulum morbi
                  blandit cursus risus. Orci nulla pellentesque dignissim enim
                  sit amet venenatis urna cursus. Etiam dignissim diam quis enim
                  lobortis. Nunc sed blandit libero volutpat sed cras ornare
                  arcu dui. Consectetur adipiscing elit ut aliquam purus. Id
                  nibh tortor id aliquet lectus proin nibh nisl condimentum.
                  Duis convallis convallis tellus id interdum. Ultricies integer
                  quis auctor elit. Magna etiam tempor orci eu lobortis
                  elementum nibh tellus. Quis viverra nibh cras pulvinar mattis
                  nunc sed blandit libero. Ullamcorper a lacus vestibulum sed.
                  Bibendum arcu vitae elementum curabitur vitae nunc sed velit.
                  Nulla malesuada pellentesque elit eget gravida cum sociis
                  natoque. Pharetra et ultrices neque ornare aenean euismod
                  elementum. Urna molestie at elementum eu facilisis sed odio
                  morbi quis. Quisque egestas diam in arcu cursus euismod quis
                  viverra nibh. Nibh tellus molestie nunc non. Non tellus orci
                  ac auctor augue mauris augue neque. Vitae sapien pellentesque
                  habitant morbi tristique senectus et. Lorem mollis aliquam ut
                  porttitor leo a. Id volutpat lacus laoreet non curabitur
                  gravida arcu. Adipiscing commodo elit at imperdiet dui
                  accumsan sit. Id ornare arcu odio ut sem nulla. Interdum
                  varius sit amet mattis vulputate enim nulla aliquet. Feugiat
                  pretium nibh ipsum consequat nisl. Blandit cursus risus at
                  ultrices mi tempus imperdiet nulla. Consequat nisl vel pretium
                  lectus quam id leo. Risus nullam eget felis eget nunc
                  lobortis. Egestas maecenas pharetra convallis posuere morbi
                  leo. Facilisi etiam dignissim diam quis. Risus in hendrerit
                  gravida rutrum quisque non. Sem et tortor consequat id porta
                  nibh. Eros donec ac odio tempor. Convallis convallis tellus id
                  interdum velit laoreet. Commodo sed egestas egestas fringilla
                  phasellus faucibus scelerisque eleifend donec. Viverra
                  suspendisse potenti nullam ac tortor vitae purus faucibus.
                  Mauris rhoncus aenean vel elit scelerisque mauris
                  pellentesque. Magna ac placerat vestibulum lectus mauris.
                  Vulputate sapien nec sagittis aliquam malesuada bibendum.
                  Porta lorem mollis aliquam ut. Arcu non odio euismod lacinia
                  at quis. Cras sed felis eget velit aliquet sagittis id
                  consectetur purus. Magna eget est lorem ipsum dolor. Aliquet
                  risus feugiat in ante. Elementum sagittis vitae et leo duis
                  ut. A diam sollicitudin tempor id eu nisl nunc mi. Tempor id
                  eu nisl nunc mi ipsum. In dictum non consectetur a erat nam.
                  Id aliquet lectus proin nibh nisl condimentum id venenatis a.
                  Amet volutpat consequat mauris nunc congue nisi vitae suscipit
                  tellus. Leo duis ut diam quam nulla porttitor massa. Quis
                  commodo odio aenean sed adipiscing diam donec adipiscing
                  tristique. Mauris nunc congue nisi vitae suscipit. Mi in nulla
                  posuere sollicitudin aliquam ultrices. Pulvinar neque laoreet
                  suspendisse interdum consectetur libero id faucibus nisl.
                  Mauris rhoncus aenean vel elit. In massa tempor nec feugiat
                  nisl pretium fusce id. Magna sit amet purus gravida quis.
                  Elementum sagittis vitae et leo duis ut diam quam. Id faucibus
                  nisl tincidunt eget nullam. Pellentesque elit ullamcorper
                  dignissim cras tincidunt lobortis feugiat vivamus. Sit amet
                  nisl suscipit adipiscing bibendum est ultricies integer. Urna
                  nec tincidunt praesent semper feugiat nibh. Facilisis gravida
                  neque convallis a cras. Tempor nec feugiat nisl pretium fusce.
                  Facilisi morbi tempus iaculis urna. Felis eget velit aliquet
                  sagittis id consectetur purus ut. Tortor dignissim convallis
                  aenean et. Pretium nibh ipsum consequat nisl vel. Adipiscing
                  elit pellentesque habitant morbi tristique senectus et netus
                  et. Malesuada fames ac turpis egestas integer eget. Fusce ut
                  placerat orci nulla pellentesque dignissim enim sit amet. Id
                  volutpat lacus laoreet non curabitur gravida arcu. Massa
                  sapien faucibus et molestie ac. Urna id volutpat lacus laoreet
                  non curabitur. Posuere lorem ipsum dolor sit amet consectetur
                  adipiscing elit. Orci porta non pulvinar neque laoreet
                  suspendisse interdum consectetur libero. Et leo duis ut diam.
                  Venenatis urna cursus eget nunc scelerisque viverra mauris in.
                  Diam quis enim lobortis scelerisque. Rhoncus dolor purus non
                  enim praesent. Arcu bibendum at varius vel pharetra vel turpis
                  nunc eget. Nisl suscipit adipiscing bibendum est ultricies
                  integer. Nunc non blandit massa enim nec dui nunc mattis enim.
                  Nulla facilisi morbi tempus iaculis urna id volutpat. Sagittis
                  eu volutpat odio facilisis mauris. Ipsum dolor sit amet
                  consectetur adipiscing. Malesuada proin libero nunc consequat
                  interdum varius sit amet. Tortor pretium viverra suspendisse
                  potenti nullam ac tortor. Ligula ullamcorper malesuada proin
                  libero nunc consequat interdum. Bibendum neque egestas congue
                  quisque. Quam vulputate dignissim suspendisse in. Volutpat est
                  velit egestas dui. Neque gravida in fermentum et sollicitudin.
                  Sapien nec sagittis aliquam malesuada bibendum arcu vitae. At
                  ultrices mi tempus imperdiet nulla malesuada pellentesque elit
                  eget. Mollis aliquam ut porttitor leo. Massa id neque aliquam
                  vestibulum morbi blandit. Ultricies mi eget mauris pharetra.
                  Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Eu
                  augue ut lectus arcu bibendum. Aliquet nibh praesent tristique
                  magna sit. Felis donec et odio pellentesque diam. Tellus
                  molestie nunc non blandit massa enim. Tincidunt praesent
                  semper feugiat nibh sed. Mauris ultrices eros in cursus
                  turpis. Magnis dis parturient montes nascetur ridiculus mus
                  mauris vitae ultricies. Molestie at elementum eu facilisis sed
                  odio morbi quis commodo. Senectus et netus et malesuada fames.
                  Nullam non nisi est sit amet facilisis. Massa tempor nec
                  feugiat nisl pretium fusce id. Nam libero justo laoreet sit
                  amet cursus. Tellus cras adipiscing enim eu. Vestibulum mattis
                  ullamcorper velit sed ullamcorper morbi. Et malesuada fames ac
                  turpis egestas sed tempus urna. Gravida arcu ac tortor
                  dignissim convallis aenean. Volutpat diam ut venenatis tellus.
                  In eu mi bibendum neque egestas congue quisque. Porta nibh
                  venenatis cras sed. Rhoncus urna neque viverra justo nec
                  ultrices dui. Cursus turpis massa tincidunt dui ut. Aliquam
                  nulla facilisi cras fermentum odio eu feugiat pretium nibh.
                  Sit amet cursus sit amet dictum sit amet. Mauris in aliquam
                  sem fringilla. Quis ipsum suspendisse ultrices gravida dictum
                  fusce. Et ultrices neque ornare aenean euismod elementum nisi
                  quis. Risus viverra adipiscing at in tellus integer feugiat
                  scelerisque. Id faucibus nisl tincidunt eget nullam non nisi
                  est. Ac orci phasellus egestas tellus. Posuere ac ut consequat
                  semper viverra nam libero. Gravida dictum fusce ut placerat
                  orci nulla pellentesque. Porta non pulvinar neque laoreet
                  suspendisse interdum consectetur libero id. Sit amet aliquam
                  id diam maecenas ultricies mi eget mauris. Pharetra et
                  ultrices neque ornare aenean. Nibh ipsum consequat nisl vel
                  pretium lectus. Tristique senectus et netus et malesuada.
                  Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.
                  In est ante in nibh mauris cursus mattis molestie a. Tempus
                  quam pellentesque nec nam aliquam sem. Sapien nec sagittis
                  aliquam malesuada bibendum arcu vitae elementum. Mauris
                  pharetra et ultrices neque ornare aenean euismod elementum.
                  Orci phasellus egestas tellus rutrum tellus pellentesque eu
                  tincidunt tortor. Dolor purus non enim praesent elementum.
                  Metus dictum at tempor commodo. Euismod in pellentesque massa
                  placerat. Diam donec adipiscing tristique risus nec feugiat.
                  Dignissim diam quis enim lobortis scelerisque fermentum dui
                  faucibus in. At lectus urna duis convallis convallis. Massa
                  tincidunt nunc pulvinar sapien et ligula ullamcorper
                  malesuada. Turpis egestas pretium aenean pharetra magna ac
                  placerat vestibulum lectus. Elit sed vulputate mi sit amet
                  mauris commodo quis imperdiet. Leo in vitae turpis massa sed
                  elementum tempus egestas sed. Nisl tincidunt eget nullam non
                  nisi est sit amet. Ultrices gravida dictum fusce ut placerat
                  orci. Eu volutpat odio facilisis mauris sit amet massa vitae
                  tortor. Arcu felis bibendum ut tristique. Sit amet cursus sit
                  amet dictum sit. Lectus vestibulum mattis ullamcorper velit
                  sed ullamcorper morbi tincidunt ornare. Aliquet bibendum enim
                  facilisis gravida. Nisl tincidunt eget nullam non nisi est
                  sit. Purus in mollis nunc sed id semper risus. Sagittis purus
                  sit amet volutpat consequat mauris nunc congue. Porta lorem
                  mollis aliquam ut porttitor leo a. Amet risus nullam eget
                  felis. Diam sit amet nisl suscipit adipiscing bibendum est
                  ultricies. Ultrices in iaculis nunc sed augue. Vestibulum
                  lectus mauris ultrices eros in cursus turpis massa. Lacus
                  laoreet non curabitur gravida arcu ac tortor. Id leo in vitae
                  turpis massa sed elementum. Morbi tristique senectus et netus
                  et malesuada. Dignissim cras tincidunt lobortis feugiat
                  vivamus at. Magna fermentum iaculis eu non diam phasellus. Id
                  donec ultrices tincidunt arcu non sodales neque sodales. At
                  tempor commodo ullamcorper a lacus vestibulum sed. Vitae
                  turpis massa sed elementum tempus. Diam ut venenatis tellus in
                  metus. Neque egestas congue quisque egestas diam in arcu
                  cursus euismod. Mauris cursus mattis molestie a iaculis at
                  erat. Velit laoreet id donec ultrices tincidunt arcu non
                  sodales. Orci phasellus egestas tellus rutrum. Sed tempus urna
                  et pharetra. Diam quis enim lobortis scelerisque. Rutrum
                  tellus pellentesque eu tincidunt. Viverra nam libero justo
                  laoreet sit amet cursus sit. Amet nisl suscipit adipiscing
                  bibendum est ultricies integer. Est placerat in egestas erat.
                  Proin sed libero enim sed faucibus turpis in. Viverra nibh
                  cras pulvinar mattis nunc sed blandit libero. Vitae justo eget
                  magna fermentum iaculis. Vitae elementum curabitur vitae nunc
                  sed velit dignissim sodales ut. Lorem mollis aliquam ut
                  porttitor leo a diam sollicitudin tempor. Nec sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae. Diam
                  donec adipiscing tristique risus nec. Faucibus et molestie ac
                  feugiat sed lectus vestibulum. Id cursus metus aliquam
                  eleifend mi. Porta lorem mollis aliquam ut. Sagittis eu
                  volutpat odio facilisis. Pellentesque massa placerat duis
                  ultricies lacus sed turpis tincidunt id. Fringilla est
                  ullamcorper eget nulla facilisi etiam. Sed elementum tempus
                  egestas sed sed risus. Tortor condimentum lacinia quis vel
                  eros donec. Aenean euismod elementum nisi quis eleifend. Ac
                  feugiat sed lectus vestibulum. Accumsan sit amet nulla
                  facilisi morbi. At risus viverra adipiscing at in. Convallis
                  tellus id interdum velit laoreet. Ut morbi tincidunt augue
                  interdum. Viverra suspendisse potenti nullam ac tortor. Nisi
                  scelerisque eu ultrices vitae auctor eu augue ut lectus. Vitae
                  et leo duis ut diam quam. Amet est placerat in egestas erat
                  imperdiet. Enim sed faucibus turpis in eu mi bibendum neque.
                  Non quam lacus suspendisse faucibus interdum posuere lorem
                  ipsum dolor. Ultrices mi tempus imperdiet nulla malesuada
                  pellentesque. Sit amet tellus cras adipiscing enim. Adipiscing
                  at in tellus integer feugiat scelerisque varius morbi. Viverra
                  suspendisse potenti nullam ac tortor vitae purus faucibus
                  ornare. Pellentesque habitant morbi tristique senectus. Dolor
                  sit amet consectetur adipiscing elit pellentesque habitant.
                  Vitae tempus quam pellentesque nec nam aliquam. Lobortis
                  elementum nibh tellus molestie nunc non. Ultricies integer
                  quis auctor elit sed vulputate mi sit. Hac habitasse platea
                  dictumst quisque. Feugiat sed lectus vestibulum mattis
                  ullamcorper velit sed. Mollis nunc sed id semper. Libero id
                  faucibus nisl tincidunt. Lectus mauris ultrices eros in cursus
                  turpis massa. Nulla aliquet enim tortor at auctor urna nunc
                  id. Dolor sit amet consectetur adipiscing. Velit dignissim
                  sodales ut eu. Adipiscing enim eu turpis egestas pretium
                  aenean pharetra magna ac. Blandit volutpat maecenas volutpat
                  blandit aliquam etiam erat. Aliquam eleifend mi in nulla
                  posuere sollicitudin aliquam ultrices sagittis. Sollicitudin
                  tempor id eu nisl nunc mi ipsum faucibus. Risus pretium quam
                  vulputate dignissim suspendisse in est. Vel turpis nunc eget
                  lorem dolor sed viverra. Mattis rhoncus urna neque viverra
                  justo nec ultrices dui. Fermentum posuere urna nec tincidunt
                  praesent semper. Tellus molestie nunc non blandit massa enim
                  nec. Lacus viverra vitae congue eu consequat ac felis.
                  Porttitor leo a diam sollicitudin tempor id. Lectus nulla at
                  volutpat diam. Aliquet sagittis id consectetur purus ut
                  faucibus pulvinar elementum. Sed faucibus turpis in eu mi
                  bibendum neque. Sodales ut eu sem integer vitae justo eget
                  magna fermentum. Lacus vel facilisis volutpat est velit
                  egestas. Integer quis auctor elit sed vulputate. Mi sit amet
                  mauris commodo quis. Elementum pulvinar etiam non quam lacus
                  suspendisse faucibus interdum. Tincidunt praesent semper
                  feugiat nibh sed. Dignissim suspendisse in est ante in nibh.
                  Nisi est sit amet facilisis magna etiam tempor orci eu. Purus
                  non enim praesent elementum facilisis leo vel. Tellus at urna
                  condimentum mattis pellentesque id. Nec dui nunc mattis enim
                  ut tellus elementum sagittis. Volutpat diam ut venenatis
                  tellus in metus vulputate. Arcu risus quis varius quam quisque
                  id diam vel quam. Vulputate mi sit amet mauris. Ridiculus mus
                  mauris vitae ultricies leo integer malesuada nunc vel. Leo
                  integer malesuada nunc vel risus commodo viverra. Lobortis
                  scelerisque fermentum dui faucibus. Consequat id porta nibh
                  venenatis cras sed felis eget. Porttitor lacus luctus accumsan
                  tortor posuere ac ut. Eget gravida cum sociis natoque. Nunc
                  sed velit dignissim sodales ut eu sem integer vitae. Fusce ut
                  placerat orci nulla pellentesque dignissim enim sit amet. Ac
                  ut consequat semper viverra nam libero justo laoreet sit.
                  Tortor pretium viverra suspendisse potenti nullam ac.
                  Consectetur a erat nam at. Pharetra diam sit amet nisl
                  suscipit adipiscing bibendum est ultricies. Elit eget gravida
                  cum sociis natoque penatibus et magnis. Netus et malesuada
                  fames ac turpis.
                </Box>
              </Box>
            </Box>
          </ScrollableWrapper>
        </ContentWrapper>
      </SidebarWrapperPrimary>
    </React.Fragment>
  )
}

export default Layout
