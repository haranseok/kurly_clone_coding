<template>
  <header>
    <div class="inner-container">
      <ul class="h-top flex">
        <li class="cp purple">회원가입</li>
        <li class="cp line">로그인</li>
        <li class="cp info">
          고객센터
          <v-icon>mdi-menu-down</v-icon>
          <ul class="toolbox">
            <li>공지사항</li>
            <li>자주하는 질문</li>
            <li>1:1 문의</li>
            <li>대량주문 문의</li>
          </ul>
        </li>
      </ul>
      <div class="h-middle jcsb">
        <div class="middle-left flex">
          <img src="@/assets/images/kurly_logo.svg" alt="" />
          <button class="cp">마켓컬리</button>
          <button class="cp">뷰티컬리</button>
          <div class="search jcsb">
            <input type="text" placeholder="검색어를 입력해주세요" />
            <v-icon>mdi-magnify</v-icon>
          </div>
        </div>
        <ul class="icon-box flex">
          <li><v-icon size="34px">mdi-map-marker-outline</v-icon></li>
          <li><v-icon size="34px">mdi-heart-outline</v-icon></li>
          <li><v-icon size="34px">mdi-cart-outline</v-icon></li>
        </ul>
      </div>
    </div>
  </header>
  <div class="nav-container">
    <div class="nav-inner inner-container jcsb">
      <div class="nav-box cp">
        <div>
          <v-icon>mdi-menu</v-icon>
          카테고리
        </div>
        <nav>
          <ul class="main-menu">
            <li
              v-for="(list, i) in navList.icon"
              :key="i"
              @mouseover="menuList(i)"
            >
              <img :src="`./icons/${list}.webp`" alt="" />
              <p>{{ navList.name[i] }}</p>
            </li>
          </ul>
          <ul class="sub-nav">
            <li v-for="(subList, i) in subMenu" :key="i">{{ subList }}</li>
          </ul>
        </nav>
      </div>
      <ul class="jcsb center" :class="setScroll ? 'padding' : ''">
        <li>신상품</li>
        <li>베스트</li>
        <li>알뜰쇼핑</li>
        <li>특가/혜택</li>
      </ul>
      <div class="search" v-if="setScroll">
        <input type="text" placeholder="검색어를 입력해주세요" />
        <v-icon class="cp">mdi-magnify</v-icon>
      </div>
      <div class="delivery cp" v-if="isDelivery">
        <span>샛별 · 택배</span>
        배송안내
      </div>
      <ul class="icon-box flex" v-if="setScroll">
        <li><v-icon size="34px">mdi-map-marker-outline</v-icon></li>
        <li><v-icon size="34px">mdi-heart-outline</v-icon></li>
        <li><v-icon size="34px">mdi-cart-outline</v-icon></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isDelivery = ref(true);
const setScroll = ref(false);
const navList = ref({
  icon: [
    "party",
    "grass",
    "apple",
    "shrimp",
    "meat",
    "pot",
    "salad",
    "sauce",
    "coffee",
    "cookie",
    "bread",
    "nutrients",
    "wine",
    "whiskey",
    "living",
    "cosmetics",
    "hair",
    "kitchen",
    "home",
    "animal",
    "baby",
    "best",
  ],
  name: [
    "뷰티컬리페스타",
    "채소",
    "과일 · 견과 · 쌀",
    "수산·해산·건어물",
    "정육·계란",
    "국·반찬·메인요리",
    "샐러드·간편식",
    "면·양념·오일",
    "생수·음료·우유·커피",
    "간식·과자·떡",
    "베이커리·치즈·델리",
    "건강식품",
    "와인·위스키",
    "전통주",
    "생활용품·리빙·캠핑",
    "스킨케어·메이크업",
    "헤어·바디·구강",
    "주방용품",
    "가전제품",
    "반려동물",
    "베이비·키즈·완구",
    "컬리의 추천",
  ],
});
const subMenu = ref();
let scrollY = 0;
const scrollEvent = () => {
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    if (scrollY > 0) {
      isDelivery.value = false;
      setScroll.value = true;
    } else {
      isDelivery.value = true;
      setScroll.value = false;
    }
  });
};

