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
          <li><v-icon size="36px">mdi-map-marker-outline</v-icon></li>
          <li><v-icon size="36px">mdi-heart-outline</v-icon></li>
          <li><v-icon size="36px">mdi-cart-outline</v-icon></li>
        </ul>
      </div>
    </div>
  </header>
  <div class="nav-container">
    <div class="nav-inner inner-container jcsb">
      <div class="nav-box cp">
        <v-icon>mdi-menu</v-icon>
        카테고리
      </div>
      <ul class="jcsb center">
        <li>신상품</li>
        <li>베스트</li>
        <li>알뜰쇼핑</li>
        <li>특가/혜택</li>
      </ul>
      <div class="delivery">
        <span>샛별 · 택배</span>
        배송안내
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
    .icon-box {
      li {
        padding: 0 10px;
      }
    }
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
    &:hover {
      color: $purple;
    }
  }
  .center {
    width: 50%;
    li {
      cursor: pointer;
      white-space: nowrap;
      &:hover {
        color: $purple;
        text-decoration-line: underline;
        text-underline-position: under;
      }
    }
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
}
</style>
