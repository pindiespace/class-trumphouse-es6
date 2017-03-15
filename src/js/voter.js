import User from './user';

export default class Voter extends User {

	constructor ( voterData ) {

		super( voterData ); // calls User, which calls GameObject

		// Change object to candidate brick size

		this.dom.elem.className = 'voter';

		console.log( 'in Voter constructor' );

	}

}