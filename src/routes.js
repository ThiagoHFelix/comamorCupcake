import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';
import Login from './pages/login.vue';

//==================================================
//XXX Default
//==================================================
import Encomendas from './pages/default/encomendas.vue';
import Cupcakes from './pages/default/cupcakes.vue';
import Empresa from './pages/default/empresa.vue';
import Contato from './pages/default/contato.vue';

import PanelLeftPage from './pages/panel-left.vue';

export default [
    {
        path: "/contato/",
        component: Contato
    },
    {
        path: "/empresa/",
        component: Empresa
    },
    {
        path: "/cupcakes/",
        component: Cupcakes
    },
    {
        path: "/encomendas/",
        component: Encomendas
    },
    {
        path: "/login/",
        component: Login
    },
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/panel-left/',
        component: PanelLeftPage,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/form/',
        component: FormPage,
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];
