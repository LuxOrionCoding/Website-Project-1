const navBar = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav-items');

menuBtn.addEventListener('click', ()=>{
	navBar.classList.toggle('active');
})


// auto close navigation bar at phone size
function autoRemoveClass() {
	navBar.classList.remove('active');
	menuBtn.classList.remove('menu-opened');
}

function autoCloseNavbar(mediaQuery) {
	if (mediaQuery.matches) {
		navItems.forEach(item => {
			item.addEventListener('click', autoRemoveClass);
		})
	} else {
		navItems.forEach(item => {
			item.removeEventListener('click', autoRemoveClass);
		})
	}
}

var mediaQuery = window.matchMedia('(max-width: 970px)');

autoCloseNavbar(mediaQuery);
mediaQuery.addListener(autoCloseNavbar);



// removing "~" at phone query size
const heroTitle_span = document.querySelector("#hero-title span");
var mediaQuery = window.matchMedia('(max-width: 610px)');

function removeSymbol(mediaQuery) {
	if (mediaQuery.matches) {
		heroTitle_span.innerHTML = "Into an <u>realit</u>y";
	} else {
		heroTitle_span.innerHTML = "~ Into an <u>realit</u>y ~";
	}
}

removeSymbol(mediaQuery);
mediaQuery.addListener(removeSymbol);