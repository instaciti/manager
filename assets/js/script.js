$(document).ready(function(){
	$('#check1').change(function(){
      	$('.discount').toggle();
    });

	$('#check2').change(function(){
		$('.installment').toggle();
  });
});

$(".accordion-item").click(function(){
	$(".singleMenu").removeClass("active");
  });

  $( function() {
    $( ".datepicker" ).datepicker();
  } );