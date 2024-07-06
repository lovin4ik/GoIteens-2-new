export const workRender = homeWorks => {
	return homeWorks
		.sort((a, b) => a.id - b.id)
		.map(work => {
			return `
			<li
					class="border border-solid border-border rounded overflow-hidden flex flex-col px-5 py-6 bg-sidebar  duration-[0.4s] ease-in-out transition-colors hover:border-horizonGreen-200 items-center justify-center w-[230px] h-[280px]"
				>
					<div>
						<div
							class="flex gap-5 items-center justify-center border-[4px] border-solid border-horizonGreen-200 w-[110px] h-[110px] rounded-full text-3xl font-medium text-horizonGreen-200 mx-auto"
						>
							#${work.id}
						</div>
						<div class="text-center mt-4 text-sm">
							${work.title}
						</div>
					</div>
					<a
						class="text-white bg-horizonGreen-200/75 rounded-md px-4 py-[6px] mt-6 transition-colors hover:bg-horizonGreen-200 cursor-pointer font-medium"
						href="${work.link}"
						>open project
					</a>
				</li>
		`
		})
		.join('')
}
