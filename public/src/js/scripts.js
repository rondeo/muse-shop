shoe.render();

shoe.cart.on('shoe_checkout', function (evt) {
	var items, len, i;

	if (this.subtotal() > 0) {
		items = this.items();

		for (i = 0, len = items.length; i < len; i++) {}
	}
});

$(function () {
	$("#slider4").responsiveSlides({
		auto: true,
		pager: true,
		nav: true,
		speed: 1000,
		namespace: "callbacks",
		before: function () {
			$('.events').append("<li>before event fired.</li>");
		},
		after: function () {
			$('.events').append("<li>after event fired.</li>");
		}
	});
});

		jQuery(document).ready(function ($) {
			$(".scroll").click(function (event) {
				event.preventDefault();
				$('html,body').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000);
			});
		});
console.log('loading scripts')
window.onload = function(){
	document.getElementById("loading").remove();

}