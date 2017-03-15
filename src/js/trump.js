import User from './user';

export default class Trump extends User {

	constructor ( trumpData ) {

		super( trumpData ); // calls User, which calls GameObject

		// Change object to candidate brick size

		this.dom.elem.className = 'trump';

		console.log( 'in Trump constructor' );

	}

}