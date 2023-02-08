import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { FirstActions, ForthActions, SecondActions, ThirdActions } from "../components/welcome/Actions";
import { Forth } from "../components/welcome/Forth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Welcome } from "../views/welcome/Welcome";
import { Start } from "../views/start/Start";
import { Items } from "../views/items/Items";
import { ItemList } from "../views/items/ItemList";
import { ItemCreate } from "../views/items/ItemCreate";
import { Tag } from "../views/tag/Tag";
import { TagCreate } from "../views/tag/TagCreate";

export const routes: RouteRecordRaw[] = [
    {path: '/', redirect: '/welcome'},
    {path: '/start', component: Start},
    {
        path: '/welcome',
        component: Welcome,
        children: [
            {path: '', redirect: '/welcome/1'},
            {path: '1', name: 'welcome1', components: {main: First, footer: FirstActions}},
            {path: '2', name: 'welcome2', components: {main: Second, footer: SecondActions}},
            {path: '3', name: 'welcome3', components: {main: Third, footer: ThirdActions}},
            {path: '4', name: 'welcome4', components: {main: Forth, footer: ForthActions}}
        ]
    },
    {
        path: '/items',
        component: Items,
        children: [
            {path: '', redirect: '/items/list'},
            {path: 'list', component: ItemList},
            {path: 'create', component: ItemCreate}
        ]
    },
    {
        path: '/tags',
        component: Tag,
        children: [
            {path: '', redirect: '/tags/create'},
            {path: 'create', component: TagCreate}
        ]
    }
]