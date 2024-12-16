 


import {init, start, colors} from '../../_common/js/common.js'


const barOptions  ={
	TOTAL: 8,
	WIDTH: 50,
	HEIGHT: 20,
	GAP: -50,
	verHor:"h",
	id:"bars"
	
}

const barOptions2  ={
	TOTAL: 7,
	WIDTH: 300+22,
	HEIGHT: 20,
	GAP: 50,
	verHor:"h",
	id:"bars2"
	
}

start(barOptions, barOptions2)
	



module.exports = {};

