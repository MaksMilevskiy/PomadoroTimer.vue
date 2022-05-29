import { createRouter, createWebHistory } from "vue-router";
import Timer from '../components/Timer.vue';
import Main from '../components/Main.vue';
import Settings from '../components/Settings.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/timer',
        component: Timer
    },
    {
        path: '/',
        component: Main
    },
    {
        path: '/settings',
        component: Settings
    }]
});

export default router;