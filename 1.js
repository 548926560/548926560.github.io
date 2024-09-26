document.addEventListener('DOMContentLoaded', function() {
    // 模拟博客文章数据
    const posts = [
        { title: '前端小项目展示', summary: '点进去看就是了' },
        { title: 'ROS', summary: '只有命令，没有说明' },
        { title: '单片机', summary: '暂无' }
    ];

    // 动态加载最新文章
    const postList = document.getElementById('post-list');
    posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            ${post.title === '前端小项目展示' ? `
                <div class="button-group">
                    <button id="light-control-btn">自由控制灯光</button>
                    <button id="clock-btn">时钟</button>
                    <button id="custom-checkbox-btn">自定义复选框</button>
                    <button id="text-blink-btn">文字闪烁加载</button>
                    <button id="digital-clock-btn">数字时钟</button>
                    <button id="fireworks-btn">烟花大炮</button>
                    <button id="catch-butterfly-btn">抓住这只蝴蝶</button>
                    <button id="spooky-btn">让它变得阴森恐怖</button>
                    <button id="love-confession-btn">七夕表白</button>
                    <button id="switch-btn">开关按钮</button>
                    <button id="heart-loading-btn">爱心跳动加载</button>
                    <button id="responsive-sidebar-btn">响应式侧边栏菜单</button>
                    <button id="panda-login-btn">熊猫登录表单</button>
                    <button id="image-carousel-btn">图片轮播卡片</button>
                    <button id="custom-dropdown-btn">自定义下拉菜单</button>
                    <button id="3d-carousel-btn">3D旋转轮播图</button>
                    <button id="progress-bar-btn">动态百分比进度条</button>
                    <button id="vertical-carousel-btn">垂直轮播</button>
                    <button id="apple-message-btn">苹果消息折叠效果</button>
                    <button id="day-night-switch-btn">日月模式切换</button>
                    <button id="dynamic-squid-btn">充满趣味的动态乌贼</button>
                    <button id="scene-camera-btn">场景相机</button>
                    <button id="lantern-lighting-btn">灯笼点灯</button>
                    <button id="love-letter-btn">表白信封</button>
                </div>
            ` : ''}
            ${post.title === 'ROS' ? `
                <div class="button-group">
                    <button id="ros-install-btn">ros安装</button>
                    <button id="ros-command-btn">ros命令</button>
                    <button id="ros-python-btn">ros的第一个python程序命令</button>
                </div>
            ` : ''}
        `;
        postList.appendChild(article);
    });

    // 加载1.md
    fetch('1.md')
        .then(response => response.text())
        .then(data => {
            console.log('python:', data); 
            const mdContent = document.getElementById('md-content');
            if (mdContent) {
                const parsedContent = marked.parse(data);
                console.log('解析后的内容:', parsedContent);
                mdContent.innerHTML = parsedContent;
            } else {
                console.error('未找到id为md-content的元素');
            }
        })
        .catch(error => {
            console.error('加载1.md失败:', error);
            const mdContent = document.getElementById('md-content');
            if (mdContent) {
                mdContent.innerHTML = '<p>加载内容失败，请稍后再试。</p>';
            }
        });

    // 添加简单的导航功能
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 修改"关于我"文字效果和灯光效果
    const aboutText = document.getElementById('about-text');
    const lightEffect = document.querySelector('.light-effect');
    const originalText = "总有山不青 总有月不圆\n别忘了你是为自己而活";
    let currentIndex = 0;
    let isTyping = true;

    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F06292', '#7986CB', '#9CCC65', '#FFD54F', '#4DB6AC'];
    let colorIndex = 0;

    function typeText() {
        if (isTyping) {
            if (currentIndex < originalText.length) {
                aboutText.innerHTML += originalText.charAt(currentIndex);
                currentIndex++;
                setTimeout(typeText, 200); // 调整打字速度
            } else {
                isTyping = false;
                changeColor();
            }
        }
    }

    function changeColor() {
        const color = colors[colorIndex];
        aboutText.style.color = color;
        lightEffect.style.backgroundColor = color;
        colorIndex = (colorIndex + 1) % colors.length;
        setTimeout(changeColor, 1000); // 每1秒改变一次颜色
    }

    typeText();

    // 修改笑脸动画和文字打字效果
    const smileyOverlay = document.getElementById('smiley-overlay');
    const smileyText = document.querySelector('.smiley-text');
    const happyText = "每天都要开心哦！";
    let textIndex = 0;

    function typeHappyText() {
        if (textIndex < happyText.length) {
            smileyText.textContent += happyText[textIndex];
            textIndex++;
            setTimeout(typeHappyText, 150); // 稍微加快打字速度
        } else {
            // 文字打完后，立即隐藏笑脸
            smileyOverlay.classList.add('hide');
        }
    }

    // 开始打字效果
    typeHappyText();

    // 添加关于模态窗口功能
    const aboutLink = document.querySelector('nav a[href="#about"]');
    const modal = document.getElementById('about-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const contactBtn = document.getElementById('contact-btn');
    const donateBtnModal = document.getElementById('donate-btn-modal');
    const contactModal = document.getElementById('contact-modal');
    const donateModal = document.getElementById('donate-modal');

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    contactBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        contactModal.style.display = 'block';
    });

    donateBtnModal.addEventListener('click', function() {
        modal.style.display = 'none';
        donateModal.style.display = 'block';
    });

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // 添加联系模态窗口功能
    const contactLink = document.querySelector('nav a[href="#contact"]');
    const closeContactBtn = document.getElementById('close-contact-modal-btn');
    const moreContactBtn = document.getElementById('more-contact-btn');

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        contactModal.style.display = 'block';
    });

    closeContactBtn.addEventListener('click', function() {
        contactModal.style.display = 'none';
    });

    moreContactBtn.addEventListener('click', function() {
        window.location.href = '2.html';
    });

    window.addEventListener('click', function(e) {
        if (e.target == contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // 添加赞赏模态窗口功能
    const donateLink = document.querySelector('nav a[href="#donate"]');
    const closeDonateBtn = document.getElementById('close-donate-modal-btn');

    donateLink.addEventListener('click', function(e) {
        e.preventDefault();
        donateModal.style.display = 'block';
    });

    closeDonateBtn.addEventListener('click', function() {
        donateModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == donateModal) {
            donateModal.style.display = 'none';
        }
    });

    // 获取随机文案并显示在My blog下面
    function generateQuotes() {
        const apiUrl = 'https://v1.hitokoto.cn/';

        return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const quote = data.hitokoto;
                return quote;
            })
            .catch(error => {
                console.error('随机文案获取失败:', error);
                return "获取随机文案失败";
            });
    }

    const randomQuoteElement = document.getElementById('random-quote');
    function updateQuote() {
        generateQuotes().then(quote => {
            randomQuoteElement.textContent = quote;
        });
    }

    // 初始获取随机文案
    updateQuote();

    // 每隔10秒更新一次随机文案
    setInterval(updateQuote, 10000);

    // JavaScript代码用于控制灯光
    document.getElementById('light-switch').addEventListener('change', function() {
        if (this.checked) {
            document.body.style.backgroundColor = 'white';
        } else {
            document.body.style.backgroundColor = 'black';
        }
    });

    // 添加跳转到自由控制灯光页面的按钮点击事件
    document.getElementById('light-control-btn').addEventListener('click', function() {
        window.location.href = '自由控制灯光.html';
    });

    // 添加跳转到时钟页面的按钮点击事件
    document.getElementById('clock-btn').addEventListener('click', function() {
        window.location.href = '时钟.html';
    });

    // 添加跳转到自定义复选框页面的按钮点击事件
    document.getElementById('custom-checkbox-btn').addEventListener('click', function() {
        window.location.href = '自定义复选框.html';
    });

    // 添加跳转到文字闪烁加载页面的按钮点击事件
    document.getElementById('text-blink-btn').addEventListener('click', function() {
        window.location.href = '文字闪烁加载.html';
    });

    // 添加跳转到数字时钟页面的按钮点击事件
    document.getElementById('digital-clock-btn').addEventListener('click', function() {
        window.location.href = '数字时钟.html';
    });

    // 添加跳转到烟花大炮页面的按钮点击事件
    document.getElementById('fireworks-btn').addEventListener('click', function() {
        window.location.href = '烟花大炮.html';
    });

    // 添加跳转到抓住这只蝴蝶页面的按钮点击事件
    document.getElementById('catch-butterfly-btn').addEventListener('click', function() {
        window.location.href = '抓住这只蝴蝶.html';
    });

    // 添加跳转到让它变得阴森恐怖页面的按钮点击事件
    document.getElementById('spooky-btn').addEventListener('click', function() {
        window.location.href = '让它变得阴森恐怖.html';
    });

    // 添加跳转到七夕表白按钮页面的按钮点击事件
    document.getElementById('love-confession-btn').addEventListener('click', function() {
        window.location.href = '七夕表白按钮.html';
    });

    // 添加跳转到ros安装页面的按钮点击事件
    document.getElementById('ros-install-btn').addEventListener('click', function() {
        window.location.href = 'ros安装.html';
    });

    // 添加跳转到ros命令页面的按钮点击事件
    document.getElementById('ros-command-btn').addEventListener('click', function() {
        window.location.href = 'ros命令.html';
    });

    // 添加跳转到ros的第一个python程序命令页面的按钮点击事件
    document.getElementById('ros-python-btn').addEventListener('click', function() {
        window.location.href = 'ros的第一个python程序命令.html';
    });

    // 添加新的按钮点击事件
    const newButtons = [
        { id: 'switch-btn', url: '开关按钮.html' },
        { id: 'heart-loading-btn', url: '爱心跳动加载.html' },
        { id: 'responsive-sidebar-btn', url: '响应式侧边栏菜单.html' },
        { id: 'panda-login-btn', url: '熊猫登录表单.html' },
        { id: 'image-carousel-btn', url: '图片轮播卡片.html' },
        { id: 'custom-dropdown-btn', url: '自定义下拉菜单.html' },
        { id: '3d-carousel-btn', url: '3D旋转轮播图.html' },
        { id: 'progress-bar-btn', url: '动态百分比进度条.html' },
        { id: 'vertical-carousel-btn', url: '垂直轮播.html' },
        { id: 'apple-message-btn', url: '苹果消息折叠效果.html' },
        { id: 'day-night-switch-btn', url: '日月模式切换.html' },
        { id: 'dynamic-squid-btn', url: '充满趣味的动态乌贼.html' },
        { id: 'scene-camera-btn', url: '场景相机.html' },
        { id: 'lantern-lighting-btn', url: '灯笼点灯.html' },
        { id: 'love-letter-btn', url: '表白信封.html' },

    ];

    newButtons.forEach(button => {
        document.getElementById(button.id).addEventListener('click', function() {
            window.location.href = button.url;
        });
    });

    // 更新网站资讯
    function updateSiteInfo() {
        // 文章数目（这里假设文章数量等于 posts 数组的长度）
        document.getElementById('article-count').textContent = posts.length;

        // 已运行时间（假设网站创建日期为 2024 年 9 月 24 日）
        const startDate = new Date('2024-09-24');
        const now = new Date();
        const runDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
        document.getElementById('run-time').textContent = runDays + ' 天';

        // 获取访客数和访问量
        fetch('/api/site-stats')
            .then(response => response.json())
            .then(data => {
                document.getElementById('visitor-count').textContent = data.visitorCount;
                document.getElementById('visit-count').textContent = data.visitCount;
            })
            .catch(error => {
                console.error('获取网站统计数据失败:', error);
                document.getElementById('visitor-count').textContent = '获取失败';
                document.getElementById('visit-count').textContent = '获取失败';
            });

        // 最后更新时间（固定时间）
        document.getElementById('last-update').textContent = '2024年9月27日';
    }

    // 在页面加载完成后调用更新函数
    updateSiteInfo();

    // 每分钟更新一次网站资讯（除了最后更新时间）
    setInterval(updateSiteInfo, 60000);
});