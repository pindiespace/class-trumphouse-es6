'use strict';

import Util from './util';
import GameObject from './gameobject';
import User from './user';
import Trump from './trump';
import Voter from './voter';
import Candidate from './candidate';
import Arena from './arena';

export default class Trumphouse {

	/** 
	 * @constructor
	 * Loads data files (JSON) for the major object types in the game, along 
	 * with references to the window and document object.
	 */
	constructor ( candidateData, voterData, trumpData, arenaData,
		$, window, document  ) {

		console.log( 'in Trumphouse constructor' );

		this.$ = $; // jQuery

		this.window = window;

		this.document = document;

		this.util = new Util(); // Composited in Utilities

		this.BEGINNER = 1;

		this.EXPERIENCED = 2;

		this.arena = new Arena( arenaData[ 'arena1' ] );

		this.trump = new Trump( trumpData[ 'trump1' ] );

		this.voter = new Voter( voterData[ 'voter1' ] );

		this.candidates = []; // array holding candidates

		// Load the candidates (JSON file)

		for ( let i in candidateData ) {

			console.log('i is a:' + i );

			this.candidates.push( new Candidate( candidateData[ i ] ) );

		}

		// NOTE: commented out in Week 10 so .getComputedStyle works
		// this.init();

	}

	/** 
	 * Position the Candidates
	 */
	createCandidateGrid () {

		let startHeight = 0;

		for ( let i = 0; i < this.candidates.length; i++ ) {

			let candidateDOM = this.candidates[ i ].dom.elem;

			// push the next one down by the height of a Candidate

			let candidateHeight = parseFloat( window.getComputedStyle( candidateDOM ).getPropertyValue( 'height' ) );

			candidateDOM.style.top = startHeight + 'px';

			startHeight += 75; // candidateHeight;

		}

	}

	init () {

		// put the Arena onscreen

		this.arena.attach( document.body );

		// attach Trump to the Arena

		this.trump.attach( this.arena.dom );

		this.trump.dom.elem.style.top = '200px';

		// attach Voter to the Arena

		this.voter.attach( this.arena.dom );

		this.voter.dom.elem.style.top = '200px'

		// attach Candidates to the Arena

		for ( let i = 0; i < this.candidates.length; i++ ) {

			// TODO: set position and motion...

			// Attach to the DOM
			
			this.candidates[ i ].attach( this.arena.dom );

		}

		this.createCandidateGrid();

		window.addEventListener( 'keydown', function ( evt ) {

			console.log( 'keyCode:' + evt.keyCode );

			let voterStyle = this.voter.dom.elem.style;

			switch ( evt.keyCode ) {

				case 32:     // space bar
					// move Voter to right, collide with Trump
					break;

				case 37:     // left
					// nothing
					break;

				case 38:     //up
					console.log("UP top:" + voterStyle.top)
					voterStyle.top = ( parseInt( voterStyle.top ) - 1 ) + 'px';
					break;

				case 39:   // right
					// nothing
					break;

				case 40:  // down
					console.log("DOWN:" + voterStyle.top)
					voterStyle.top = ( parseInt( voterStyle.top ) + 1 ) + 'px';
					break;

				default:

					break;

			}

		}.bind( this ) );

	}

}

// Data describing the GameObject->User->Trump
let trumpData = {
	'trump1' : {
		'name' : 'Donald J. Trump',
		'img' : '/img/pngs/players/trump.png',
		'power' : '10'
	}
};

// Data describing the GameObject->User->Voter

let voterData = {
	'voter1' : {
		'name' : 'John Q. Public',
		'img' : '/img/pngs/chimpanzee.png'
	}
};

// Data describing the GameObject->Arena

let arenaData = {
	'arena1' : {
		'backgroundId' : 'bkgnd-1992', //loaded by CSS
		'whitehouseId' : 'whitehouse'
	},
	'arena2' : {
		'backgroundId' : 'bkgnd-1948',
		'whitehouseId' : 'whitehouse'
	}
};

// Data describing the GameObject->User->Candidate 

let candidateData = {

	'clinton' : {
		'name' : 'Hillary Clinton',
		'img' : 'img/pngs/bricks/clinton.png',
		'power' : '7'
	},
	'cruz' : {
		'name' : 'Ted Cruz',
		'img' : 'img/pngs/bricks/cruz.png',
		'power' : '5'
	},
	'kasich' : {
		'name' : 'John Kasich',
		'img' : 'img/pngs/bricks/kasich.png',
		'power' : '3'
	},
	'sanders' : {
		'name' : 'Bernie Sanders',
		'img' : 'img/pngs/bricks/sanders.png',
		'power' : '7'
	},
	'stein' : {
		'name' : 'Jill Stein',
		'img' : 'img/pngs/bricks/stein.png',
		'power' : '7'
	},
	'johnson' : {
		'name' : 'Gary Johnson',
		'img' : 'img/pngs/bricks/johnson.png',
		'power' : '7'
	}

};

// Create our game.

let trumphouse = new Trumphouse( 
	candidateData, voterData, trumpData, arenaData,
	jQuery, window, document 
 );

// TODO: DEBUG ONLY!!!!

window.trumphouse = trumphouse;






