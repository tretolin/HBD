import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import NotFound from "../pages/NotFound.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";

const routes = [
    { path: "/", component: Home, title: "Home" },
    { path: "/home", component: Home, label: "Home" },
    { path: "/about", component: About, label: "About" },
    { path: "/contact", component: Contact, label: "Contact" },
    { path: "/project/:id", component: ProjectDetail, name:"project", label: "Detail" },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default routes;
