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

module.exports =  {
  sidebar: [
    {
      title: 'Getting Started',
      path: '/guide/'
    },
    createWeekForSidebar(2)
  ]
}