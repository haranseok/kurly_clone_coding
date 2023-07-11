<template>
  <v-app>
    <Banner />
    <router-view name="TheHeader"></router-view>
    <router-view></router-view>
    <router-view name="TheFooter"></router-view>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "@/components/modals/BannerModal.vue";
export default defineComponent({
  name: "App",
  data() {
    return {
      //
    };
  },
  components: {
    Banner,
  },
});
</script>
