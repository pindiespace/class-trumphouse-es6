import User from './user';

export default class Candidate extends User {

	constructor ( candidateData ) {

		super( candidateData ); // call User, which calls GameObject

		// Change object to candidate brick size

		this.dom.elem.className = 'candidate';

		console.log( 'in Candidate constructor' );

	}

}