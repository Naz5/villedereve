import Vue from 'vue';
import Router from 'vue-router';

import Home from "@/components/Home";
import StepsForm from "@/components/stepsForm/StepsForm";
import Results from "@/components/results/Results";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            component: Home,
            name: 'home',
            path: '/',
        },
        {
            component: StepsForm,
            name: 'steps',
            path: '/steps',
            props: true
        },
        {
            component: Results,
            name: 'results',
            path: '/results',
            props: true
        },

    ]
});

export default router;