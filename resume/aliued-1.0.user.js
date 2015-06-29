/**
 * 应聘阿里巴巴国际站UED 前端工程师
 *
 * 请打开 <a href="http://www.aliued.com">阿里巴巴国际站UED</a> 然后在console中运行此脚本重现简历
 *
 * @author Sun
 * @version 1.0 2013-7-15
 */
(function() {
    function loadIcon() {
        var linkCss = document.createElement('link');
        linkCss.href = 'http://cdn.bootcss.com/font-awesome/3.2.1/css/font-awesome.min.css';
        linkCss.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(linkCss);
    }

    function style() {
        var sheet = document.createElement('style');
        var css  = '.aboutme .author, .aboutme i {color: #ff901d;} .aboutme .phone-wrapper {float: right}';
            css += '.bar-wrapper {margin-top: 5px;} .bar {display: inline-block; padding: 5px;}';
            css += '.html-bar {background: #f16628;  width: 40%;}';
            css += '.css-bar {background: #29aadf;  width: 30%;}';
            css += '.js-bar {background: #efdc4f;  width: 50%;}';
            css += '.java-bar {background: #a5560a;  width: 60%;}';
            css += '.years {float: right; padding: 5px;}';
            css += '.links img {margin-top: 1px; vertical-align: text-top;}';
        sheet.innerHTML = css;
        document.getElementsByTagName('head')[0].appendChild(sheet);
    }

    function jqueryMagic(callback) {
        var script = document.createElement('script');
        script.onload = function() {
            // dollar被console api占据了一下下, 造成onload的时候使用dollar有问题
            console.log($, jQuery);
            $ = jQuery;
            callback();
        };
        script.src = 'http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    function title() {
        var headTitle = $('head title');
        var text = headTitle.text();
        headTitle.text(text + ', 我来了!');
    }

    function offer(job) {
        var $navi = $('.header-navi');
        $navi.empty();
        $navi.append('<li class="current_page_item"><a>应聘职位: ' + job + '</a></li>');
    }

    function blog(param) {
        var entry = '<div class="entry">';
            entry +=    '<div class="entry-meta">';
            entry +=        '<h2 class="entry-title">';
            entry +=            '<a>' + param.title + '</a>';
            entry +=        '</h2>';
            entry +=        '<span class="entry-category">' + param.category + '</span>';
            entry +=        '<span class="entry-date">' + param.date + '</span>';
            entry +=    '</div>';
            entry +=    '<div class="entry-content">' + param.content + '</div>';
            entry += '</div>';

        return entry;
    }

    function experience() {
        var pic0 = 'data:image/png;base64,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';

        var $content = $('#content');
        $content.empty();

        var entry0 = blog({
            title: '手机经分',
            category: '研发',
            date: '2013/03 - ~ (拓维信息)',
            content: '<p><img src="' + pic0 + '" /></p>'
                    + '<p>这是一个通过PhoneGap实现的Hybrid App, 目标是将传统经分系统上最具价值的模块"移植"到手机上成为独立的App, 方便运营人员时刻了解经营状况.</p>'
                    + '<p>在此项目中我第一次以"纯前端"的身份参与, 完成了项目主体框架的搭建和后续模块的开发, 以Backbone来组织前端代码结构, RequireJS进行模块式开发, Bootstrap作为基础样式和组件库, 最终打造了一个单页面的Web App, 将自己前端的优势和潜力发挥得淋漓尽致. 这次的项目经历让我的前端技能有了从量变到质变的飞跃.</p>'
                    + '<p>要这样设计的原因主要有2个, 一是为了单页面开发, 最大的好处是方便实现切换页面时的动画效果, 以最大程度的模拟原生App的感觉; 二是为了组织前端的代码和模块的重用, 前端开发最可怕的问题莫过于多人协作, 如果没有一个好的方式来指导团队, 前端往往会沦为混乱的噩梦.</p>'
                    + '<p>我相信未来是Web App的天下.</p>'
        });

        var entry1 = blog({
            title: '报表系统',
            category: '研发',
            date: '2012/08 - 2013/03(拓维信息)',
            content: '<p>这是一个配置式的J2EE报表展现系统, 主要适合于需要N多报表的项目集成在一起使用, 能方便快速地配置出各种查询类报表, 支持扩展接口来实现自定义功能, 将开发人员从重复劳动中解放出来. 我是后期才参与的项目, 兼顾Java后端组件的设计和前端的展现, 前端戏份不足.</p>'
        });

        var entry2 = blog({
            title: '前端转型',
            category: '自学',
            date: '2011/02 - ~',
            content: '<p>从一开始踏足软件开发领域, 就与Web相关的开发结下不解之缘, 由衷的喜欢前端, 热爱互联网. 以前的那些经历多是以Java开发为主, 没有真真正正的深入过前端.</p>'
                   + '<p>我觉得自己必须要有独当一面的东西, 而不是一名什么都会一点的Java"杂牌军", 因此认真系统地将Web知识恶补了一遍, 以淘宝的标准, 前端HTML/CSS/JS这3样是必须精通得不能再精通的硬本领, 我深刻认同这个标准, 并以此为目标不断地前行...</p>'
        });

        var entry3 = blog({
            title: 'J2EE Web管理类系统',
            category: '设计开发',
            date: '2007/07 - 2012/02(拓维信息)',
            content: '<p>毕业后入公司做了xx经营分析系统, 传统J2EE项目, 主要是维护和重构工作. 09年开始偶入GIS专业领域, 接触到复杂的RIA, 与Flex不期而遇, 个人发展慢慢往前端倾斜.</p>'
        });

        $content.append($(entry0 + entry1 + entry2 + entry3));
    }

    function section(title, content) {
        var subWidget = '<li class="widget widget_text">';
            subWidget +=    '<h2 class="widgettitle">' + title + '</h2>';
            subWidget +=    '<div class="textwidget">' + content + '</div>';
            subWidget += '</li>';
        return subWidget;
    }

    function introduction(author) {
        var $subUl = $('.layout-sub ul');
        $subUl.empty();

        var bio = section('简介', '<div class="aboutme"><p>我叫 <strong class="author">' + author + '</strong>, 2007年毕业于长沙民政软件学院, 热爱编程, 热爱互联网, 作为新时代的"手工艺人", 希望用代码创造出让人们生活更美好的产品.</p>'
                                    + '<div>'
                                        + '<i class="icon-map-marker"></i> 长沙'
                                        + '<span class="phone-wrapper"><i class="icon-phone"></i> 139****7231</span>'
                                    + '</div>'
                                + '</div>');

        var skill = section('技能', '<div class="skill">'
                                       + '<div class="bar-wrapper"><span class="bar html-bar">HTML</span> <span class="years">4年</span></div>'
                                       + '<div class="bar-wrapper"><span class="bar css-bar">CSS</span> <span class="years">3年</span></div>'
                                       + '<div class="bar-wrapper"><span class="bar js-bar">JS</span> <span class="years">5年</span></div>'
                                       + '<div class="bar-wrapper"><span class="bar java-bar">Java</span> <span class="years">6年</span></div>'
                                  + '</div>');

        var opensource = section('开源', '<ul class="opensource"><li><a href="http://ufologist.github.io/mobile-fixed-columns-table/">移动平台上的冻结表格组件</a></li><li><a href="http://code.google.com/p/s60-mymoney-2-feidee-money/">从我的财务迁移到随手记</a></li></ul>');

        var presentation = section('分享', '<ul class="ishare"><li><a href="http://www.douban.com/photos/album/64634121/">程序员通关指南(暗黑版)</a></li></ul>');

        $subUl.append($(bio + skill + opensource + presentation));
    }

    function dream() {
        $('#content').append('<div class="page-navi clearfix"><span class="next"><a href="#">期待在阿里巴巴翻开新的乐章 »</a></span></div>')
    }

    function footer() {
        var $footer = $('.layout-footer');
        $footer.empty();
        $footer.append('<p class="links"><a href="http://www.douban.com/people/ufologist/"><img src="http://img3.douban.com/pics/douban-icons/favicon_16x16.png"> 我的豆瓣</a> | <a href="http://slideshare.net/ufologist"><img src="http://mncee.org/CMSTemplates/CEE/Images/Icons/slideshare.png"> SlideShare</a></p>')
        $footer.append('<p>2013 阿里巴巴国际站UED, 我来了!</p>');
    }

    loadIcon();
    style();
    jqueryMagic(function() {
        var author = 'Sun';
        var job = '前端工程师';
        title();
        offer(job);
        experience();
        introduction(author);
        dream();
        footer();
    });
})();