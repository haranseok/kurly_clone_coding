<template>
  <div v-if="isBanner">
    <div class="inner-container">
      지금 가입하고, <strong>제철 수박 5,900원</strong>에 받아가세요!
      <v-btn
        icon="mdi-close"
        size="x-small"
        variant="text"
        @click="onClose"
      ></v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isBanner = ref(false);
const onClose = () => {
  setCookie("setModalTime", "timeCookie");
  isBanner.value = false;
};

const setCookie = (name: string, value: string, expiredays?: number) => {
  // 오늘 그만 보기 설정
  //   let todayDate = new Date();
  //   todayDate.setDate(todayDate.getDate() + expiredays);
  // test
  let date = new Date();
  date.setTime(date.getTime() + 1 * 60 * 1000);
  document.cookie =
    encodeURIComponent(name) +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    date.toUTCString() +
    ";path=/";
};

const getCookie = () => {
  let value = document.cookie.split("=");
  return value[1];
};

if (getCookie() === undefined) {
  isBanner.value = true;
}
</script>

<style lang="scss" scoped>
div {
  color: #fff;
  font-size: 0.8rem;
  padding: 2px 0;
  background: #5f0080;
  .inner-container {
    position: relative;
    text-align: center;
    .v-btn {
      position: absolute;
      top: -5px;
      right: 0;
    }
  }
}
</style>
