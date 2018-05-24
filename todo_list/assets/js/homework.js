// Strike Through todo by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on 'X' to remove todo
$("ul").on("click", "li span", function(event) {
	$(this).parent().fadeOut(700, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Enter todo in input to add to list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabs new todo 
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todoText + "</li>");
	}
});

$(".fa-pencil").on("click", function() {
	$("input[type='text'").fadeToggle();
});