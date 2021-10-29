<template>
  <view class="demo0">
    <picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
      <view class="picker">当前选择：{{ array[index] }}</view>
    </picker>
    <view>------------------------</view>
    <picker mode="date" :value="currentDate" :start="startDate" :end="endDate" @change="bindDateChange">
      <view class="uni-input">{{ currentDate }}</view>
    </picker>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      index: 0,
      array: ['A', 'B', 'C'],
      currentDate: '',
      startDate:'',
      endDate:''
    };
  },
  methods: {
    bindPickerChange(e) {
      console.log(`bindPickerChange e:`, e);
      this.index = e.target.value;
    },
    bindDateChange: function(e) {
      console.log(`bindDateChange e:`, e);
      this.currentDate = e.target.value;
    },
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === 'start') {
        year = year - 30;
      } else if (type === 'end') {
        year = year + 30;
      }

      month = month > 9 ? month : '0' + month;
      day = day > 9 ? day : '0' + day;

      return `${year}-${month}-${day}`;
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
    this.currentDate = this.getDate();
    this.startDate = this.getDate('start');
    this.endDate = this.getDate('end');
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
