<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false">
      <f7-link href="/login">App</f7-link>
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar bottom tabbar>
      <f7-link tab-link href="./" route-tab-id="home">首頁</f7-link>
    </f7-toolbar>
    <LoginView />
  </f7-page>
</template>
<script lang="ts">
import { f7Page, f7Navbar, f7Toolbar, f7Link } from 'framework7-vue'
import { defineComponent } from 'vue'
import LoginView from './LoginView.vue'

export default defineComponent({
  components: { f7Page, f7Navbar, f7Toolbar, f7Link, LoginView }
})
</script>
