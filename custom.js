(function ($) {
	$(document).ready(function(){
		console.log('Doc Ready');

		//Append Accessibility Menu if Home V2
	    if ( $('body').hasClass('page-id-9591') ) {
	    	console.log('Access');
	    	
	    	//Store Vars
	    	var accessmenuitem = '<li id="menu-item-1147" class="accessibility-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-1147" data-item-id="1147"><span class="background-default transition-fade"></span><span class="background-active transition-fade"></span><a title="Accessibility" href="/" class="fusion-background-highlight"><span class="menu-text"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 122.88" width="24" height="24"><title>Accessibility</title><path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z"/></svg></span></a></li>';

	    	//Prepend Access Menu
	    	$('ul#menu-mainmenu').prepend(accessmenuitem);
	    }

	    //On Click of Accessibility Menu Item

	    //Open ADA Popup
	    $('body').on('click', '.accessibility-menu a', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var windowwidth = $(window).width(),
	    		adactrl = $('.ada-controlled'),
	    		adapopup = $('.ada-popup');

	    	if (windowwidth < 1024) {
				adactrl.addClass('ada-controlled-mobile');
				adapopup.addClass('ada-popup-mobile');
			} else {
				adactrl.removeClass('ada-controlled-mobile');
				adapopup.removeClass('ada-popup-mobile');
			}

	    	if ( adapopup.hasClass('show') ) {
	    		adapopup.removeClass('show');
	    	} else {
	    		adapopup.addClass('show');
	    	}
	    	
	    });

	    //On Click of Accessibility Switches

	    //Readable Font
	    $('body').on('click', 'a.on-switch', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var _this = $(this),
	    		adactrl = $('.ada-controlled');

	    	//Check if Readable Font
		    if ( 
		    	_this.hasClass('readable-font') 
		    ) {		    	
		    	//Turn Buttons On/Off
		    	if ( 
		    		_this.hasClass('on') 
		    	) {
		    		//Turn Off Button
		    		_this.removeClass('on');
		    		//Remove
	    			adactrl.removeClass('readable-font-apply');
		    	} else {
		    		//Turn On Button
		    		_this.addClass('on');
		    		console.log('Readable Font');
		    		if ( 
		    			_this.hasClass('on') 
		    		) {
		    			//Apply
		    			adactrl.addClass('readable-font-apply');
		    		}
		    	}
		    }

	    });

		//Highlight Menu
	    $('body').on('click', 'a.on-switch', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var _this = $(this),
	    		adactrl = $('.ada-controlled');

	    	//Check if Highlight Menu
		    if ( 
		    	_this.hasClass('highlight-menu') 
		    ) {
		    	//Turn Buttons On/Off
		    	if ( 
		    		_this.hasClass('on') 
		    	) {
		    		//Turn Off Button
		    		_this.removeClass('on');
		    		//Remove
		    		adactrl.removeClass('highlight-menu-apply');
		    	} else {
		    		//Turn On Button
		    		_this.addClass('on');
		    		console.log('Highlight Menu');
		    		if ( 
		    			_this.hasClass('on') 
		    		) {
		    			//Apply
		    			adactrl.addClass('highlight-menu-apply');
		    		}	
		    	}
		    }
	    	
	    });

	    //Highlight Title
	    $('body').on('click', 'a.on-switch', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var _this = $(this),
	    		adactrl = $('.ada-controlled');

	    	//Check if Highlight Title
	    	if ( 
	    		_this.hasClass('highlight-titles') 
	    	) {
		    	//Turn Buttons On/Off
		    	if ( 
		    		_this.hasClass('on') 
		    	) {
		    		//Turn Off Button
		    		_this.removeClass('on');
		    		//Remove
		    		adactrl.removeClass('highlight-titles-apply');
		    	} else {
		    		//Turn On Button
		    		_this.addClass('on');
		    		console.log('Highlight Title');
		    		if ( 
		    			_this.hasClass('on') 
		    		) {
		    			//Apply
		    			adactrl.addClass('highlight-titles-apply');
		    		} 	
		    	}
		    }

	    });

	    //Highlight Buttons
	    $('body').on('click', 'a.on-switch', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var _this = $(this),
	    		adactrl = $('.ada-controlled');

	    	//Check if Highlight Buttons
	    	if ( 
	    		_this.hasClass('highlight-buttons') 
	    	) {
		    	//Turn Buttons On/Off
		    	if ( 
		    		_this.hasClass('on') 
		    	) {
		    		//Turn Off Button
		    		_this.removeClass('on');
		    		//Remove
					adactrl.removeClass('highlight-buttons-apply');
		    	} else {
		    		//Turn On Button
		    		_this.addClass('on');
		    		console.log('Highlight Buttons');
		    		if ( 
		    			_this.hasClass('on') 
		    		) {
		    			//Apply
		    			adactrl.addClass('highlight-buttons-apply');
		    		}
		    	}
		    }
	    	
	    });

	    //Text Align Center
	    $('body').on('click', 'a.on-switch', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var _this = $(this),
	    		adactrl = $('.ada-controlled'),
	    		switchright = $('.on-switch.align-right'),
	    		rainbowbtn = $('.rainbow-btn'),
	    		switchcenter = $('.on-switch.align-center');

	    	//Check if Text Align Center
	    	if ( 
	    		_this.hasClass('align-center') 
	    	) {
		    	//Turn Buttons On/Off
		    	if ( 
		    		_this.hasClass('on') 
		    	) {
		    		//Turn Off Button
		    		_this.removeClass('on');
		    		//Remove
	    			adactrl.removeClass('align-center-apply');
	    			//Reset Buttons
	    			rainbowbtn.each(function(i){
	    				var __this = $(this);
	    				__this.parent().css('text-align', 'unset');
	    			});
		    	} else {
		    		//Turn On Button
		    		_this.addClass('on');
		    		console.log('Text Align Center');
		    		if ( 
		    			_this.hasClass('on') 
		    		) {
		    			//Apply
		    			adactrl.addClass('align-center-apply');
		    			//Turn Off Align Right
		    			adactrl.removeClass('align-right-apply');
		    			switchright.removeClass('on');
		    			//Align Right Buttons
		    			rainbowbtn.each(function(i){
		    				var __this = $(this);
		    				__this.parent().css('text-align', 'center');
		    			});
		    		}
		    	}
		    }

	    });

	    //Text Align Right
	    $('body').on('click', 'a.on-switch', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var _this = $(this),
	    		adactrl = $('.ada-controlled'),
	    		switchright = $('.on-switch.align-right'),
	    		rainbowbtn = $('.rainbow-btn'),
	    		switchcenter = $('.on-switch.align-center');

	    	//Check if Text Align Right
	    	if ( 
	    		_this.hasClass('align-right') 
	    	) {
		    	//Turn Buttons On/Off
		    	if ( 
		    		_this.hasClass('on') 
		    	) {
		    		//Turn Off Button
		    		_this.removeClass('on');
		    		//Remove
	    			adactrl.removeClass('align-right-apply');
	    			//Reset Buttons
	    			rainbowbtn.each(function(i){
	    				var __this = $(this);
	    				__this.parent().css('text-align', 'unset');
	    			});
		    	} else {
		    		//Turn On Button
		    		_this.addClass('on');
		    		console.log('Text Align Right');
		    		if ( 
		    			_this.hasClass('on') 
		    		) {
		    			//Apply
		    			adactrl.addClass('align-right-apply');
		    			//Turn Off Align Center
		    			adactrl.removeClass('align-center-apply');
		    			switchcenter.removeClass('on');
		    			//Align Center Buttons
		    			rainbowbtn.each(function(i){
		    				var __this = $(this);
		    				__this.parent().css('text-align', 'right');
		    			});
		    		}
		    	}
		    }

	    });

	    //Dark Mode
	    $('body').on('click', 'a.on-switch', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var _this = $(this),
	    		adactrl = $('.ada-controlled'),
	    		accessmenu = $('.accessibility-menu svg'),
	    		logo = $('.logo-img img'),
	    		home = 'https://www.auraphoto.com',
	    		logowhite = home+'/wp-content/uploads/2022/08/auraphoto-logo-white-v2.png',
	    		logoorig = home+'/wp-content/uploads/2022/07/auraphoto-logo-v2.png',
	    		submenu = $('.header-menu ul.sub-menu li'),
	    		black = '#000000',
	    		white = '#ffffff',
	    		darktext = '#212934',
	    		header = $('body header'),
	    		headerdivs = $('body header div'),
	    		headersections = $('body header section'),
	    		headernavs = $('body header nav'),
	    		headermain = $('body header main'),
	    		headerv2 = $('body .ada-header'),
	    		headerv2divs = $('body .ada-header div'),
	    		footer = $('body footer'),
	    		footerdivs = $('body footer div'),
	    		footersections = $('body footer section'),
	    		footernavs = $('body footer nav'),
	    		footermain = $('body footer main');

	    	//Check if Dark Mode
	    	if ( 
	    		_this.hasClass('dark-mode') 
	    	) {
		    	//Turn Buttons On/Off
		    	if ( 
		    		_this.hasClass('on') 
		    	) {
		    		//Turn Off Button
		    		_this.removeClass('on');
		    		//Remove
	    			adactrl.removeClass('dark-mode-apply');
	    			//Update To Orig Logo
	    			logo.attr('src', logoorig);
	    			//Update Accessibility Menu to Orig
	    			accessmenu.css('fill', darktext);
	    			//Update Submenu BG
	    			submenu.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
	    			//All Header Codes
	    			//Add ADA Class to Header
	    			header.removeClass('ada-dark-apply');
	    			//Apply to Inner Header Divs
	    			headerdivs.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
	    			//Apply to Inner Header Sections
	    			headersections.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
	    			//Apply to Inner Header Navs
	    			headernavs.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
	    			//Apply to Inner Header Main
	    			headermain.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
	    			//All Footer Codes
	    			//Add ADA Class to Footer
	    			footer.removeClass('ada-dark-apply');
	    			//Apply to Inner Footer Divs
	    			footerdivs.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
	    			//Apply to Inner Footer Sections
	    			footersections.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
	    			//Apply to Inner Footer Sections
	    			footernavs.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
		    	} else {
		    		//Turn On Button
		    		_this.addClass('on');
		    		console.log('Dark Mode');
		    		if ( 
		    			_this.hasClass('on') 
		    		) {
		    			//Apply
		    			adactrl.addClass('dark-mode-apply');
		    			//Disable Light Mode
		    			adactrl.removeClass('light-mode-apply');
		    			//Update To White Logo
		    			logo.attr('src', logowhite);
		    			//Update Accessibility Menu to White
		    			accessmenu.css('fill', white);
		    			//Update Submenu BG
		    			submenu.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', black);
		    			});
		    			//All Header Codes
		    			//Add ADA Class to Header
		    			header.addClass('ada-dark-apply');
		    			//Apply to Inner Header Divs
		    			headerdivs.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', black);
		    			});
		    			//Apply to Inner Header Sections
		    			headersections.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', black);
		    			});
		    			//Apply to Inner Header Navs
		    			headernavs.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', black);
		    			});
		    			//Apply to Inner Header Main
		    			headermain.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', black);
		    			});
		    			//All Footer Codes
		    			//Add ADA Class to Footer
		    			footer.addClass('ada-dark-apply');
		    			//Apply to Inner Footer Divs
		    			footerdivs.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', black);
		    			});
		    			//Apply to Inner Footer Sections
		    			footersections.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', black);
		    			});
		    			//Apply to Inner Footer Sections
		    			footernavs.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', black);
		    			});
		    		}
		    	}
		    }

	    });

	    //Light Mode
	    $('body').on('click', 'a.on-switch', function(e){
	    	e.preventDefault();

	    	//Store Vars
	    	var _this = $(this),
	    		adactrl = $('.ada-controlled'),
	    		accessmenu = $('.accessibility-menu svg'),
	    		logo = $('.logo-img img'),
	    		home = 'https://www.auraphoto.com',
	    		logowhite = home+'/wp-content/uploads/2022/08/auraphoto-logo-white-v2.png',
	    		logoorig = home+'/wp-content/uploads/2022/07/auraphoto-logo-v2.png',
	    		submenu = $('.header-menu ul.sub-menu li'),
	    		black = '#000000',
	    		white = '#ffffff',
	    		darktext = '#212934',
	    		header = $('body header'),
	    		footer = $('body footer');

	    	//Check if Dark Mode
	    	if ( 
	    		_this.hasClass('light-mode') 
	    	) {
		    	//Turn Buttons On/Off
		    	if ( 
		    		_this.hasClass('on') 
		    	) {
		    		//Turn Off Button
		    		_this.removeClass('on');
		    		//Remove
	    			adactrl.removeClass('light-mode-apply');
	    			//Update To Orig Logo
	    			logo.attr('src', logoorig);
	    			//Update Accessibility Menu to Orig
	    			accessmenu.css('fill', darktext);
	    			//Update Submenu BG
	    			submenu.each(function(i){
	    				var __this = $(this);
	    				__this.css('background', '');
	    			});
		    	} else {
		    		//Turn On Button
		    		_this.addClass('on');
		    		console.log('Light Mode');
		    		if ( 
		    			_this.hasClass('on') 
		    		) {
		    			//Apply
		    			adactrl.addClass('light-mode-apply');
		    			//Disable Dark Mode
		    			adactrl.removeClass('dark-mode-apply');
		    			//Update To White Logo
		    			logo.attr('src', logoorig);
		    			//Update Accessibility Menu to White
		    			accessmenu.css('fill', black);
		    			//Update Submenu BG
		    			submenu.each(function(i){
		    				var __this = $(this);
		    				__this.css('background', white);
		    			});
		    		}
		    	}
		    }

	    });

	    //Close ADA Popup
	    $('body').on('click', 'a.ada-close-btn', function(e){
	    	e.preventDefault();

	    	var adapopup = $('.ada-popup');

	    	adapopup.removeClass('show');
	    });
	});
    
})(jQuery);