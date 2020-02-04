//Andrew Harrah
$('textarea').keyup(function() {
					if ($(this).val().toLowerCase().indexOf('vegan') != -1) {
						$("body").append("<h3>WARNING: Cheesecake contains dairy</h3>")
					}
					else(){
						$("body").remove("div")
						$("body").remove("p")
						$("body").append("<h3>Thank you! Your order has been placed</h3>")
					}
				});