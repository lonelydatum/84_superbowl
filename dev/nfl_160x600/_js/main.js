 


import {init, start, colors} from '../../_common/js/common.js'


const barOptions  ={
	colors:["2ed145","46d442", "5eda40", "76de3d", "8de23b", "a4e739", "bbeb37", "d3ef35" ],

	TOTAL: 8,
	WIDTH: 50,
	HEIGHT: 20,
	GAP: -50,
	verHor:"h",
	id:"bars"
	
}

const barOptions2  ={
	colors:barOptions.colors.reverse(),
	TOTAL: 7,
	WIDTH: 300+22,
	HEIGHT: 20,
	GAP: 50,
	verHor:"h",
	id:"bars2"
	
}

start(barOptions, barOptions2)
	



module.exports = {};

