# 全球城市时钟应用

这是一个展示全球9个主要城市当前时间的Web应用。

## 功能特点

- 以3x3九宫格方式展示9个主要城市的实时时间
- 每个城市卡片包含城市名称、国旗、实时时间和时区信息
- 响应式设计，适配移动端和桌面端
- 支持通过配置文件自定义城市

## 技术栈

- React
- Tailwind CSS
- Vite

## 在线预览

访问 [Vercel部署地址](https://world-time-dashboard.vercel.app) 查看在线演示。

## 本地开发

```bash
npm install
npm run dev
```

## 部署

该项目已配置为可在Vercel上一键部署。

## 自定义城市

可以通过修改 `src/data/cities.js` 文件来自定义显示的城市。