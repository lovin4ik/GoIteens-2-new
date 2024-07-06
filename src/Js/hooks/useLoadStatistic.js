export function useLoadStatics(Compeleted, interval) {
	let i = 0

	return setInterval(() => {
		if (i == Compeleted) {
			return
		}
		i = i + 1
		return setTimeout(() => {
			console.log(`${i}%`)
			return `${i}%`
		}, interval)
	}, interval)
}
