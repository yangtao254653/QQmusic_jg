// 新碟
<template>
  <div class="disc-box">
    <ul>
      <li><router-link to="/neidi" active-class="active">内地</router-link></li>
      <li><router-link to="/gangtai" active-class="active">港台</router-link></li>
      <li><router-link to="/oumei" active-class="active">欧美</router-link></li>
      <li><router-link to="/hanguo" active-class="active">韩国</router-link></li>
      <li><router-link to="/riben" active-class="active">日本</router-link></li>
      <li><router-link to="/qita" active-class="active">其他</router-link></li>
    </ul>
    <div>
      <router-view />
    </div>
  </div>
</template>
<style scoped>
  
  .active{
    background-color: #31C27C;
    color: #fff;
    display: block;
    width: 100%;
  }
   .disc-box{
     margin: 0 auto;
   }
   .disc-box ul{
     margin-top: 40px;
     display: flex;
   }
   .disc-box ul li{
     text-align: center;
     width: 60px;
     height: 30px;
     line-height: 30px;
     margin-left: 10px;
   }
</style>
<script>
export default {
  name: "disc",
  methods: {},
};
</script>
<style scoped>
</style>