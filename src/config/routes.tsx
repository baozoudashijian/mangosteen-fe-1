import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { FirstActions, ForthActions, SecondActions, ThirdActions } from "../components/welcome/Actions";
import { Forth } from "../components/welcome/Forth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
    {path: '/', redirect: '/welcome'},
    {
        path: '/welcome',
        component: Welcome,
        children: [
            {path: '', redirect: '/welcome/1'},
            {path: '1', components: {main: First, footer: FirstActions} },
            {path: '2', components: {main: Second, footer: SecondActions}},
            {path: '3', components: {main: Third, footer: ThirdActions}},
            {path: '4', components: {main: Forth, footer: ForthActions}}
        ]
    },
]