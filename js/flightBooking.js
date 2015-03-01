$(function(){
$("#leaveDate,#doj,#returnDate").mobiscroll().date({			
			    });
			    $("#fromTime").mobiscroll().time({				
				});
			    $("#toTime").mobiscroll().time({				
				});	

$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})
$('.selectpicker').selectpicker('val', ['Economy(Lowest Fare)','Business(Medium)','Premium']);

});