export default class Arena {

	constructor ( arenaData ) {

		// Main arena
		this.dom = document.createElement( 'div' );
		this.dom.className = 'main';
		this.dom.style.zIndex = '-1';

		// background image inside
		this.dom.bkgnd = document.createElement( 'div' );
		this.dom.bkgnd.className = 'arena-primary-bkgnd';
		this.dom.bkgnd.id = arenaData.backgroundId;
		this.dom.bkgnd.style.zIndex = '-1';

		// another background image
		this.dom.whitehouse = document.createElement( 'div' );
		this.dom.whitehouse.className = 'arena-whitehouse-bkgnd';
		this.dom.whitehouse.id = arenaData.whitehouseId;
		this.dom.whitehouse.style.zIndex = '-1';

		this.dom.appendChild( this.dom.bkgnd );

		this.dom.appendChild( this.dom.whitehouse );

		console.log( 'in Arena constructor' );

	}

	attach ( parent ) {

		parent.appendChild( this.dom );
	
	}


}