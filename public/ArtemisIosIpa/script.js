document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('game-grid');

    // 1. 获取 JSON 数据
    fetch('./games.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误，无法加载游戏列表');
            }
            return response.json();
        })
        .then(data => {
            // 清空"加载中"提示
            gridContainer.innerHTML = '';

            // 2. 遍历数据并生成 HTML
            data.forEach(game => {
                const cardHTML = createGameCard(game);
                gridContainer.innerHTML += cardHTML;
            });
        })
        .catch(error => {
            console.error('Error:', error);
            gridContainer.innerHTML = `<div style="text-align:center; color:red; width:100%;">加载失败，请检查 games.json 文件路径或格式。<br>错误信息: ${error.message}</div>`;
        });
});

// 生成单个游戏卡片的 HTML 模板函数
function createGameCard(game) {
    return `
        <article class="game-card">
            <img src="${game.image}" alt="${game.name}" loading="lazy">
            <div class="card-info">
                <h3>${game.name}</h3>
                <p><span class="label">移植作者：</span>${game.port_author}</p>
                <p><span class="label">直装制作：</span>${game.install_author}</p>
            </div>
            <a href="${game.link}" class="download-btn" target="_blank">下载游戏</a>
        </article>
    `;
}