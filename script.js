$(document).ready(function () {
	//tabbs
	$(".tab2, .tab3").hide();
	$(".panels ul li").click(function () {
		if ($(this).hasClass("active")) {
		} else {
			$(".panels ul li").removeClass("active");
			// $(".tabSection").hide()
			$(this).addClass("active");
		}

		if ($(this).attr("id") === "tab1") {
			$(".tabSection").hide();
			$(".tab1").fadeIn();
		} else if ($(this).attr("id") === "tab2") {
			$(".tabSection").hide();
			$(".tab2").fadeIn();
		} else {
			$(".tabSection").hide();
			$(".tab3").fadeIn();
		}
	});

	//accordion

	$(".answer").hide();
	$(".accItem").click(function () {
		$(".answer").slideUp();
		$(".accItem svg").css({
			"-webkit-transform": "rotate(0deg)",
			"-moz-transform": "rotate(0deg)",
			transform: "rotate(0deg)",
			stroke: "#5267df",
		});
		$(this).children().next().slideToggle();
		$(this).children().children().next().css({
			"-webkit-transform": "rotate(180deg)",
			"-moz-transform": "rotate(180deg)",
			transform: "rotate(180deg)",
			stroke: "hsl(0, 94%, 66%)",
		});
	});

	//mobile menu

	$(".hamb img").click(function () {
		$(".mobileMenu").addClass("showMobile");
		$("body").css("overflow", "hidden");
	});
	$(".close img").click(function () {
		$(".mobileMenu").removeClass("showMobile");
		$("body").css("overflow", "");
	});

	$("form[name='subscribe']").validate({
		rules: {
			email: {
				required: true,
				email: true,
			},
		},
		messages: {
			email: "Whoops, make sure it's an email",
		},
		submitHandler: function (form) {
			form.submit();
		},
	});
});

// $("#join").submit(function () {
// 	event.preventDefault();
// 	let email = $("#join input").val();

// 	function validateEmail(email) {
// 		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// 		return emailReg.test(email);
// 	}
// 	if (!validateEmail(email)) {
// 		$(".message").css("display", "block");
// 	} else {
// 		console.log("sucess!");
// 	}
// });
