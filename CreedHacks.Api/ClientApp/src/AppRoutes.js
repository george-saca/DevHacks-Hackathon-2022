import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { UiAddToCart } from "./components/UiAddToCart";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/uiAddToCart',
    element: <UiAddToCart />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
