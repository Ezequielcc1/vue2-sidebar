<template>
    <ul class="list-unstyled" :class="className || 'components'">
        <li v-for="(node, i) in nodes" :class="{[node.class]: true, cta: node.type === 'button', separator: node.separator}">
            <template v-if="!node.links">
                <template v-if="!node.separator">
                    <i class="icon fa fa-fw" :class="{[node.icon]: true}" v-if="node.icon"></i>
                    <a :href="node.href" v-html="node.label"></a>
                </template>
            </template>
            <template v-else>
                <a :href="'#' + slug(i)" data-toggle="collapse" aria-expanded="false" v-html="node.label"></a>
                <tree-menu :nodes="node.links" :id="slug(i)" :level="level + 1" className="nested collapse" style="padding-left: 20px;"></tree-menu>
            </template>
        </li>
    </ul>
</template>

<script>
    import TreeMenu from './TreeMenu';

    export default {
        name: 'tree-menu',
        props: {nodes: {type: Array}, className: {type: String}, level: {type: Number, default: 0}},
        components: {TreeMenu},
        methods: {
            slug(i) {
                return 'node-' + this.level + '-' + i;
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    ul.components {
        padding: 0 0 20px;
        border-bottom: 1px solid #47748b;
    }

    ul li {
        position: relative;
    }

    ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
        color: #fff;
        transition: none;
    }

    ul li a:hover {
        color: #7386D5;
        background: #fff;
    }

    ul li:hover > i.fa {
        pointer-events: none;
    }

    ul li:hover > i.fa {
        color: #7386D5;
    }

    ul li.active > a, a[aria-expanded="true"] {
        color: #fff;
        background: #6d7fcc;
    }

    a[data-toggle="collapse"] {
        position: relative;
    }

    a[aria-expanded="false"]::before, a[aria-expanded="true"]::before {
        display: block;
        position: absolute;
        right: 20px;
        top: 20px;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
        transition: transform 0.4s ease 0.1s;
    }

    a[aria-expanded="true"]::before {
        transform: rotate(180deg);
    }

    .nested a {
        /*font-size: 1em !important;*/
        /*background: #6d7fcc;*/
    }

    li.separator {
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        height: 1px;
        margin: 10px 0 11px;
    }

    li.cta {
        padding: 20px;
    }

    li.cta a {
        text-align: center;
        font-size: 0.9em !important;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
        background: #fff;
        color: #7386D5;
    }

    .icon {
        position: absolute;
        right: 15px;
        top: 15px;
    }
</style>