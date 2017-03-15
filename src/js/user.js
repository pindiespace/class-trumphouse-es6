import DOMPiece from './dompiece';
import GameObject from './gameobject';

export default class User extends GameObject {

	constructor ( userData ) {

		super( userData ); // call GameObject

		this.dom = new DOMPiece( userData.img );

		// Push the z-index to the top
		this.dom.elem.style.zIndex = '-1';

		console.log( 'in User constructor' );

	}

}