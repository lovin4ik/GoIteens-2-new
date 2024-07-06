export function addAnimation(Compeleted) {
	const styleSheet = document.styleSheets[0]

	const expansion = `
		@keyframes expansion {
			from {
				width: 0%;
			} to {
				width: ${Compeleted}%;
			}
		}`

	styleSheet.insertRule(expansion, styleSheet.cssRules.length)
}
