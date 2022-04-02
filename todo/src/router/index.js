import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "@/views/Todo.vue"
import Detail from "@/views/Detail.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Todo",
        component: Todo,
    },
    {
        path : "/Detail",
        name : "Detail",
        component : Detail,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;