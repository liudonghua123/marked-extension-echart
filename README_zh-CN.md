# marked-extension-echart

[![NPM Version](https://img.shields.io/npm/v/marked-extension-echart)](https://www.npmjs.com/package/marked-extension-echart)
[![License](https://img.shields.io/npm/l/marked-extension-echart)](https://github.com/liudonghua123/marked-extension-echart/blob/master/LICENSE)

一个 [marked.js](https://marked.js.org/) 扩展，用于将代码块渲染为 [ECharts](https://echarts.apache.org/) 图表。

[English Documentation](./README.md)

## 安装

```bash
npm install marked-extension-echart echarts marked
```

## 使用方法

### 1. 注册扩展

```javascript
import { marked } from 'marked';
import markedECharts from 'marked-extension-echart';
// 你必须导入 echarts，或者确保它在全局可用
import * as echarts from 'echarts'; 
// 如果使用浏览器 ESM 构建，你可能需要将 echarts 暴露给 window
// window.echarts = echarts;

marked.use(markedECharts({
  height: '400px', // 可选：默认高度
  width: '100%'    // 可选：默认宽度
}));
```

### 2. 编写 Markdown

在 Markdown 代码块中使用 `echarts` 语言标识符。内容通过应当是一个合法的 JSON 对象或 JavaScript 对象字面量。

    ```echarts
    {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
    ```

### 3. 解析 Markdown

```javascript
const html = marked.parse(markdownContent);
document.getElementById('content').innerHTML = html;
```

**注意：** 该扩展会插入一个 `<script>` 标签来初始化图表。如果你通过 `innerHTML` 插入 HTML，标准浏览器安全机制可能会阻止内联脚本执行，或者需要手动执行（如本项目 `demo.html` 所示）。

## 选项

| 选项 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `height` | `string` | `'400px'` | 图表容器的高度。 |
| `width` | `string` | `'100%'` | 图表容器的宽度。 |

## 许可证

MIT © [Liu Donghua](https://github.com/liudonghua123)
