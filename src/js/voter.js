import User from './user';

export default class Voter extends User {

	constructor () {

		super(); // call GameObject

		console.log( 'in Voter constructor' );

	}

}