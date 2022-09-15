import config from '~/config';

//page
import Home from '~/pages/Home';
import Model from '~/pages/Model/Model';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';
import Search from '~/pages/Search';
import Contact from '~/pages/Contact';

//layout
//import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.model, component: Model },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
