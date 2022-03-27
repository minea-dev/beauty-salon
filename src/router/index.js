import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView'
import TreatmentsView from '@/views/TreatmentsView'
import ServicesView from '@/views/ServicesView'
import ContactView from '@/views/ContactView'

const routes = [{
    path: "/",
    name: "Home",
    component: HomeView,
}, {
    path: "/tratamientos",
    name: "Treatments",
    component: TreatmentsView,
}, {
    path: "/servicios",
    name: "Services",
    component: ServicesView,
}, {
    path: "/contacto",
    name: "Contact",
    component: ContactView,
}, ];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// Change document titles

// Route guard for auth routes

export default router;