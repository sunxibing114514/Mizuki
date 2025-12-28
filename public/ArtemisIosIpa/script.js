// 页面切换逻辑
document.addEventListener('DOMContentLoaded', () => {
    // 导航栏切换页面
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.dataset.page;
            
            // 更新导航激活状态
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            
            // 显示目标页面
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(targetPage).classList.add('active');
            
            // 若切换到下载页，加载游戏数据
            if (targetPage === 'download') loadGames();
            
            // 移动端关闭菜单
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // 汉堡菜单切换
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // 初始加载介绍页（默认）
});

// 加载游戏数据并渲染（核心功能）
async function loadGames() {
    const container = document.getElementById('games-container');
    container.innerHTML = '<div class="loading">加载中...</div>'; // 显示加载状态
    
    try {
        // 从JSON文件加载数据（同域下直接fetch）
        const response = await fetch('games.json');
        if (!response.ok) throw new Error('数据加载失败');
        const games = await response.json();
        
        // 清空容器并渲染游戏卡片
        container.innerHTML = '';
        games.forEach(game => {
            const gameCard = createGameCard(game);
            container.appendChild(gameCard);
        });
    } catch (error) {
        container.innerHTML = `<div class="error">${error.message}，请刷新重试</div>`;
        console.error('加载游戏失败:', error);
    }
}

// 创建单个游戏卡片（方格式布局）
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card card';
    
    // 卡片内容（含图片、游戏名、作者、下载链接）
    card.innerHTML = `
        <img src="${game.image}" alt="${game.name}" class="game-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'280\' height=\'180\' viewBox=\'0 0 280 180\'><rect width=\'280\' height=\'180\' fill=\'%23f0f0f0\'/><text x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'Arial\' font-size=\'14\' fill=\'%23999\'>暂无图片</text></svg>'">
        <div class="game-info">
            <h3 class="game-name">${game.name}</h3>
            <div class="game-author"><span class="author-label">移植作者：</span>${game.porter}</div>
            <div class="game-author"><span class="author-label">直装作者：</span>${game.installer}</div>
            <div class="game-meta">版本：${game.version} | 大小：${game.size}</div>
        </div>
        <div class="download-area">
            <a href="${game.downloadLink}" class="btn" target="_blank"><i class="fas fa-download"></i> 立即下载</a>
            <div class="qr-code"><i class="fas fa-qrcode"></i></div>
            <div style="font-size: 0.8rem; color: var(--text-light);">扫码下载</div>
        </div>
    `;
    return card;
}
