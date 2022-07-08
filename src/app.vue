<template>
  <f7-app v-bind="f7params" >
    <!-- Your main view, should have "view-main" class -->
    <f7-view
      main
      class="safe-areas"
      url="/"
      browser-history
      browser-history-separator="/m"
      browser-history-root="" />
  </f7-app>
</template>
<script lang="ts">
  import { ref, onMounted } from 'vue'
  import { f7, f7ready, f7App, f7View } from 'framework7-vue'
  import routes from './routes.js'

  export default {
    components: {
      f7App,
      f7View
    },
    setup() {

      // Framework7 Parameters
      const f7params = {
        name: 'My App', // App name
        theme: 'ios', // Automatic theme detection
        // App routes
        routes: routes,
      };
      onMounted(() => {
        f7ready(() => {


          // Call F7 APIs here
        });
      });

      return {
        f7params
      }
    }
  }
</script>
