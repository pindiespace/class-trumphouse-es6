import User from './user';

export default class Candidate extends User {

	constructor () {

		super(); // call GameObject

		console.log( 'in Candidate constructor' );

	}

}