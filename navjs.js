let nav = document.querySelector('nav');
let dropdown = nav.querySelector('.dropdown');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

dropdownToggle.addEventListener('click', () => {
	if (dropdown.classList.contains('show')) {
		dropdown.classList.remove('show');
	} else {
		dropdown.classList.add('show');
	}
})

navToggle.addEventListener('click', () => {
	if (nav.classList.contains('opened')) {
		nav.classList.remove('opened');
	} else {
		nav.classList.add('opened');
	}
})

/*navToggle.addEventListener('click', () => {
	if ( document.getElementById("contactss").className.match(/(?:^|\s)active(?!\S)/) ) {
		document.getElementById("contactss").className = document.getElementById("contactss").className.replace( /(?:^|\s)active(?!\S)/g , '' );
	} else {
		document.getElementById("homeb").className = document.getElementById("homeb").className.replace( /(?:^|\s)active(?!\S)/g , '' );
		document.getElementById("contactss").className += "active";
	}
})*/
