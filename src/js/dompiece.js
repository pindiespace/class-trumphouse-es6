export default class DOMPiece {

	constructor ( src ) {

		this.src = src; //default image path

		this.elem = document.createElement( 'div' );

    	this.img = document.createElement ( 'img' );

    	// TODO: replace with .addEventListener, try-catch-throw construct

    	//this.img.onerror = function ( e ) {

    	//	console.error('DOMPiece error: image src "' + e.target.src + '" not found!' );

    	//};

        this.img.onload = function ( e ) {

            console.log('DOMPiece image loaded, src:' + e.target.src );

        }

    	this.img.src = src; // Assign image to this object.

        this.elem.appendChild( this.img );

    	// TODO: attach DOMPiece to the HTML page (display list).

		console.log( 'in DOMPiece constructor' );

	}

}