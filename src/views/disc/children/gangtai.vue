<template>
  <div class="neidi-box">
    <ul class="neidi-ul">
      <li v-for="(item, index) in neidi" :key="index">
        <div class="img-box">
          <img class="singer-img" :src="item.imgurl" alt="" />
          <i class="iconfont icon-bofang"></i>
        </div>
        <p>{{ item.tit }}</p>
        <p class="nd-name">{{ item.name }}</p>
        <p class="nd-time">{{ item.time }}</p>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.neidi-box .neidi-ul .img-box:hover .icon-bofang{
    font-size: 60px;
    opacity: 1;
} 
.neidi-box .neidi-ul .img-box .icon-bofang{
  opacity: 0;
  font-size: 0px;
  
  transition: .5s;
  color: darkturquoise;
  position: absolute;

}
.neidi-box .neidi-ul .img-box{
  position: relative;
    width: 100%;
    height: 210px;
    overflow: hidden;
    display: flex;
    align-items: center;

    justify-content: center;
}
.neidi-box ul li:hover .singer-img{
  transform: scale(1.2);
}
.neidi-box ul li .singer-img{
  transition: .5s;
      width: 100%;
    height: 210px;
}

.neidi-box ul li p{
    font-size: 14px;
}
.neidi-box ul li .nd-name{
    font-size: 14px;
    color: #ccc;
}
.neidi-box ul li .nd-time {
    font-size: 14px;
    color: #ccc;
}
.neidi-box ul li{
    cursor: pointer;
    width: 224px;
    height: 340px;
    overflow: hidden;
}
.neidi-box ul li img{

}
.neidi-box ul{
    justify-content: space-around;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
.neidi-box {
     margin-top: 50px;
}
</style>
<script>
import instance from "../../../api/index";
export default {
  name: "gangtai",
  data() {
    return {
      neidi: null,
    };
  },
  methods: {
    async getNeidi() {
      console.log(111);
      let { data } = await instance.get("/disc/neidi");
      this.neidi = data;
      console.log("111", data);
    },
  },
  created() {
    this.getNeidi();
  },
};
</script>