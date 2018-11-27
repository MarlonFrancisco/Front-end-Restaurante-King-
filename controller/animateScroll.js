$(document).scroll((event) => {
	let position = $(document).scrollTop();
	let element;

	let rap = document.querySelectorAll(".rap");

	[...rap].forEach(item => {
		element = $(`#${item.id}`).offset();

		if(element.top >= (position - 500) && element.top <= (position + 500)) {
			item.classList.remove('remover')
			item.classList.add('surgir');
		} else {
			item.classList.remove('surgir');
			item.classList.add('remover');
		}
	});

	if(position >= 200) {
		$("#nav-custom").css("top", '0');
	} else {
		$("#nav-custom").css("top", "-100px")
	}
})