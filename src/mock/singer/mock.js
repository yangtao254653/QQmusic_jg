let Mock = require("mockjs")
let data = [
    {
        id:1,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M0000025NhlN2yWrP4.jpg?max_age=2592000",
        singerName:"周杰伦",
        abcId:1,
        sexId:1,
        cityId:2,
        city:"港台",
        style:"流行"
    },
    {
        id:2,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000004bwEMD0ssUPi.jpg?max_age=2592000",
        singerName:"郭德纲",
        abcId:4,
        sexId:1,
        cityId:1,
        city:"内地",
        style:"相声"
    },
    {
        id:3,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000003Nz2So3XXYek.jpg?max_age=2592000",
        singerName:"陈奕迅",
        abcId:2,
        cityId:2,
        sexId:1,
        city:"港台",
        style:"流行"
    },
    {
        id:4,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000001BLpXF2DyJe2.jpg?max_age=2592000",
        singerName:"林俊杰",
        abcId:1,
        cityId:1,
        sexId:1,
        city:"内地",
        style:"流行"
    },
    {
        id:5,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000004AlfUb0cVkN1.jpg?max_age=2592000",
        singerName:"bigbang",
        abcId:4,
        sexId:1,
        cityId:5,
        city:"韩国",
        style:"流行"
    },
    {
        id:6,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000002J4UUk29y8BY.jpg?max_age=2592000",
        singerName:"薛之谦",
        abcId:2,
        cityId:1,
        sexId:1,
        city:"内地",
        style:"流行"
    },
    {
        id:7,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000003fA5G40k6hKc.jpg?max_age=2592000",
        singerName:"周深",
        abcId:3,
        cityId:1,
        sexId:2,
        city:"内地",
        style:"流行"
    },
    {
        id:8,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000002rHyN14UyyaW.jpg?max_age=2592000",
        singerName:"队长",
        abcId:3,
        cityId:1,
        sexId:1,
        city:"内地",
        style:"流行"
    },
    {
        id:9,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000001fNHEf1SFEFN.jpg?max_age=2592000",
        singerName:"邓紫棋",
        abcId:2,
        cityId:1,
        sexId:2,
        city:"内地",
        style:"流行"
    },
    {
        id:10,
        imgurl:"https://y.qq.com/music/photo_new/T001R500x500M000002YetSZ06c9c9.jpg?max_age=2592000",
        singerName:"王靖雯",
        abcId:3,
        cityId:1,
        sexId:2,
        city:"内地",
        style:"流行"
    }
]
//获取
Mock.mock("/api/singer","post",function(config){
    let id = config.body
    let obj = JSON.parse(id)
    let arr1 =[]
    if(obj.sexs==0){
        arr1=data
    }else{
        arr1=data.filter((item)=>{
            return item.sexId==obj.sexs
        })
    }
    // console.log(arr1);
    if(obj.citys!=0){
        arr1=arr1.filter((item)=>{
            return item.cityId==obj.citys
        })
    }
    //判断abc
    if(obj.abcs!=0){
        arr1=arr1.filter((item)=>{
            return item.abcId==obj.abcs
        })
    }
    console.log(arr1);

    return arr1
})
Mock.mock("/api/getdetail","post",function(config){
    let num =JSON.parse(config.body).b
 
    return data.filter(item=>item.id == num)
})