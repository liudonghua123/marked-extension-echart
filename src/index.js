/**
 * Marked Extension for ECharts
 */
export default function markedECharts(options = {}) {
    const {
        height = '400px',
        width = '100%'
    } = options;

    return {
        renderer: {
            code(code, lang) {
                if (lang === 'echarts') {
                    const id = 'echarts-' + Math.random().toString(36).substring(2, 9);
                    // Encode the code content to be safe for HTML attribute
                    // We use a textarea to store the raw code content to handle newlines and special chars correctly
                    // and keep it hidden.
                    return `
            <div class="echarts-container" id="${id}" style="width: ${width}; height: ${height};"></div>
            <textarea id="${id}-data" style="display:none;">${code}</textarea>
            <script>
            (function() {
              const container = document.getElementById('${id}');
              const dataElement = document.getElementById('${id}-data');
              if (container && dataElement && window.echarts) {
                try {
                  const chart = window.echarts.init(container);
                  const optionStr = dataElement.value;
                  // Start Function
                  const run = new Function('return ' + optionStr);
                  const option = run();
                  chart.setOption(option);
                  // Handle resize
                  window.addEventListener('resize', () => {
                    chart.resize();
                  });
                } catch (e) {
                  container.innerHTML = '<div style="color:red; p:10px; border:1px solid red;">Error rendering chart: ' + e.message + '</div>';
                  console.error('ECharts render error:', e);
                }
              }
            })(); 
            </script>
          `;
                }
                return false; // Fallback to default renderer
            }
        }
    };
}
