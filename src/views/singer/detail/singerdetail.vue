<template>

    <div class="wrap">
        <div class="singer-box" v-for="(item,index) in list" :key="index">
            <div class="lef-box">
                <img :src="item.imgurl"  alt="">
            </div>
            <div class="rig-box">
                <h1 class="tit-text">{{item.singerName}}</h1>
                <p>外文名: Jay Chou 国籍：中国 出生地：台湾省新北市 职业：音乐人、制作人、导演、企业家等 出生日期:1979</p>
                <p>单曲<span> 516</span> | <span>专辑 36</span> | <span>mv 7273</span></p>
                <div class="btn-box">
                    <button class="sing-btn">播放歌手热门歌曲</button>
                    <button class="like-btn">+ 关注 3124.7万</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
    .rig-box .btn-box {
        display: flex;
        margin-top: 15px;
    }
    
    .rig-box .btn-box button{
        height: 40px;
        margin-left: 10px;
        border: none;
        width: 180px;
        padding:0 10px;
    }
     .rig-box .btn-box button:nth-child(2){
        margin-left: 0;
        border: 1px solid #ccc;
        margin-left: 10px;
    }
    .rig-box .btn-box button:nth-child(1){
        margin-left: 0;
        background-color: #31C27C;
        color: #fff;
    }
    .rig-box p{
        line-height: 2;
    }
    .wrap{
        width: 80%;
        margin-top: 20px;
    }
    .singer-box{
        width: 100%;
        display: flex;
    }
    .lef-box img{
        width:300px;
        height: 300px;
        border-radius: 50%;
    }
    .rig-box{
        margin-left: 40px;
        line-height: 1.5;
    }
    .rig-box .tit-text{
        margin-top: 20px;
        font-size: 50px;
    }

</style>
<script>
import instance from "../../../api/index"
export default {
    name:"singerDetail",
    data(){
        return{
            list:null
        }
    },
    props:["a"],
    methods:{
        async getdetail(event){
            let {data} = await instance.post("/getdetail",{b:this.a})
            this.list = data

        }
    },
    created(){
        this.getdetail()
    }
}
</script>