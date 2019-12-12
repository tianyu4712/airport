/* eslint-disable */
import Vue from 'vue';
import App from './App';
import { router } from './router';
import 'amfe-flexible';
import { Checkbox, CheckboxGroup, Panel, Tab, Tabs, Row, Col, NavBar, Button, Icon, Cell, CellGroup, Field, Dialog, Overlay, Image, Divider, Step, Steps, Tag, DropdownMenu, DropdownItem } from 'vant';

// 全局注册
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Panel);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Dialog);
Vue.use(Overlay);
Vue.use(Row);
Vue.use(Col);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Image);
Vue.use(Divider);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Tag);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
