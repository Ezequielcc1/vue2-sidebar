<template>
    <div>
        <vue2-sidebar heading="Welcome" :links="links" :header-links="header">
            <router-view></router-view>
        </vue2-sidebar>
    </div>
</template>

<script>
    import Vue2Sidebar from '../src/index';
    import VueRouter from 'vue-router';

    Vue.use(VueRouter);

    export default {
        name: 'app',
        router: new VueRouter({
            routes: [{path: '/foo', component: Vue.component('foo', {template: '<div>supports routes too!</div>'})}],
        }),
        data() {
            return {
                links: [
                    {
                        label: 'Home', href: '/home', links: [
                            {label: 'Home #1', href: '/home1'},
                            {
                                label: 'Home #2', href: '/home2', links: [
                                    {label: 'Home #2.1', href: '/home1.1', icon: 'fa-warning'},
                                    {
                                        label: 'Home #2.2', href: '/home1.2', links: [
                                            {label: 'Home #2.2.1', href: '/home1', icon: 'fa-plus-circle'},
                                            {label: 'Home #2.2.2', href: '/home3'},
                                        ]
                                    },
                                    {label: 'Home #2.3', href: '/home1.3'},
                                ]
                            },
                            {label: 'Home #3', href: '/home3'},
                        ],
                    },
                    {label: 'Link #2', href: '#/foo', icon: 'fa-glass'},
                    {separator: true},
                    {label: 'Link #3', path: '/link3', class: 'list-group-item-danger'},
                    {label: 'Link #4', href: '/link4'},
                    {label: 'Router', path: '/foo'},
                    {label: 'Link #6', href: '/#test', button: true},
                ],
                header: [
                    {label: 'Header #1', path: '/foo'},
                    {
                        label: 'Header #2', href: '#/header2', links: [
                            {label: 'Header #2.1', href: '#/header21'},
                            {label: 'Header #2.2', href: '#/header22'},
                            {separator: true},
                            {label: 'Header #2.13', href: '#/header23'},
                        ]
                    },
                    {label: 'Header #5', href: '#/header3', icon: 'fa-glass', button: true},
                ],
            }
        },
        components: {
            Vue2Sidebar
        },
        methods: {},
    }
</script>
