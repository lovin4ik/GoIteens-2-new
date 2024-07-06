import { projects } from '../../constants/projects.constants.js'
import { projectItem } from '../projects.js'

export const Projects = `
	<section
		class="py-12 px-10 flex items-center justify-center flex-col relative after:content-[''] after:absolute after:bg-gradient-radial after:from-horizonGreen-300 after:to-transparent after:top-0 after:left-1/4 after:-z-10 after:w-96 after:h-96 after:blur-3xl"
	>
		<h2
			class="text-3xl font-medium mb-6"
			id="projects"
		>
			Projects
		</h2>

		<ul
			class="flex gap-10 flex-wrap items-center justify-center"
			id="projectsList"
		>
				${projects
					.map(project => {
						return projectItem(project)
					})
					.join('')}
		</ul>
	</section>
`
