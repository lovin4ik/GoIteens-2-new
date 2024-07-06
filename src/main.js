import { Footer } from './Js/layouts/footer.js'
import { Header } from './Js/layouts/header.js'
import { Hero } from './Js/layouts/hero.js'
import { HomeWorks } from './Js/layouts/homeWorks.js'
import { Projects } from './Js/layouts/projects.js'

const app = document.getElementById('root')

window.onload = () => {
	app.innerHTML = `
		${Header}
		<main>
			${Hero}
			${Projects}
			${HomeWorks}
		</main>
		${Footer}
	`
}
// window.onload = workRender(homeWorks)
// window.onload = setStatistics(homeWorks)
