请基于仓库 kaichengyang0828/Kaicheng-Yang0828.github.io 的当前源码，对我的个人主页进行一次视觉与交互升级，让它更现代、更炫酷、更有 AI / 多模态研究者的科技感，但仍保持学术主页的专业、清晰和可读性。

我的主页是一个 Jekyll / GitHub Pages 项目，当前主要结构包括：

_pages/about.md：主页入口，按顺序 include 了 intro、news、publications、education、experience、service 等模块
_pages/includes/intro.md、news.md、pub.md、education.md、experience.md、service.md：主页内容模块
_includes/author-profile.html：左侧个人信息卡片，包括头像、简介、邮箱、GitHub、Google Scholar 等
_includes/masthead.html：顶部导航栏
_sass/_custom.scss：当前主要自定义样式文件
_sass/_variables.scss、_sass/_page.scss、_sass/_sidebar.scss、_sass/_masthead.scss 等：主题样式
_config.yml：站点配置，作者是 Kaicheng Yang (杨铠成)，身份是 Algorithm Researcher at DeepGlint，研究方向包括 multimodal representation learning、vision-language pretraining、contrastive learning
请完成以下目标：

1. 整体视觉风格
将主页升级为现代科技感设计，风格关键词：
    AI researcher homepage
    multimodal / vision-language / deep learning
    dark-light hybrid
    glassmorphism
    subtle neon accents
    animated gradient background
    clean academic portfolio
    high-end research lab personal site

配色建议：

    主色：深蓝、靛蓝、紫色、青色
    点缀色：neon cyan / electric blue / violet
    背景：浅色模式下保持干净，深色区域使用渐变或半透明玻璃效果
    不要使用过于花哨、幼稚或影响阅读的颜色

2. 首页 Hero 区域
请为首页顶部增加一个更有冲击力的 Hero 区域，可以放在 intro 模块附近，内容包括：

    姓名：Kaicheng Yang / 杨铠成
    身份：Algorithm Researcher · Multimodal Learning · Vision-Language Pretraining
    简短 tagline，例如： “Building multimodal intelligence through representation learning, vision-language pretraining, and contrastive learning.”
    添加 2-4 个科技感标签：
    Multimodal Learning
    Vision-Language Pretraining
    Contrastive Learning
    Representation Learning
    添加 CTA 按钮：
    Publications
    Google Scholar
    GitHub
    Email

视觉上使用：

    渐变文字
    半透明玻璃卡片
    柔和发光边框
    悬浮 hover 动效
    响应式布局
    不要删除原有 intro 内容，应在保留内容的基础上增强。

3. 左侧 Author Profile 升级
请优化 _includes/author-profile.html 和相关 SCSS，让左侧个人信息卡更精致：

    头像增加圆角 / 光环 / subtle glow
    卡片使用 glassmorphism 效果
    作者姓名使用更现代的排版
    bio、location、email、GitHub、Google Scholar 等信息保持可访问
    社交链接增加 hover 动效
    移动端保持良好布局
    不要破坏 Liquid 模板逻辑

4. 顶部导航栏升级
请优化 _includes/masthead.html 和 masthead 相关样式：

    顶部导航 sticky / semi-transparent / blur
    导航项 hover 时出现 underline 或 glow 效果
    当前页面滚动时视觉层级清晰
    移动端菜单仍然可用
    保持现有锚点导航：
    Homepage
    About
    News
    Publications
    Education
    Experience
    Service

5. 内容区块卡片化
请将主页各个 section 的视觉层级增强：

    News：改成 timeline 或卡片式列表，日期突出，hover 时轻微上浮
    Publications：论文条目保留现有信息，但增强卡片、图片、badge、链接按钮样式
    Education / Experience：改为现代 timeline 风格
    Service：badge 更有科技感
    Section heading：添加渐变下划线或小型 icon / accent bar
    要求：

    内容本身不要随意改写
    可以调整 HTML wrapper 或 class
    优先在 _sass/_custom.scss 中添加样式，避免大规模破坏主题原文件
    如确需修改 include 文件，请保持 Jekyll / Liquid 语法正确

6. 微交互与动画
请添加轻量级、性能友好的动画：

    页面进入时 fade-in / slide-up
    卡片 hover 上浮
    头像 glow
    按钮 hover gradient shift
    section heading reveal
    背景可使用纯 CSS radial-gradient / animated gradient
    如添加 JavaScript，请放在合适的 assets/js 文件或 include 中，且保持极简
    注意：

    不要引入大型前端框架
    不要使用 React / Vue / Next.js
    不要依赖需要构建的新 npm 包
    尽量使用纯 HTML、SCSS、少量 vanilla JS
    必须兼容 GitHub Pages / Jekyll

7. 可访问性与性能要求
必须满足：

    文字对比度足够
    链接和按钮有 focus 状态
    支持 prefers-reduced-motion
    移动端适配良好
    不要让动画影响阅读
    不要显著降低页面加载速度
    图片不应被拉伸变形
    保持 SEO 基础结构不被破坏

8. 文件修改建议
优先修改：

    _sass/_custom.scss
    _includes/author-profile.html
    _includes/masthead.html
    _pages/includes/intro.md
    必要时修改 _pages/about.md
    如需 JS，可修改或新增合适的 assets/js 文件，并确保被正确引入
    尽量避免：

    大规模重写整个主题
    删除现有内容
    破坏 _config.yml
    引入外部 CDN 依赖
    修改 Gemfile 或 Jekyll 插件配置，除非确有必要

9. 期望最终效果
最终主页应看起来像一个高质量 AI researcher personal website：

    第一眼更有视觉冲击力
    更符合 multimodal / vision-language researcher 的科技感
    论文、新闻、经历更易读
    左侧个人卡片更精致
    整体页面更现代，但仍然适合学术展示
    在 desktop 和 mobile 上都美观

10. 交付要求
请直接修改代码，并在完成后说明：

    修改了哪些文件
    每个文件的主要改动
    是否添加了新的 class / JS / 样式变量
    如何本地预览，例如： bundle exec jekyll serve
    是否存在需要我手动确认的地方
    在修改前请先阅读当前文件内容，不要凭空假设结构。修改时保持代码简洁、可维护，并确保 Jekyll 可以正常构建。

