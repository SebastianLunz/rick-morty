import Routes from '../constants/Routes';
import {
  faHome,
  faFilm,
  faUserNinja,
  faAtlas, faStar
} from '@fortawesome/free-solid-svg-icons';

const navbarItems = [
  {path: Routes.ROOT, icon: faHome, name: 'Dashboard', exact: true},
  {path: Routes.CHARACTER, icon: faUserNinja, name: 'Character'},
  {path: Routes.LOCATION, icon: faAtlas, name: 'Location'},
  {path: Routes.EPISODE, icon: faFilm, name: 'Episode'},
  {path: Routes.FAVORITE, icon: faStar, name: 'Favorite'},
];

export default navbarItems;