import BooksView from "@/views/BooksView.vue";
import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import BookDetailView from "@/views/BookDetailView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: HomeView, name: "home" },
    { path: "/books", component: BooksView, name: "books" },
    { path: "/books/:id", component: BookDetailView, name: "book-detail" },
    { path: "/contact", component: ContactView, name: "contact" },
    { path: "/login", component: LoginView, name: "login" },
    { path: "/register", component: RegisterView, name: "register" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
});

export default router;
