

import {init, start, size} from '../../_common/js/common.js'




const colors = [	
	"d3ef35", 
	"c4ec37", 
	"b3ea38", 
	"a2e739", 
	"92e33a", 
	"82e03c", 
	"71de3d",
	"61da40",	
	"52d641",	
	"41d343",	
	"30d144",	
	"20ce46",	
	"10ca46"
	]

const barOptions  ={
	colors:[
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
	],
	verHor:"h",
	TOTAL: 10,
	WIDTH: 109,
	HEIGHT: 11,
	GAP: -98,
	id:"bars",
	
}

const barOptions2  ={
	colors,
	verHor:"v",
	TOTAL: 11,
	HEIGHT: 500,
	GAP: 46,
	WIDTH: 67,
	id:"bars2"
}


start(barOptions, barOptions2, {y:50})





module.exports = {};

