

import {init, start_landscape, size} from '../../_common/js/common.js'




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
	colors,
	verHor:"v",
	TOTAL: 10,
	WIDTH: 47,
	HEIGHT: 360,
	GAP: 32,
	id:"bars",
	
}

const barOptions2  ={
	...barOptions,
	id:"bars2"
}


start_landscape(barOptions, barOptions2, {y:size.h})





module.exports = {};

