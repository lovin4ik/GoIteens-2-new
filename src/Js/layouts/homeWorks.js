import { homeWorks } from '../../constants/homeWorks.constants.js'
import { setStatistics } from '../allProcentsStatictic.js'
import { workRender } from '../homeWorks.js'

export const HomeWorks = `
	<section
		class="my-24 px-10 flex items-center justify-center flex-col"
		id="homeWorks"
	>
		<h2 class="text-3xl font-medium mb-12">
			Home Works <span class="text-xl text-border">&lt;/&gt;</span>
		</h2>
		${setStatistics(homeWorks)}
		<ul
			class="flex flex-wrap gap-8 mt-16 justify-center items-center max-w-[1300px]"
			id="homeWorks-list"
		>
			${workRender(homeWorks)}
		</ul>
	</section>
`
