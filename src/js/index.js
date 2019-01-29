let status = "JS - OK!";
function cl(arg1, arg2, arg3, arg4) {
	console.log(arg1, arg2 || '', arg3 || '', arg4 || '');
	return '-';
}

cl(status);


var glob = {
	
}

// =================
@@include('frames/globalFunctions.js')
// ===============


var test = 'include js error';

$(document).ready(function() {
	console.log('document ready')
	
	// =================Include Modules==============================

	@@include('testModule.js')

  /*@@include('frames/PopupModule.js')*/
  /*@@include('frames/ValidationModule.js')*/
	/*@@include('frames/AnimateBorderModule.js')*/
  /*@@include('frames/custom_Input_Type_number.js')*/
  /*@@include('frames/AccordionModule.js')*/
  /*@@include('frames/ToggleContentModule.js')*/
  @@include('frames/SwitchTabsModule.js')
  /*@@include('frames/TextLimitModule.js')*/
  /*@@include('frames/StickyBlockModule.js')*/

 
	// =============================================================


	if ($('body')) {console.log('jQuery OK')}
	console.log(test);


  // ---------Popups Block-------

	$('body').on('click', '.searchButton', function() {
  	// e.preventDefault();
  	let modal = $('#popupSearch');
  	if ( modal.length ) {
  		glob.PopupModule.openPopup(modal, "js_openPopup_search");
  	}
  });

  $('body').on('click', '.button', function() {
  	// e.preventDefault();
  	let modal = document.getElementById('id');
  	if ( modal ) {
  		glob.PopupModule.openPopup(modal);
  	}
  });

  // ---------Accordion Blocks-------
	/*$('accordionBlockSelector').on('click', '.buttonSelector', function(e) {
		// console.time('click accordion working time');

		if (document.documentElement.clientWidth < 992) {
			e.stopPropagation();
			let submenuBlock = this.nextElementSibling;
			let button = this;

		// let siblingsBlocks = document.querySelectorAll('#publicInfoPage article.publicInfo-block .titleBlock + .hiddenContent');

			globFunc.toggleButtonContent(button);
			glob.AccordionModule.toggleContent("withoutSiblings", button, submenuBlock );
			// AccordionModule.toggleContent("withSiblings", button, submenuBlock, siblingsBlocks );				

		}
		// console.timeEnd('click accordion working time');
	})*/

  // ---------Text Limit-------
	/*let textBlocks = document.querySelectorAll('.selector');
	textBlocks.length ? TextLimitModule.sliceText(textBlocks, 180) : null;*/
	

	// ----------Scroll-to Section---------------
	
	/*$('body').on('click', 'article.story-item', function() {
		
		$('html, body').animate({
			scrollTop: $("#" + $(this).attr('data-story-id') ).offset().top
		}, 500);
	})*/



	// ===========Initializations=============

	// AnimateBorder(document.querySelectorAll('.animated-border-block svg'), {
	// 	borderWidth: 3,
	// 	shadedSection: 100,
	// 	transparentSection: 25,
	// 	reverse: false,
	// 	radius: true 
	// })

	/* begin dataPicker */
	(function() {
		if ( ! $('#datepicker').length ) return;
		$('#datepicker').datepicker({
			startDate: '-0d',
			// todayBtn: "linked",
			// multidate: true,
			// language: "ru",
			format: 'yyyy-mm-dd'
		});
		// .on('changeDate', function() {
		// 	$('#multipleDate').val(
		// 		$('#datepicker').datepicker('getFormattedDate')
		// 	);
		// });

	})();
	/* end dataPicker */

	/* begin input type file set title onChoose file */
	(function( $, window, document, undefined ) {
		$('.inputfile').each( function() {
			var $input	 = $( this ),
					$label	 = $input.next( 'label' ),
					labelVal = $label.html();

			$input.on('change', function(e) {
				var fileName = '';

				if( this.files && this.files.length > 1 )
					fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
				else if( e.target.value )
					fileName = e.target.value.split( '\\' ).pop();

				if( fileName )
					$label.find( 'span' ).html( fileName );
				else
					$label.html( labelVal );
			});

			// Firefox bug fix
			$input
			.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
			.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
		});
	})( jQuery, window, document );
	/* end input type file set title onChoose file */

});


window.onload = function() {
	console.log('window load')
	// $('#page-preloader').fadeOut('slow');
}
