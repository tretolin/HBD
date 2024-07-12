import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [,
    { path: "/", component: Home, },
    { path: "/home", component: Home, },
    { path: "/about", component: About, },
    { path: "/contact", component: Contact, },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound, },
];

export default routes;