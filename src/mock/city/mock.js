let Mock = require("mockjs")
let data = [{
    arr1:["全部","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],
    arr2:["全部","内地","港台","欧美","日本","韩国"],
    arr3:["全部","男","女","组合"],
    arr4:["全部","流行","说唱","国风","摇滚","电子","民谣","R&B","民族乐","轻音乐","爵士","古典","乡村","蓝调"]
}]
//获取
Mock.mock("/api/city","get",function(){
    return data
})