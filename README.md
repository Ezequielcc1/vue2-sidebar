# Vue2Sidebar
> Bootstrap Sidebar Component for Vue 2.x. Based on this [tutorial](https://bootstrapious.com/p/bootstrap-sidebar) by Bootstrapious.com

## Install

``` bash
    npm install vue2-sidebar --save
```

## Demo

For demo, please [see here](https://jsfiddle.net/superasn/mn8g1eud/) 

## Usage

*1\. Import the component*

```
import Vue2Sidebar from 'vue2-sidebar';
```

*2\.1 Use it globally*

```
Vue.use(Vue2Sidebar);
```

*2\.2 Or use it locally*

```
components: {
    'vue2-sidebar': Vue2Sidebar
},
```

*3\. Update your app or template:*
```
<div>
...
<vue2-sidebar :links="Array"></vue2-sidebar>
...
</div>
```

## Properties

 `heading`: `{type: String}` (heading above sidebar),
            
`links`: `{type: Array}` - Array of links to display in sidebar. Each array item is an Object that has the following properties: `label`, `href`, `icon`, `class` and `links` (for nested links),
            
`show-header`: `{type: Boolean, default: true}`: Hide the nav header in the right pane

`header-links`: `{type: Array}`: Similar to links but these are shown in the nav header in right pane.

## Slots

The following slots can be used to customize the sidebar

`sidebar-header`: Any header you want to put above your sidebar.

`header-links`: If you want to replace the default header links with your own nav component

`default`: Place your content between the `<vue2-sidebar></vue2-sidebar>` tags. You can also place `<router-view></router-view>` too!

## Example

Please see [index.html](examples/index.html) for example use, links format, etc. See the demo link above for the same.

## Contributing
Contributions are welcome

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
