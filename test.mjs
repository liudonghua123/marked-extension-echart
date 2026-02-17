import markedECharts from './src/index.js';

try {
    const extension = markedECharts();
    console.log('Extension created successfully');
    if (extension.renderer && typeof extension.renderer.code === 'function') {
        console.log('Extension structure is valid');

        // Test render function
        const code = '{ title: { text: "test" } }';
        const lang = 'echarts';
        const html = extension.renderer.code(code, lang);
        if (html.includes('echarts-container') && html.includes('script')) {
            console.log('Renderer output looks correct');
        } else {
            console.error('Renderer output is missing expected elements');
            process.exit(1);
        }

    } else {
        console.error('Extension structure is invalid');
        process.exit(1);
    }
} catch (e) {
    console.error('Error importing/running extension:', e);
    process.exit(1);
}
