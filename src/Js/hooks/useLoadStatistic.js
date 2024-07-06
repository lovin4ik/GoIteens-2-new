export function useLoadStatics(Compeleted, interval, element) {
	let i = 0

	setInterval(() => {
		if (i == Compeleted) {
			return
		}
		i = i + 1
		setTimeout(() => {
			element.innerHTML = `${i}%`
		}, interval)
	}, interval)
}
