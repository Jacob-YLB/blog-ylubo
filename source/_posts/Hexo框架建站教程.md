---
title: Hexo框架建站教程
date: 2026-07-02 16:43:00
tags: [Hexo, 教程]
categories: 
    - 技术
    - 博客
---

# 一 整体架构说明：
1. 本地：Hexo Aurora写博客源码
2. GitHub：存放源码仓库（不存编译后的public静态文件）
3. Netlify：关联GitHub源码，自动构建Hexo、自带全球境外CDN（香港/新加坡/欧美，无大陆节点，不用ICP）
4. ylubo.com海外域名 → Cloudflare DNS解析指向Netlify，双重加速、隐藏源站、全程免备案

# 二 前置准备
1. 本地环境
- 安装Node.js 16+/Git
- 安装Hexo脚手架
2. 账号准备
- GitHub账号
- Netlify账号（GitHub一键登录）
- Cloudflare账号（管理域名解析，必开，防止国内DNS拦截）
- 域名已在海外注册商（GoDaddy/Namecheap）购买完成

# 三 本地搭建Hexo + 3-hexo主题
## 3.1 初始化Hexo项目
```bash
# 创建博客文件夹
mkdir blog
cd blog
# 初始化Hexo
hexo init
npm install
```

## 3.2 安装3-hexo主题全套依赖
克隆 3-hexo 到 themes 目录
```bash
git clone https://github.com/yelog/hexo-theme-3-hexo.git themes/3-hexo
```

## 3.3 启用主题 & 基础配置
修改Hexo根目录`_config.yml`启用主题，找到`theme`字段修改：
```bash
theme: 3-hexo
```

### 3.3.1 安装 3-hexo 所需依赖
```bash
# 进入主题目录
cd themes/3-hexo
# 安装package.json依赖
npm install
# 返回站点根目录
cd ../../
# 站点全局依赖补全
npm install
```

### 3.3.2 3-hexo 额外可选依赖（官方常用）
```bash
# 图片压缩、搜索、代码高亮增强
npm install hexo-generator-searchdb hexo-all-minifier hexo-prism-plugin --save
```

### 3.3.3 复制主题配置文件（必做）
```bash
# 把主题内置配置复制到根目录，方便修改不污染主题源码
cp themes/3-hexo/_config.yml _config.3-hexo.yml
```
后续修改主题配置统一改 _config.3-hexo.yml

## 3.4 本地预览测试
```bash
hexo clean && hexo g && hexo s
```
访问`http://localhost:4000`，看到`3-hexo`界面即本地搭建成功。

## 3.5 配置Git忽略文件
修改`.gitignore`，新增以下字段:
```bash
node_modules/
public/
.deploy_git/
```
`public`是编译产物，不要上传到GitHub源码仓库，由Netlify云端自动构建生成。
