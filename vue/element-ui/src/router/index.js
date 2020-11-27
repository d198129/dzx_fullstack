import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Home from "@/views/Home";
import userInfo from "@/views/UserInfo";
import Form from "@/views/form";

Vue.use(VueRouter);
export default new VueRouter({
    routes: [{
            path: "/",
            name: "Login",
            component: Login,
        },
        {
            path: "/Home",
            name: "home",
            component: Home,
            children: [{
                    path: "UserInfo",
                    name: "userinfo",
                    component: userInfo,
                },
                {
                    path: "form",
                    name: "form",
                    component: Form,
                },
            ],
        },
    ],
});