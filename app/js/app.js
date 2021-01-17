document.addEventListener("DOMContentLoaded", function() {

	const burger = document.querySelector('#burger-menu')
	const headerNav = document.querySelector('#header-nav')

	const searchBtn = document.querySelector('#search-btn')
	const searchInput = document.querySelector('#site-search')

	function menuShow() {
		headerNav.classList.toggle('active')
	}
	burger.addEventListener('click', menuShow)

	function searchInputShow(event) {
		event.preventDefault()
		searchInput.classList.toggle('showInput')
	}
	searchBtn.addEventListener('click', searchInputShow)

});
