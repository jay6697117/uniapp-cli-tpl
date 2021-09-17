<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <view><button class="btn" @tap="goDemo1">demo1</button></view>
    <view><button class="btn" @tap="goDemo2">demo2</button></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello - uniapp'
    };
  },
  methods: {
    goDemo1() {
      console.log('goDemo1 run ~~~');
      uni.navigateTo({
        url: '/pages/demo1/demo1',
        success() {
          const route = getCurrentPages()[getCurrentPages().length - 1].route;
          console.log(`goDemo1 route:`, route);
        }
      });
    },
    goDemo2() {
      console.log('goDemo2 run ~~~');
      uni.navigateTo({
        url: '/pages/demo2/demo2',
        success() {
          const route = getCurrentPages()[getCurrentPages().length - 1].route;
          console.log(`goDemo2 route:`, route);
        }
      });
    }
  },
  onLoad() {}
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn {
    margin-top: 20rpx;
    padding: 0 20rpx;
    height: 80rpx;
    border-radius: 20rpx;
    background-color: skyblue;
    color:#000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
