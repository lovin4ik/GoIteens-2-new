import { addAnimation } from './hooks/addAnimation.js'
import { useLoadStatics } from './hooks/useLoadStatistic.js'

const statistics = document.getElementById('statistics')
const statisticsPercent = document.getElementById('statistics-percent')

export const setStatistics = stats => {
	let Compeleted = (stats.length / 26) * 100

	Compeleted = `${Math.round(Compeleted)}`
	let interval = 10

	useLoadStatics(Compeleted, interval, statisticsPercent)

	addAnimation(Compeleted)

	statistics.innerHTML = `
		<span 
			class="bg-gradient-to-tr from-primary via-horizonTeal-200 to-horizonGreen-200 h-full block" 
			style='width: ${Compeleted}%; 	animation: expansion 1s 1 ease-in-out;'>
		</span>
	`
}
