import { setStatistics } from './Js/allProcentsStatictic.js'
import { workRender } from './Js/homeWorks.js'
import { renderList } from './Js/projects.js'
import { homeWorks } from './constants/homeWorks.constants.js'
import { projects } from './constants/projects.constants.js'

window.onload = renderList(projects)
window.onload = workRender(homeWorks)
window.onload = setStatistics(homeWorks)
