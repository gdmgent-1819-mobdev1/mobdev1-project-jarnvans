// Pages
import HomeView from './pages/home';
import AboutView from './pages/about';
import FirebaseView from './pages/firebase-example';
import MapboxView from './pages/mapbox-example';
import RegisterView from './pages/register';
import LoginView from './pages/login';
import PasswordResetView from './pages/password-reset';
import ProfileView from './pages/profile';
import RoomsView from './pages/rooms';
import AddRoomView from './pages/add_room';

export default [
  { path: '/', view: HomeView },
  { path: '/about', view: AboutView },
  { path: '/firebase', view: FirebaseView },
  { path: '/mapbox', view: MapboxView },
  { path: '/register', view: RegisterView },
  { path: '/login', view: LoginView },
  { path: '/login/password-reset', view: PasswordResetView },
  { path: '/profile', view: ProfileView },
  { path: '/owner/rooms', view: RoomsView },
  { path: '/owner/rooms/add', view: AddRoomView },
];
