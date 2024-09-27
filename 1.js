document.addEventListener('DOMContentLoaded', function() {
    // 模拟博客文章数据
    const posts = [
        { title: '前端小项目展示', summary: '请点进去看看效果', content: generateProjectButtons() },
        { title: 'ROS', summary: '只有命令，没有解析', content: generateROSButtons() },
        { title: '响应式设计最佳实践', summary: '分享一些响应式网页设计的技巧和最佳实践，让你的网站在各种设备上都能完美展示...' }
    ];

    // 动态加载最新文章
    const postList = document.getElementById('post-list');
    posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            ${post.content ? post.content : '<a href="#">阅读更多</a>'}
        `;
        postList.appendChild(article);
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
});

// 生成项目按钮的函数
function generateProjectButtons() {
    const projects = [
        '自由控制灯光', '时钟', '自定义复选框', '文字闪烁加载', '数字时钟',
        '烟花大炮', '抓住这只蝴蝶', '让它变得阴森恐怖', '七夕表白', '开关按钮',
        '爱心跳动加载', '响应式侧边栏菜单', '熊猫登录表单', '图片轮播卡片',
        '自定义下拉菜单', '3D旋转轮播图', '动态百分比进度条', '垂直轮播',
        '苹果消息折叠效果', '日月模式切换', '充满趣味的动态乌贼', '场景相机',
        '灯笼点灯', '表白信封'
    ];

    return projects.map(project => {
        const fileName = project === '3D旋转轮播图' ? '3D旋转轮播图' : project;
        return `<button onclick="window.open('${fileName}.html', '_blank')" class="project-btn">${project}</button>`;
    }).join('');
}

// 修改生成ROS项目按钮的函数
function generateROSButtons() {
    const rosProjects = [
        'ros安装', 'ros命令', 'ros的第一个python程序命令', 'ros的第二个python程序命令'
    ];

    return rosProjects.map(project => {
        return `<button onclick="window.open('${project}.html', '_blank')" class="project-btn">${project}</button>`;
    }).join('');
}