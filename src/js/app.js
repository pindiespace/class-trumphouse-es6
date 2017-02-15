'use strict';

import Util from './util';
import GameObject from './gameobject';
import User from './user';

export default class Trumphouse {

	constructor ( $, window, document ) {

		console.log( 'in Trumphouse constructor' );

		this.$ = $; // jQuery

		this.window = window;

		this.document = document;

		this.util = new Util(); // Composite in Utilities

		this.BEGINNER = 1;

		this.EXPERIENCED = 2;

		this.candidates = []; // array holding candidates



	}

	init () {

	}

}

window.trumphouse = new Trumphouse( jQuery, window, document );



