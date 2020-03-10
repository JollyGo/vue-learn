<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{item.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SubMenu from "./components/SubMenu.vue";
import moment from "moment";
import { version, Menu, Icon } from "ant-design-vue";
export default {
  name: "App",
  components: {
    AMenu: Menu,
    AIcon: Icon,
    AMenuItem: Menu.Item,
    // HelloWorld
    SubMenu
  },
  data() {
    return {
      moment,
      version,
      collapsed: false,
      list: [
        {
          key: "1",
          title: "Option 1"
        },
        {
          key: "2",
          title: "Navigation 2",
          children: [
            {
              key: "2.1",
              title: "Navigation 3",
              children: [{ key: "2.1.1", title: "Option 2.1.1" }]
            }
          ]
        }
      ]
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
