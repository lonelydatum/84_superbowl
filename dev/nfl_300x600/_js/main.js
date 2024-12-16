

import {init, start} from '../../_common/js/common.js'




const colors = [	
	"2ed145", 
	"46d442", 
	"5eda40", 
	"76de3d", 
	"8de23b", 
	"a4e739", 
	"bbeb37",
	"d3ef35",	
	]

const barOptions  ={
	colors,
	verHor:"h",
	TOTAL: 8,
	WIDTH: 50,
	HEIGHT: 20,
	GAP: -50,
	id:"bars",
	
}

const barOptions2  ={
	...barOptions,
	colors:colors.reverse(),
	GAP: 50,
	WIDTH:370,
	id:"bars2"
}


start(barOptions, barOptions2)





module.exports = {};

