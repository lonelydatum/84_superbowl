

import {init, start} from '../../_common/js/common.js'




const colors = [
	"00c748", 
	"17cc46", 
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
	TOTAL: 10,
	WIDTH: 31,
	HEIGHT: 10,
	GAP: -35,
	id:"bars",
	
}

const barOptions2  ={
	...barOptions,
	colors: colors.reverse(),
	WIDTH: 350+50,
	HEIGHT: 13,
	TOTAL: 8,
	GAP:50,
	id:"bars2",
}


start(barOptions, barOptions2)





module.exports = {};

