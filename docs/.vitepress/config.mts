import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "实验舱在线测评平台",
  description: "实验舱在线测评平台",

  themeConfig: {
    darkModeSwitchLabel: "切换主题",
    lightModeSwitchTitle: "切换至深色主题",
    darkModeSwitchTitle: "切换至浅色主题",
    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",

    search: {
      provider: 'local',
      //配置中文提示
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '详细信息',
            resetButtonTitle: '清除查询条件',
            noResultsText: '未搜索到',
            footer: {
              selectText: '选择',
              closeText: '关闭',
              navigateText: '切换搜索结果'
            }
          }
        }
      }
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '帮助手册', link: '/dictionary/function-guide' }
    ],

    sidebar: [
      {
        text: '帮助指南',
        items: [
          {
            text: '📖 功能使用指南',
            link: '/dictionary/function-guide',
            items: [
              { text: '🏠 个人中心', link: '/dictionary/personal-center' },
              { text: '👨‍🏫 教学管理', link: '/dictionary/teaching-management' },
              { text: '💻 题目测评', link: '/dictionary/problem-evaluation' },
              { text: '🏆 比赛考核', link: '/dictionary/competition-assessment' },
              { text: '📚 课程学习', link: '/dictionary/course-learning' },
              { text: '👥 团队中心', link: '/dictionary/team-center' }
            ]
          },
          { text: '💬 实验舱社区', link: 'https://oj.shiyancang.cn/' }
        ]
      }
    ],

    //页脚
    footer: {
      copyright: `2024-2028 © 实验舱`,
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    }

  },

  lastUpdated: true,
  cleanUrls: true
})
