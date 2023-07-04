<h1 align="center">
soial_media_system
</h1>

## 背景简介
构建人物画像是描绘目标用户形象、把握需求与确定设计方向的有效途径，可以使产品实现精准服务。

其次，贴近实际人物形象的人物画像结果非常有助于确定产品前期的设计，设计师能够通过画像获取到用户的切实需求以辅助产品进行正确的定位。

人物画像是当前大数据领域的一种典型应用，是精细化和数据化运营的需求产物，普遍应用在互联网产品中。


## 系统功能

```

- 微博数据爬取
  - 爬取指定微博用户的微博文本
  - 设置爬取开始时间

- 微博用户管理
  - 已爬取微博用户总数
  - 已爬取所有微博文本总数
  - 已生成人物画像数
  - 删除已爬取微博用户数据

- 画像分析
  - 推断性别概率
  - 推断年龄概率
  - 推断兴趣关键词
  - 结果可视化展示
  - 所爬取的微博文本的定位地图展示
  - 所爬取的微博文本时间轴展示

```

## 开发

```bash
# 克隆项目
git clone git@github.com:SongYuQiu/SocialNetworkPortraitAnalysisSystem.git

# 进入项目目录
cd SocialNetworkPortraitAnalysisSystem

# 安装依赖
npm install

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9527

## License
[MIT](https://github.com/SongYuQiu/Social-Network-Portrait-Analysis-System/blob/master/LICENSE) 

Copyright (c) 2021 Just for Star (yqSong)
