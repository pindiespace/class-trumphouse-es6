import DOMPiece from './dompiece';

export default class GameObject {

	constructor ( data ) {

		console.log( 'in GameObject constructor' );

		this.dom = new DOMPiece( data );

		this.dom.elem.style.position = 'absolute';

		this.position = {
			top: 0,
			left: 0
		};

		this.motion = {
			dx: 0,
			dy: 0
		};

	}

	valid () {

		if ( this.dom ) {

			return true;

		}

		return false;

	}

	setPosition ( x, y ) {

		console.log("setting position to x:" + x + " y:" + y)
	}

	setMotion ( dx, dy ) {

		console.log("setting motion to x:" + dx + " y:" + dy)
	}

	/** 
	 * Attach the HTML fragment to the web page
	 * Given a parent DOM element, attach this 
	 * object's DOM fragment.
	 */
	attach ( parent ) {

		parent.appendChild( this.dom.elem );

	}

	detach () {

	}

	show () {

	}

	hide () {


	}

}