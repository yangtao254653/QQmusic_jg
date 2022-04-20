<template>
  <div class="main">
    <div class="bg" :style="bgimage"></div>
    <div class="box"></div>
    <div class="container">
      <div class="top">
        <div class="hist">QQ音乐</div>
        <div class="login">
          <span>登录</span>
          <span>设置</span>
        </div>
      </div>
      <div class="cen">
        <div class="lists">
            <ul class="tabs">
                <li><i class="iconfont icon-shoucang"></i> 收藏</li>
                <li><i class="iconfont icon-tianjiadao"></i> 添加到</li>
                <li><i class="iconfont icon-xiazai"></i> 下载</li>
                <li><i class="iconfont icon-shanchu"></i> 删除</li>
                <li><i class="iconfont icon-shuazi"></i> 清空列表</li>
            </ul>
            <div class="radio">
                <div class="ge"></div>
            </div>
        </div>
        <div class="rig">
          <div class="imgs">
            <el-image style="width: 100%; height: 100%" :src="bg"></el-image>
            <el-image
              style="width: 100%; height: 100%"
              :src="bg"
              class="img1"
            ></el-image>
            <el-image
              style="width: 100%; height: 100%"
              :src="bg"
              class="img2"
            ></el-image>
          </div>
          <div>{{ dats.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plays",
  data() {
    return {
      bg: null,
      bgimage: "",
      dats: null,
    };
  },
  methods: {
    getimg() {
      let obj = decodeURIComponent(this.$route.query.items);
      this.dats = JSON.parse(obj);
      console.log(this.dats);
      this.bg = JSON.parse(obj).image;
      this.bgimage = 'background-image:url("' + this.bg + '")';
    },
  },
  created() {
    this.getimg();
  },
};
</script>
<style scoped>
.main {
  /* background: rgba(240, 50, 154, 0.15); */
  /* background: rgba(82, 243, 50, 0.15); */
  /* background: rgba(85, 50, 243, 0.15); */
  background: rgba(243, 121, 50, 0.15);
  width: 100vw;
  height: 100vh;
  position: relative;
  color: #ccc;
  overflow: hidden;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  filter: blur(20px);
  z-index: -1;
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}
.top > div {
  cursor: pointer;
}
.top {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.top .hist {
  font-size: 20px;
  color: #666;
}
.top .hist:hover {
  color: #ccc;
}
.top span {
  margin: 0 10px;
}
.cen {
  display: flex;
  justify-content: space-around;
}
.lists{
    flex: 1.5;
    box-sizing: border-box;
    padding: 0 10%;
}
.rig{
    flex: 0.7;
}
.imgs {
  width: 200px;
  height: 180px;
  position: relative;
  margin-bottom: 20px;
}
.img1 {
  position: absolute;
  top: 0;
  left: -20px;
  z-index: -1;
}
.img2 {
  position: absolute;
  top: 0;
  right: -20px;
  z-index: -1;
}
.lists .tabs{
    display: flex;
    justify-content: space-between;
}
.tabs li{
    flex: 1;
    cursor: pointer;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 14px;
    margin: 0 5px;
    line-height: 30px;
}
.tabs>li:hover{
    color: white;
    border-color: white;
}
.radio{
    margin-top: 10px;
    height: 75vh;
    overflow-y: scroll;
    scrollbar-arrow-color: #fff;
    scrollbar-face-color: #666;
    scrollbar-track-color: transparent;
}
.ge{
    background: purple;
    height: 100vh;
}
.radio::-webkit-scrollbar-track{
    background: transparent;
}
</style>
