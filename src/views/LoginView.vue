<template>
  <f7-login-screen>
    <f7-page no-navbar no-toolbar login-screen>
      <f7-login-screen-title>Framework7</f7-login-screen-title>
      <f7-list form>
        <f7-list-input
          label="Username"
          type="text"
          placeholder="Your username"
          :value="username"
          @input="username = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Password"
          type="password"
          placeholder="Your password"
          :value="password"
          @input="password = $event.target.value"
        ></f7-list-input>
      </f7-list>
      <f7-list>
        <f7-list-button @click="signIn">Sign In</f7-list-button>
        <f7-block-footer
          >Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.</f7-block-footer
        >
      </f7-list>
     </f7-page>
  </f7-login-screen>
</template>
<script lang="ts">
import { PropType } from 'vue'

import {
  f7LoginScreen,
  f7Page,
  f7LoginScreenTitle,
  f7List,
  f7ListButton,
  f7BlockFooter,
  f7ListInput,
  f7,
} from 'framework7-vue';
export default {
  components: {
    f7LoginScreen,
    f7Page,
    f7LoginScreenTitle,
    f7List,
    f7ListButton,
    f7BlockFooter,
    f7ListInput,
  },
  props: {
    f7router: Object,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      this.f7router.back();
    },
  },
};
</script>
