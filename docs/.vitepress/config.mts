import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "实验舱在线测评平台",
  description: "实验舱在线测评平台",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '简介', link: '/' },
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
  },

  lastUpdated: true
})
