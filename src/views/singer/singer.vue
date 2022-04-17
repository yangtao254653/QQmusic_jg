// 歌手
<template>
  <div class="big-box">
    <div class="bnr-box">
      <img src="../../assets/singerImg/bnr.webp" alt="" />
      <div class="tit-box">
        <p class="top-txt">万千歌手 近在眼前</p>
        <p class="center-txt">登录查看你的关注歌手</p>
        <p class="btn-box">
          <button class="login-btn">立即登录</button>
        </p>
      </div>
    </div>
    <div class="city-box">
      <ul>
        <li v-for="(item,index) in list" :key="index"  :class="indexx==index?'cccx':''"  @click="listfn(index)" :path="item">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in city" :key="index"  :class="indexxx==index?'cccx':''" @click="cityfn(index)">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in sex" :key="index"  :class="indexxxx==index?'cccx':''" @click="sexfn(index)">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in style" :key="index"  :class="indexxxxx==index?'cccx':''" @click="stylefn(index)">{{item}}</li>
      </ul>
    </div>
    <div class="singer-box">
      <ul>
        <li v-for="(item, index) in singers" :key="index" @click="singerfn(item.id)">
          <img :src="item.imgurl" alt="" />
          <p class="singer-name">{{ item.singerName }}</p>
        </li>
      </ul>
    </div>
    <div class="name-box">
      <ul>
        <li>蓝心羽</li>
        <li>等什么君(邓寓君)</li>
        <li>蔡健雅</li>
        <li>许嵩</li>
        <li>李荣浩</li>
        <li>任然</li>
        <li>毛不易</li>
        <li>五月天</li>
        <li>半吨兄弟</li>
        <li>李宇春</li>
        <li>徐佳莹</li>
        <li>阿悠悠</li>
        <li>告五人</li>
        <li>汪苏泷</li>
        <li>成像</li>
        <li>七叔</li>
        <li>旺仔小乔</li>
        <li>程佳佳</li>
        <li>杨丞琳</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
        <li>不是花火呀</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>

.name-box ul{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.name-box ul li{
  width: 20%;
  line-height: 30px;
  font-size: 14px;
}
ul,
li {
  list-style: none;
}
.name-box {
  margin-left: -25px;
  width: 80%;
  margin-top: 20px;
}
.singer-box ul li p {
  margin-top: 15px;
}
.singer-box ul li img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
}
.singer-box ul li {
  cursor: pointer;
  margin-left: 1px;
  width: 244px;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.singer-box ul {
  display: flex;
  flex-wrap: wrap;
}

.singer-box {
  width: 80%;
  margin-left: -30px;
}
.city-box ul {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.city-box ul li {
  overflow: hidden;
   width: 40px;
  height: 25px;
  padding: 0 5px;
  text-align: center;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1px;
}
.city-box ul li:nth-child(1){
  width: 50px;
}
.city-box ul li:hover {
  color: #31c27c;
}

.city-box ul .cccx {
  padding: 0 5px;
  color: white;
  background-color: #31c27c;
  width: 40px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border-radius: 5px;
}
.city-box {
  margin-top: 70px;
  height: 200px;
  width: 80%;
  box-sizing: border-box;
}
.bnr-box .tit-box .btn-box .login-btn {
  width: 140px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  color: #ccc;
  margin-top: 10px;
  cursor: pointer;
}
.bnr-box .tit-box .btn-box .login-btn:hover {
  border: 1px solid #fff;
}
.bnr-box {
  margin-left: -12%;
  position: relative;
}
.bnr-box .tit-box {
  position: absolute;
  top: 25%;
  left: 38%;
  margin-left: -100px;
  color: #fff;
  text-align: center;
}

.bnr-box .tit-box .top-txt {
  font-size: 50px;
}
.bnr-box .tit-box .center-txt {
  font-size: 20px;
  color: #ccc;
}
.bnr-box .tit-box p {
  line-height: 200%;
}
.big-box {
  width: 100vw;
}
.big-box img {
  width: 100%;
  height: 376px;
}
</style>

<script>
import instance from "../../api/index";
export default {
  name: "singer",
  data() {
    return {
      list: ["全部","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      city: ["全部","内地","港台","欧美","日本","韩国"],
      sex:["全部","男","女","组合"],
      style:["全部","流行","说唱","国风","摇滚","电子","民谣","R&B","民族乐","轻音乐","爵士","古典","乡村","蓝调"],
      singers: null,
      indexx:0,
      indexxx:0,
      indexxxx:0,
      indexxxxx:0
    };
  },
  methods: {
    singerfn(id){
     this.$router.push({name:"singerDetail",params:{a:id}})
      console.log(id);
    },
    stylefn(index){
      this.indexxxxx=index
      console.log(index);
    },
    sexfn(index){
      this.indexxxx = index
         this.getSinger(
      {sexs:this.indexxxx,citys:this.indexxx,abcs:this.indexx});
  },
    listfn(index){
      this.indexx = index
        this.getSinger(
      {sexs:this.indexxxx,citys:this.indexxx,abcs:this.indexx});
  },
    cityfn(index){
      this.indexxx = index
      this.getSinger(
      {sexs:this.indexxxx,citys:this.indexxx,abcs:this.indexx});
  },

    async getSinger(index) {
      let { data } = await instance.post("/singer",{...index});
      
      this.singers = data;
      console.log(data);

    },
  },

  created() {
    this.getSinger(
      {sexs:this.indexxxx,citys:this.indexxx,abcs:this.indexx});
  },
};
</script>