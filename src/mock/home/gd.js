let Mock = require("mockjs");
let gdtj = {
  为你推荐: [
    {
      title: "流行 | 释放压力时必备歌单",
      num: "5975.8万",
      image:
        "https://qpic.y.qq.com/music_cover/ib1G8O9KWTTHDeps27QvvzuKribpkkWRayWcKbibPNPqOuthUKbQ1Vy0Q/300?n=1",
    },
    {
      title: "就是南方凯：吉他弹出内心的悲伤",
      num: "592.4万",
      image:
        "https://qpic.y.qq.com/music_cover/rOSN3ia0OP1NDTel2pbfkNxhyS7R8m59rQU5JYibM1N7e3p6gwTuovOw/300?n=1",
    },
    {
      title: "效率加倍丨学习工作专属轻音乐",
      num: "5842.4万",
      image:
        "https://qpic.y.qq.com/music_cover/dq5UenayM4jZR6dQv1kVkxanNr786ZVFzLxMgHKuTuFeo7LGokULOA/300?n=1",
    },
    {
      title: "恋爱必听！甜到齁的rap情歌",
      num: "555.4万",
      image:
        "https://qpic.y.qq.com/music_cover/4sLx94ibHnz1nDfLQHYM6IKpic6xG9CYpaT96icsoOekF0thDzE9Y2F3A/300?n=1",
    },
    {
      title: "Pop music｜坠入欧美音海深处",
      num: "1832.4万",
      image:
        "https://qpic.y.qq.com/music_cover/hibibCWiaO6RZzGGCYYicdoVn4xS5qicrRuvkeiaSmQ7DFiaHpwB7R5xISicPQ/300?n=1",
    },
    {
      title: "微丧片段|聆听内心深处.",
      num: "2997.1万",
      image:
        "https://qpic.y.qq.com/music_cover/ic1wuic6XcAAIUvu1fG9JicwlibQYd6eFPjwnfEibsN7CG4UqdZwkwCtfHA/300?n=1",
    },
    {
      title: "耳机分你一个，想和你开启好心情",
      num: "6641.7万",
      image:
        "https://qpic.y.qq.com/music_cover/ohiaZqwFXiaibc0QWF9hPuyDM6QP33AwUju63Zqu0N7yKPfPfn2QiaHZsw/300?n=1",
    },
    {
      image:
        "https://qpic.y.qq.com/music_cover/tLkiayu4IiaIZo1t56qczThgJF6bzPSwCSwTUeqIXAria4GIC1N0AsoHg/300?n=1",
      title: "500首轻音收集 ：学渣听了也想考北大",
      num: "4696万",
    },
    {
      title: "百首值得静听老歌：我被青春撞了下腰",
      num: "1.6亿",
      image:
        "https://qpic.y.qq.com/music_cover/5jvDX14RLylr9k5PnsA7jvHPiawv6uwP11WQUBaxOWhlhcS0xuhrwZw/300?n=1",
    },
    {
      title: "单曲循环：传遍大街小巷的新潮风",
      num: "6345.7万",
      image:
        "https://qpic.y.qq.com/music_cover/Lbibx7GJ6ZzToOtt2HL7x0FWJj3pC7oBTgS02tVXkIibKU0ygUhNfcKA/300?n=1",
    },
    {
      title: "压迫感十足：鬼影兵团召唤术",
      num: "614.7万",
      image:
        "https://qpic.y.qq.com/music_cover/Fl6GDpN1TujDc74fjVrHtHBUAJ3CYibolicGMonAkY1yfXUwHR08HCMQ/300?n=1",
    },
  ],
  九月推荐: [
    {
      title: "AT17：“甩拖”系为咗组合更完整",
      num: "17.1万",
      image:
        "https://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1Uv9bdcZuSOru2uOeQiadIMbHribIjOccyNWA/600?n=1&err_retry=1",
    },
    {
      title: "唔识氹女仔？成日做呢啲唔恼你先奇",
      num: "5975.8万",
      image:
        "https://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9mKZ90Gib00sAHOG6Jw2HEdgzv9zGbkWp8A/600?n=1",
    },
    {
      title: "AT17：“甩拖”系为咗组合更完整",
      num: "17.1万",
      image:
        "https://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1Uv9bdcZuSOru2uOeQiadIMbHribIjOccyNWA/600?n=1&err_retry=1",
    },
    {
      title: "唔识氹女仔？成日做呢啲唔恼你先奇",
      num: "5975.8万",
      image:
        "https://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9mKZ90Gib00sAHOG6Jw2HEdgzv9zGbkWp8A/600?n=1",
    },
    {
      title: "AT17：“甩拖”系为咗组合更完整",
      num: "17.1万",
      image:
        "https://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1Uv9bdcZuSOru2uOeQiadIMbHribIjOccyNWA/600?n=1&err_retry=1",
    },
    {
      title: "唔识氹女仔？成日做呢啲唔恼你先奇",
      num: "5975.8万",
      image:
        "https://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9mKZ90Gib00sAHOG6Jw2HEdgzv9zGbkWp8A/600?n=1",
    },
    {
      title: "AT17：“甩拖”系为咗组合更完整",
      num: "17.1万",
      image:
        "https://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1Uv9bdcZuSOru2uOeQiadIMbHribIjOccyNWA/600?n=1&err_retry=1",
    },
    {
      title: "唔识氹女仔？成日做呢啲唔恼你先奇",
      num: "5975.8万",
      image:
        "https://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9mKZ90Gib00sAHOG6Jw2HEdgzv9zGbkWp8A/600?n=1",
    },
    {
      title: "AT17：“甩拖”系为咗组合更完整",
      num: "17.1万",
      image:
        "https://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1Uv9bdcZuSOru2uOeQiadIMbHribIjOccyNWA/600?n=1&err_retry=1",
    },
    {
      title: "唔识氹女仔？成日做呢啲唔恼你先奇",
      num: "5975.8万",
      image:
        "https://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9mKZ90Gib00sAHOG6Jw2HEdgzv9zGbkWp8A/600?n=1",
    },
    {
      title: "AT17：“甩拖”系为咗组合更完整",
      num: "17.1万",
      image:
        "https://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1Uv9bdcZuSOru2uOeQiadIMbHribIjOccyNWA/600?n=1&err_retry=1",
    },
    {
      title: "唔识氹女仔？成日做呢啲唔恼你先奇",
      num: "5975.8万",
      image:
        "https://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9mKZ90Gib00sAHOG6Jw2HEdgzv9zGbkWp8A/600?n=1",
    },
    {
      title: "AT17：“甩拖”系为咗组合更完整",
      num: "17.1万",
      image:
        "https://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1Uv9bdcZuSOru2uOeQiadIMbHribIjOccyNWA/600?n=1&err_retry=1",
    },
    {
      title: "唔识氹女仔？成日做呢啲唔恼你先奇",
      num: "5975.8万",
      image:
        "https://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9mKZ90Gib00sAHOG6Jw2HEdgzv9zGbkWp8A/600?n=1",
    },
    {
      title: "AT17：“甩拖”系为咗组合更完整",
      num: "17.1万",
      image:
        "https://p.qpic.cn/music_cover/53Unr0jHFibpmKbAEqvT1Uv9bdcZuSOru2uOeQiadIMbHribIjOccyNWA/600?n=1&err_retry=1",
    },
    {
      title: "唔识氹女仔？成日做呢啲唔恼你先奇",
      num: "5975.8万",
      image:
        "https://p.qpic.cn/music_cover/tVHdkb5iaiaTyibtbrmFXiaX9mKZ90Gib00sAHOG6Jw2HEdgzv9zGbkWp8A/600?n=1",
    },
  ],
  经典国语: [
    {
      title: "温柔华语 | 把故事藏在歌中",
      num: "130.9万",
      image:
        "https://p.qpic.cn/music_cover/xjBX9k8QoGbAUicX1ialfQPNzIP2mImXuqoUnCghicEfEodV7Wt12qTOw/600?n=1",
    },
    {
      title: "华语|羡慕歌里唱的那个她",
      num: "143.8万",
      image:
        "https://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8hxAfpQCrOzlP3IEVgpGlTTwPDbPicVXFaQ/600?n=1",
    },
    {
      title: "温柔华语 | 把故事藏在歌中",
      num: "130.9万",
      image:
        "https://p.qpic.cn/music_cover/xjBX9k8QoGbAUicX1ialfQPNzIP2mImXuqoUnCghicEfEodV7Wt12qTOw/600?n=1",
    },
    {
      title: "华语|羡慕歌里唱的那个她",
      num: "143.8万",
      image:
        "https://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8hxAfpQCrOzlP3IEVgpGlTTwPDbPicVXFaQ/600?n=1",
    },
    {
      title: "温柔华语 | 把故事藏在歌中",
      num: "130.9万",
      image:
        "https://p.qpic.cn/music_cover/xjBX9k8QoGbAUicX1ialfQPNzIP2mImXuqoUnCghicEfEodV7Wt12qTOw/600?n=1",
    },
    {
      title: "华语|羡慕歌里唱的那个她",
      num: "143.8万",
      image:
        "https://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8hxAfpQCrOzlP3IEVgpGlTTwPDbPicVXFaQ/600?n=1",
    },
    {
      title: "温柔华语 | 把故事藏在歌中",
      num: "130.9万",
      image:
        "https://p.qpic.cn/music_cover/xjBX9k8QoGbAUicX1ialfQPNzIP2mImXuqoUnCghicEfEodV7Wt12qTOw/600?n=1",
    },
    {
      title: "华语|羡慕歌里唱的那个她",
      num: "143.8万",
      image:
        "https://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8hxAfpQCrOzlP3IEVgpGlTTwPDbPicVXFaQ/600?n=1",
    },
    {
      title: "温柔华语 | 把故事藏在歌中",
      num: "130.9万",
      image:
        "https://p.qpic.cn/music_cover/xjBX9k8QoGbAUicX1ialfQPNzIP2mImXuqoUnCghicEfEodV7Wt12qTOw/600?n=1",
    },
    {
      title: "华语|羡慕歌里唱的那个她",
      num: "143.8万",
      image:
        "https://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8hxAfpQCrOzlP3IEVgpGlTTwPDbPicVXFaQ/600?n=1",
    },
    {
      title: "温柔华语 | 把故事藏在歌中",
      num: "130.9万",
      image:
        "https://p.qpic.cn/music_cover/xjBX9k8QoGbAUicX1ialfQPNzIP2mImXuqoUnCghicEfEodV7Wt12qTOw/600?n=1",
    },
    {
      title: "华语|羡慕歌里唱的那个她",
      num: "143.8万",
      image:
        "https://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8hxAfpQCrOzlP3IEVgpGlTTwPDbPicVXFaQ/600?n=1",
    },
  ],
  经典粤语: [
    {
      title: "♡那些关于暗恋的粤语情歌♡",
      num: "44.1万",
      image:
        "https://p.qpic.cn/music_cover/pnFM3IVuEmWfUfc9Z71D5iaCtXhOStiaWHu6ka9GTSvHPuN4LyJTBicQw/600?n=1",
    },
    {
      title: "【闽南语对唱】情歌分你一半唱",
      num: "40.2万",
      image:
        "https://p.qpic.cn/music_cover/WjhDFKViaqCmEFjlUV8ZPV9eg43shHKsYZmpsXfxlpHGqsDXazPx2KQ/600?n=1",
    },
    {
      title: "♡那些关于暗恋的粤语情歌♡",
      num: "44.1万",
      image:
        "https://p.qpic.cn/music_cover/pnFM3IVuEmWfUfc9Z71D5iaCtXhOStiaWHu6ka9GTSvHPuN4LyJTBicQw/600?n=1",
    },
    {
      title: "【闽南语对唱】情歌分你一半唱",
      num: "40.2万",
      image:
        "https://p.qpic.cn/music_cover/WjhDFKViaqCmEFjlUV8ZPV9eg43shHKsYZmpsXfxlpHGqsDXazPx2KQ/600?n=1",
    },
    {
      title: "♡那些关于暗恋的粤语情歌♡",
      num: "44.1万",
      image:
        "https://p.qpic.cn/music_cover/pnFM3IVuEmWfUfc9Z71D5iaCtXhOStiaWHu6ka9GTSvHPuN4LyJTBicQw/600?n=1",
    },
    {
      title: "【闽南语对唱】情歌分你一半唱",
      num: "40.2万",
      image:
        "https://p.qpic.cn/music_cover/WjhDFKViaqCmEFjlUV8ZPV9eg43shHKsYZmpsXfxlpHGqsDXazPx2KQ/600?n=1",
    },
  ],
  官方歌单: [
    {
      title: "华语 | 一起野餐吧",
      num: "13万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMBu6rLGuN9Nm2MwIFxTCmDg/300?n=1&n=1",
    },
    {
      title: "轻音乐 | 心在旅行",
      num: "33.6万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XM7KbPBpd3eJiaOqq2Gz733qA/300?n=1&n=1",
    },
    {
      title: "韩语流行｜从朋友，到恋人",
      num: "22.8万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMN0UASDNODl0UkVOtlDrgiag/300?n=1&n=1",
    },
    {
      title: "华语 | 一起野餐吧",
      num: "13万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMBu6rLGuN9Nm2MwIFxTCmDg/300?n=1&n=1",
    },
    {
      title: "轻音乐 | 心在旅行",
      num: "33.6万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XM7KbPBpd3eJiaOqq2Gz733qA/300?n=1&n=1",
    },
    {
      title: "韩语流行｜从朋友，到恋人",
      num: "22.8万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMN0UASDNODl0UkVOtlDrgiag/300?n=1&n=1",
    },
    {
      title: "华语 | 一起野餐吧",
      num: "13万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMBu6rLGuN9Nm2MwIFxTCmDg/300?n=1&n=1",
    },
    {
      title: "轻音乐 | 心在旅行",
      num: "33.6万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XM7KbPBpd3eJiaOqq2Gz733qA/300?n=1&n=1",
    },
    {
      title: "韩语流行｜从朋友，到恋人",
      num: "22.8万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMN0UASDNODl0UkVOtlDrgiag/300?n=1&n=1",
    },
    {
      title: "华语 | 一起野餐吧",
      num: "13万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMBu6rLGuN9Nm2MwIFxTCmDg/300?n=1&n=1",
    },
    {
      title: "轻音乐 | 心在旅行",
      num: "33.6万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XM7KbPBpd3eJiaOqq2Gz733qA/300?n=1&n=1",
    },
    {
      title: "韩语流行｜从朋友，到恋人",
      num: "22.8万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMN0UASDNODl0UkVOtlDrgiag/300?n=1&n=1",
    },
    {
      title: "韩语流行｜从朋友，到恋人",
      num: "22.8万",
      image:
        "https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJTN5qBpjx5XMN0UASDNODl0UkVOtlDrgiag/300?n=1&n=1",
    },
  ],
  情歌: [
    {
      title: "听首情歌，再承受不住泪的重量",
      num: "34.8万",
      image:
        "https://p.qpic.cn/music_cover/Y0ta9yibwV0kibD45wic0vNbxBbo0EL5ElwsiaP2iattx076o3k8u3Vf3ZA/600?n=1",
    },
    {
      title: "小奶狗心动警报！年下恋OST",
      num: "37.8万",
      image:
        "https://p.qpic.cn/music_cover/JKNRKMiciaU6Su0ibZV93emzkSkDH58brL805GmSTWlLUhTlNdicYNkA3g/600?n=1",
    },
    {
      title: "听首情歌，再承受不住泪的重量",
      num: "34.8万",
      image:
        "https://p.qpic.cn/music_cover/Y0ta9yibwV0kibD45wic0vNbxBbo0EL5ElwsiaP2iattx076o3k8u3Vf3ZA/600?n=1",
    },
    {
      title: "小奶狗心动警报！年下恋OST",
      num: "37.8万",
      image:
        "https://p.qpic.cn/music_cover/JKNRKMiciaU6Su0ibZV93emzkSkDH58brL805GmSTWlLUhTlNdicYNkA3g/600?n=1",
    },
    {
      title: "听首情歌，再承受不住泪的重量",
      num: "34.8万",
      image:
        "https://p.qpic.cn/music_cover/Y0ta9yibwV0kibD45wic0vNbxBbo0EL5ElwsiaP2iattx076o3k8u3Vf3ZA/600?n=1",
    },
    {
      title: "小奶狗心动警报！年下恋OST",
      num: "37.8万",
      image:
        "https://p.qpic.cn/music_cover/JKNRKMiciaU6Su0ibZV93emzkSkDH58brL805GmSTWlLUhTlNdicYNkA3g/600?n=1",
    },
    {
      title: "听首情歌，再承受不住泪的重量",
      num: "34.8万",
      image:
        "https://p.qpic.cn/music_cover/Y0ta9yibwV0kibD45wic0vNbxBbo0EL5ElwsiaP2iattx076o3k8u3Vf3ZA/600?n=1",
    },
    {
      title: "小奶狗心动警报！年下恋OST",
      num: "37.8万",
      image:
        "https://p.qpic.cn/music_cover/JKNRKMiciaU6Su0ibZV93emzkSkDH58brL805GmSTWlLUhTlNdicYNkA3g/600?n=1",
    },
  ],
};
Mock.mock("/api/getgd", "get", function (config) {
  let txt = config.body.trim();
  // console.log(txt);
  return gdtj[txt];
});
