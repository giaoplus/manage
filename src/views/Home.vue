<template>
  <v-app id="Home">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list-item
        link
        :to="{name: 'DashBoard'}"
      >
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>控制面板</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        prepend-icon="mdi-home"
        v-model="contentDrawer"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>内容管理</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          link
          :to="{name: 'Content', params: { category: 'news' }}"
        >
          <v-list-item-content>
            <v-list-item-title>快讯</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          :to="{name: 'Content', params: { category: 'talk' }}"
        >
          <v-list-item-content>
            <v-list-item-title>评测</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          :to="{name: 'Content', params: { category: 'demo' }}"
        >
          <v-list-item-content>
            <v-list-item-title>案例</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item
        link
        :to="{name: 'User'}"
      >
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>用户管理</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        prepend-icon="mdi-home"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>系统设置</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          link
          :to="{name: 'Setting'}"
        >
          <v-list-item-content>
            <v-list-item-title>网站设置</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          :to="{name: 'Categorys'}"
        >
          <v-list-item-content>
            <v-list-item-title>内容分类</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          :to="{name: 'Models'}"
        >
          <v-list-item-content>
            <v-list-item-title>内容模型</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          :to="{name: 'Auths'}"
        >
          <v-list-item-content>
            <v-list-item-title>角色权限</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
      color="blue-grey"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      drawer: true,
      contentDrawer: true
    }
  }
}
</script>
