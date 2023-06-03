// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "亲爱的奶奶，今天是您78岁生日",
        "您是我成长道路上最重要的人之一",
        "您给予了我无私的关注和照顾",
        "感谢您对我的付出和奉献",
        "请原谅我无法赶到现场为您献上祝福",
        "愿您在生日的今天",
        "享受到一切美好的祝福和喜悦",
        "永远充满爱和快乐",
        "身体健康、岁月静好",
        "您的孙子 康佳旭",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "亲爱的奶奶，今天是您78岁生日": "./imgs/6.png",
        "您是我成长道路上最重要的人之一": "./imgs/3.png",
        "您给予了我无私的关注和照顾": "./imgs/4.png",
        "感谢您对我的付出和奉献": "./imgs/5.png",
        "请原谅我无法赶到现场为您献上祝福": "./imgs/7.png",
        "愿您在生日的今天": "./imgs/8.png",
        "享受到一切美好的祝福和喜悦": "./imgs/1.png",
        "永远充满爱和快乐": "./imgs/9.png",
        "身体健康、岁月静好": "./imgs/2.png",
        "您的孙子 康佳旭": "./imgs/10.png",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "信息留言",
    }
};
