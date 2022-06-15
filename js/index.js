let allcityBtn = document.querySelector('.allcity-btn')
let allcityBox = document.querySelector('.allcity-box')
let isAllcityShow = true
allcityBtn.addEventListener('click', () => {
	if (isAllcityShow) {
		allcityBox.style.display = 'flex'
		isAllcityShow = !isAllcityShow
	} else {
		allcityBox.style.display = 'none'
		isAllcityShow = !isAllcityShow
	}
})
