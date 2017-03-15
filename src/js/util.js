export default class Util {

	constructor () {

		console.log( 'in Util constructor' );

	}

	/**
	 * detect IE 6, 7, 8, 9, 10
	 * returns version of IE or false, if browser is not Internet Explorer.
	 * Adapted from:
	 * @link https://codepen.io/gapcode/pen/vEJNZN
	 */
	isOldIE() {
  
		let ua = window.navigator.userAgent;

		// IE 10 or older => return version number

		let msie = ua.indexOf('MSIE ');

  		if ( msie > 0 ) {

    		var vers = parseInt( ua.substring( msie + 5, ua.indexOf( '.', msie ) ), 10 );

    		if ( vers < 9 ) {

    			return vers; // vers > 0 so isOldIE is "truthy" for this

    		}

  		}

		// other browser

		return false;

	}

	rgb2hex ( rgb ) {

 		rgb = rgb.match( /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i );

 		return (rgb && rgb.length === 4) ? '#' +
  			('0' + parseInt( rgb[ 1 ], 10 ).toString( 16 ) ).slice( -2 ) +
  			('0' + parseInt( rgb[ 2 ], 10 ).toString( 16 ) ).slice( -2 ) +
  			('0' + parseInt( rgb[ 3 ], 10 ).toString( 16 ) ).slice( -2 ) : '';

	}

}