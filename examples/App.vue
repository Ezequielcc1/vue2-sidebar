<template>
    <div>
        <vue2-sidebar heading="this test" :links="links" :header-links="header">

        </vue2-sidebar>
    </div>
</template>

<script>
    import Vue2Sidebar from '../src/index';

    export default {
        name: 'app',
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
                    {label: 'Link #2', href: '#/link2', icon: 'fa-glass'},
                    {separator: true},
                    {label: 'Link #3', href: '#/link3', class: 'list-group-item-danger'},
                    {label: 'Link #4', href: '#/link4'},
                    {label: 'Link #5', href: '/link5', type: 'button'},
                ],
                header: [
                    {label: 'Header #1', href: '#/header1'},
                    {label: 'Header #2', href: '#/header2', links: [
                            {label: 'Header #2.1', href: '#/header21'},
                            {label: 'Header #2.2', href: '#/header22'},
                            {separator: true},
                            {label: 'Header #2.13', href: '#/header23'},
                        ]},
                    {label: 'Header #5', href: '#/header3', icon: 'fa-glass'},
                ],
            }
        },
        components: {
            Vue2Sidebar
        },
        methods: {},
    }
</script>
