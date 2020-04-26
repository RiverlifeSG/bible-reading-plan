const { description } = require('../package')
const { sidebar } = require('./sidebar')
const moment = require('moment');

const startWeekOneFrom = moment('2020-04-20')

const createWeekForSidebar = (weekNumber) => {
  let weekBegins = startWeekOneFrom.add(weekNumber - 1, 'weeks')
  let week = {
    title: 'Week ' + weekNumber + ' (' + weekBegins.format('MMM D') + ' - ' + weekBegins.clone().add(6, 'days').format('MMM D') + ')',
    collapsable: false,
    sidebarDepth: 0,
    path: '/week-' + weekNumber + '/',      // optional, link of the title, which should be an absolute path and must exist
    children: [
      { title: 'Monday (' + weekBegins.clone().add(0, 'days').format('MMM D') + ')', path: '/week-' + weekNumber + '/monday/' },
      { title: 'Tuesday (' + weekBegins.clone().add(1, 'days').format('MMM D') + ')', path: '/week-' + weekNumber + '/tuesday/' },
      { title: 'Wednesday (' + weekBegins.clone().add(2, 'days').format('MMM D') + ')', path: '/week-' + weekNumber + '/wednesday/' },
      { title: 'Thursday (' + weekBegins.clone().add(3, 'days').format('MMM D') + ')', path: '/week-' + weekNumber + '/thursday/' },
      { title: 'Friday (' + weekBegins.clone().add(4, 'days').format('MMM D') + ')', path: '/week-' + weekNumber + '/friday/' },
      { title: 'Saturday (' + weekBegins.clone().add(5, 'days').format('MMM D') + ')', path: '/week-' + weekNumber + '/saturday/' },
      { title: 'Sunday (' + weekBegins.clone().add(6, 'days').format('MMM D') + ')', path: '/week-' + weekNumber + '/sunday/' },
    ]
  }

  return week
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Bible Reading Plan',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#25408F' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Download PDF',
        link: 'https://www.riverlife.org.sg/brp'
      }
    ],
    sidebar: [
      {
        title: 'Getting Start',
        path: '/guide/'
      },
      createWeekForSidebar(2)
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