scrollEvent();
const menuList = (i: number) => {
  if (i === 0) {
    subMenu.value = ["a1", "a2"];
  } else if (i === 1) {
    subMenu.value = ["b1", "b2"];
  }
};
</script>

<style lang="scss" scoped>
$purple: rgb(95, 0, 128);
header {
  background: #fff;

  .h-top {
    justify-content: end;
    li {
      padding: 10px;
      font-size: 0.8rem;
      //   font-weight: bold;
      color: #333;
      &.purple {
        color: $purple;
      }
      &.line {
        position: relative;
        &::before,
        &::after {
          position: absolute;
          content: "";
          width: 1px;
          height: 15px;
          top: 12px;
          background: #cccccc;
        }
        &::before {
          left: 0px;
        }
        &::after {
          right: 0px;
        }
      }
    }
    .info {
      position: relative;
      .toolbox {
        display: none;
        position: absolute;
        top: 34px;
        right: 0;
        width: 130px;
        padding: 3px 9px;
        background: rgb(255, 255, 255);
        border: 1px solid rgb(218, 218, 218);
        z-index: 9;
        li {
          padding: 3px;
          font-size: 0.75rem;
          color: #444;
        }
      }
      &:hover .toolbox {
        display: block;
        transition: 0.4s;
      }
    }
  }

  .h-middle {
    height: 60px;
    .middle-left {
      align-items: center;
      button {
        padding-left: 20px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #b5b5b5;
        &:hover {
          color: $purple;
        }
      }
      & > :nth-child(2) {
        position: relative;
        color: $purple;
        &::after {
          position: absolute;
          top: 4px;
          right: -10px;
          content: "";
          width: 1px;
          height: 15px;
          background: #c4c4c4;
        }
      }
      .search {
        width: 400px;
        padding: 10px;
        margin-left: 60px;
        border: 1px solid $purple;
        border-radius: 8px;
        .v-icon {
          cursor: pointer;
          color: $purple;
        }
      }
    }
  }
}
.icon-box {
  li {
    padding: 0 10px;
  }
}

.nav-container {
  width: 100%;
  box-shadow: 0px 4px 10px -4px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: sticky;
  top: 0;
}
.nav-inner {
  height: 55px;
  font-weight: bold;
  .nav-box {
    width: 10%;
    padding: 12px 0;
    position: relative;
    > div:hover {
      color: $purple;
    }
    nav {
      background: #fff;
      border: 1px solid #dbdbdb;
      display: none;
      position: absolute;
      top: 52px;
      .main-menu {
        width: 268px;
        height: 800px;
        overflow-y: scroll;
        li {
          display: flex;
          align-items: center;
          padding: 8px 10px;
          font-size: 0.8rem;
          img {
            width: 25px;
            margin-right: 10px;
          }
          &:hover {
            color: $purple;
            background: #f1f1f1;
          }
        }
      }
    }
    &:hover nav {
      display: block;
    }
    nav:hover .sub-nav {
      display: block;
    }
    .sub-nav {
      position: absolute;
      top: 0px;
      left: 268px;
      display: none;
      overflow-y: scroll;
      width: 268px;
      height: 800px;
      background: #eee;
      animation: 0.2s linear 0s 1 normal none running subMenu;
    }
  }
  .center {
    width: 50%;
    li {
      cursor: pointer;
      &:hover {
        color: $purple;
        text-decoration-line: underline;
        text-underline-position: under;
      }
    }
  }
  .padding {
    max-width: 450px;
  }
  .delivery {
    width: 170px;
    height: 35px;
    border: 2px solid rgb(238, 238, 238);
    border-radius: 15px;
    color: #666;
    text-align: center;
    font-size: 0.85rem;
    line-height: 2.5;
    span {
      color: $purple;
    }
  }
  .search {
    padding: 5px 10px;
    border-radius: 6px;
    background: #f7f7f7;
    input[type="text"] {
      &::placeholder {
        font-size: 0.8rem;
      }
    }
  }
}
@keyframes subMenu {
  0% {
    width: 0;
  }
  100% {
    width: 268px;
  }
}
</style>
