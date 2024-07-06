const workList = document.getElementById('homeWorks-list')

export const workRender = homeWorks => {
	workList.innerHTML = homeWorks
		.map(work => {
			return `
				<li>
						<a href="${work.link}" class="text-white transition hover:text-horizonGreen-200 font-medium">
							- Home work ${work.number}
						</a>
					</li>
			`
		})
		.join('')
}
