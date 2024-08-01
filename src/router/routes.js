import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import NotFound from "../pages/NotFound.vue";
import Detail from "../pages/Detail.vue";

const routes = [
    { path: "/", component: Home, title: "Home", name:"home" },
    { path: "/home", component: Home, label: "Home" },
    { path: "/about", component: About, label: "Sobre mi" },
    { path: "/contact", component: Contact, label: "Contacto" },
    { path: "/project/:id", component: Detail, name:"project", label: "Detalle" },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default routes;
