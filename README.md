# marked-extension-echart

[![NPM Version](https://img.shields.io/npm/v/marked-extension-echart)](https://www.npmjs.com/package/marked-extension-echart)
[![License](https://img.shields.io/npm/l/marked-extension-echart)](https://github.com/liudonghua123/marked-extension-echart/blob/master/LICENSE)

A [marked.js](https://marked.js.org/) extension to render [ECharts](https://echarts.apache.org/) diagrams from code blocks.

[中文文档](./README_zh-CN.md)

## Installation

```bash
npm install marked-extension-echart echarts marked
```

## Usage

### 1. Register the extension

```javascript
import { marked } from 'marked';
import markedECharts from 'marked-extension-echart';
// You must import echarts as well or ensure it is available globally
import * as echarts from 'echarts'; 
// If using the browser ESM build, you might need to expose echarts to window
// window.echarts = echarts;

marked.use(markedECharts({
  height: '400px', // Optional: default height
  width: '100%'    // Optional: default width
}));
```

### 2. Write Markdown

Use the `echarts` language identifier in your markdown code blocks. The content should be a valid JSON object or JavaScript object literal.

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

### 3. Parse Markdown

```javascript
const html = marked.parse(markdownContent);
document.getElementById('content').innerHTML = html;
```

**Note:** The extension inserts a `<script>` tag to initialize the chart. If you are inserting the HTML via `innerHTML`, standard browser security prevents inline scripts from executing effectively in some contexts or requires manual execution (as shown in the `demo.html` of this project).

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `height` | `string` | `'400px'` | The height of the chart container. |
| `width` | `string` | `'100%'` | The width of the chart container. |

## License

MIT © [Liu Donghua](https://github.com/liudonghua123)
