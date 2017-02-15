import GameObject from './gameobject';

export default class User extends GameObject {

	constructor () {

		super(); // call GameObject

		console.log( 'in User constructor' );

	}

}