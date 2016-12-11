

jQuery(document).ready(function($){
	//this is used for the video effect only
	if( $('.cd-bg-video-wrapper').length > 0 ) {
		var videoWrapper = $('.cd-bg-video-wrapper'),
			mq = window.getComputedStyle(document.querySelector('.cd-bg-video-wrapper'), '::after').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		if( mq == 'desktop' ) {
			// we are not on a mobile device 
			var	videoUrl = videoWrapper.data('video'),
				video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
			video.appendTo(videoWrapper);
			video.get(0).play();
		}
	}

    $('stars').on('hover', function(){
        $(this).trigger('click');
    });


});

function visibleLogin() {
	$("#login-form").show();
}

function exitLogin() {
	$("#login-form").hide();
}

function visibleCreateAcc() {
	$("#createAcc-form").show();
}

function exitCreateAcc() {
    $("#createAcc-form").hide();
}

function exitUser() {
	session_destroy();
}

function openAnswerForm($idRev) {
    $('#form'+ $idRev).show();
}


$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 150,
        values: [ 15, 50 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );
