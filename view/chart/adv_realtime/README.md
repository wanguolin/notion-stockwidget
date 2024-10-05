# isnow-stock-widget
*Notion 嵌入式 TradingView 市场数据小部件 / TradingView Market Data widget for Notion embed*

**在线演示 / Live demo: [https://isnow-stock.notion.site](https://isnow-stock.notion.site)**

## 致谢 / Acknowledgement

本项目基于 [notion-stockwidget](https://github.com/yannickfunk/notion-stockwidget) 进行开发。感谢原作者 [yannickfunk](https://github.com/yannickfunk) 的贡献。

This project is based on [notion-stockwidget](https://github.com/yannickfunk/notion-stockwidget). Thanks to the original author [yannickfunk](https://github.com/yannickfunk) for their contribution.

## 中文说明

这个项目是 notion-stockwidget 的一个分支，用于在 [isnow-stock.notion.site](https://isnow-stock.notion.site) 上发布我的美股投资信息。它使用 TradingView 的市场数据小部件，可以嵌入到 Notion 页面中，提供实时的股票市场数据。

欢迎关注我的投资笔记：[https://isnow-stock.notion.site](https://isnow-stock.notion.site)

### 如何使用

1. 创建一个 TradingView 账户。
2. 访问 [https://www.tradingview.com/widget/market-quotes/](https://www.tradingview.com/widget/market-quotes/) 并添加你想要的股票代码。
3. 在 `index.html` 文件中，用新的嵌入代码替换当前的 JSON。
4. 确保在 id 为 "dark" 的小部件中，将 `colourTheme` 属性设置为 "dark"。
5. 为了方便日后修改，将嵌入代码中的 JSON 复制并粘贴到 `data.json` 文件中。

### 部署

推荐使用 Netlify 或 Vercel 进行一键部署。

如果你使用这个项目为你自己的 Notion 创建小部件，请 fork 并为本仓库点星！

享受使用吧！😊

## English Description

This project is a fork of notion-stockwidget, used to publish my US stock investment information on [isnow-stock.notion.site](https://isnow-stock.notion.site). It utilizes TradingView's market data widget, which can be embedded in Notion pages to provide real-time stock market data.

Feel free to check out my investment notes: [https://isnow-stock.notion.site](https://isnow-stock.notion.site)

### How to Use

1. Create a TradingView account.
2. Go to [https://www.tradingview.com/widget/market-quotes/](https://www.tradingview.com/widget/market-quotes/) and add the stock symbols you want.
3. In the `index.html` file, replace the current JSON with the new embed code.
4. Make sure that in the widget with an id of "dark", you set the `colourTheme` property to "dark".
5. To make easy changes later, copy the JSON from the embed code and paste it into `data.json`.

### Deployment

Netlify or Vercel is recommended for one-click deploys.

If you use this for your own Notion, please fork and star the repo!

Enjoy! 😊
