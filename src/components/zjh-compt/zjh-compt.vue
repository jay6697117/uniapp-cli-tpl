<template>
  <view>
    <view :class="'popup ' + (show == true ? 'on' : '')">
      <view class="title">您已经没有抽奖机会了</view>
      <view class="get" @tap="close">我知道了</view>
    </view>
    <view class="mask" catchtouchmove="true" :hidden="show === false"></view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    close: function() {
      this.$emit('onColse');
    }
  }
};
</script>
<style lang="scss" scoped>
.popup {
  width: 574rpx;
  height: 570rpx;
  background-image: url('https://mn-duoshanghu.oss-cn-beijing.aliyuncs.com/xndj/f4eba20210908110227141.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
  position: fixed;
  top: 26%;
  left: 88rpx;
  z-index: 99;
  transform: translateY(-300%);
  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);

  .title {
    width: 450rpx;
    height: 64rpx;
    line-height: 64rpx;
    text-align: center;
    font-size: 44rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 600;
    color: #f1ba49;
    position: absolute;
    bottom: 190rpx;
    left: 50%;
    transform: translateX(-50%);
  }

  .get {
    width: 408rpx;
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    font-size: 34rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #b61d00;
    background-image: url('~@/static/activity_get_btn.png');
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    bottom: 50rpx;
    left: 50%;
    transform: translateX(-50%);
  }
}

.popup.on {
  transform: translateY(0);
  -webkit-animation: popupOpen 0.8s linear;
  animation: popupOpen 0.8s linear;
}

@keyframes popupOpen {
  0% {
    opacity: 0.6;
    transform: scale3d(0, 0, 1);
  }
  25% {
    transform: scale3d(0.4, 0.4, 1);
  }
  50% {
    transform: scale3d(0.8, 0.8, 1);
  }
  75% {
    transform: scale3d(1.2, 1.2, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
</style>
