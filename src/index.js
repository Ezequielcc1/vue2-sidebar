import Vue2Sidebar from './components/Vue2Sidebar'

const Vue2SidebarPlugin = (Vue, params) => {
    Vue.component('vue2-sidebar', Vue2Sidebar);
};

Vue2Sidebar.install = Vue2SidebarPlugin;

export default Vue2Sidebar;
export {Vue2Sidebar, Vue2SidebarPlugin};
