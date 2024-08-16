export const projectItem = project => `
		<li
			class="
			project__home border border-solid border-border rounded-xl overflow-hidden transition duration-[0.4s] hover:scale-105 hover:border-horizonGreen-200 shadow-horizonGreen-300/10 shadow-2xl hover:shadow-xl bg-sidebar flex items-center justify-center flex-col
			"
		>
			<a
				href="${project.link}"
				target='_blank'
				rel="noopener noreferrer"
			>
				<div class="p-5 ${project.color}">
					<img
						src="${project.img}"
						alt="project"
						class="max-w-48 sm:max-w-52 md:max-w-64 lg:max-w-72 aspect-video shadow-2xl shadow-black rounded overflow-hidden"
					/>
				</div>
				<p class="ml-4 my-5 md:text-lg sm:text-sm">
					${project.title}
				</p>
			</a>
		</li>
	`
