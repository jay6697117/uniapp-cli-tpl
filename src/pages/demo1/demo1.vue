<template>
  <view class="demo1">
    <radio-group class="radio-group" @change="radioChange">
      <label class="radio" v-for="(item, index) in items" :key="item.name">
        <radio :value="item.value" :checked="item.checked" />
        {{ item.title }}
      </label>
    </radio-group>
    <view>{{ index }}</view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      index: 1,
      items: [
        { name: 'USA', value: 1, title: '美国', checked: false },
        { name: 'CHN', value: 2, title: '中国', checked: false },
        { name: 'BRA', value: 3, title: '巴西', checked: false },
        { name: 'JPN', value: 4, title: '日本', checked: false },
        { name: 'ENG', value: 5, title: '英国', checked: false },
        { name: 'TUR', value: 6, title: '法国', checked: false }
      ]
    };
  },
  methods: {
    radioChange(e) {
      const index = e.target.value;
      this.index = index;
      console.log('radio发生change事件，携带value值为: ', index);
    }
  },
  computed: {},
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {
    this.items.forEach(element => {
      if ((element.value === this.index)) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
  },
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh() {
    uni.stopPullDownRefresh();
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {}
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
};
</script>

<style lang="scss" scoped></style>
