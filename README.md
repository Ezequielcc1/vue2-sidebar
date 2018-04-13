# Vue2Sidebar
> Vue2Sidebar Component for Vue 2.x. Based on this [tutorial](https://bootstrapious.com/p/bootstrap-sidebar) by Bootstrapious.com

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
<vue2-sidebar></vue2-sidebar>
...
</div>
```

## Example

See ```index.html``` for example use


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
