const track = document.querySelector('.form__progress-track')
const bar = document.getElementById('progress-bar')
const thumb = document.getElementById('progress-thumb')
const value = document.getElementById('progress-value')

let isDragging = false

thumb.addEventListener('mousedown', () => (isDragging = true))
document.addEventListener('mouseup', () => (isDragging = false))
document.addEventListener('mousemove', e => {
	if (!isDragging) return

	const rect = track.getBoundingClientRect()
	let percent = ((e.clientX - rect.left) / rect.width) * 100
	percent = Math.max(0, Math.min(100, percent))

	bar.style.width = percent + '%'
	thumb.style.left = `calc(${percent}% - 18px)`
	value.textContent = Math.round(percent) + '%'
})

document.querySelector('.form').addEventListener('submit', e => {
	e.preventDefault()
	document.getElementById('popup').classList.add('active')
})

document.querySelector('.popup__close').addEventListener('click', () => {
	document.getElementById('popup').classList.remove('active')
})
