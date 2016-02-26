var fs = require('fs');
var PNG = require('node-png').PNG;
var noise = require('./libs/perlin.js').noise;
noise.seed(Math.random());

var config = JSON.parse(fs.readFileSync('generate.json', 'utf8'));

function generate(){
	var png = new PNG({
		width:config.width,
		height: config.height,
		filterType: -1
	});
	generatePng(png);
	var outputName = config.output;
	png.pack().pipe(fs.createWriteStream(__dirname + '/' + outputName));	
	console.log("finished generating image : " + outputName);
}

function generatePng(png){
	var image= new Array();
	for (var x = 0; x <= png.width; x++) {
		console.log("creating png line : " + x);
		image[x] = new Array();
	  for (var y = 0; y <= png.height; y++) {
		image[x][y] = fractallikePerlin(x,y);
		var idx = (png.width * y + x) << 2;
		var pixelData = image[x][y] / config.outputDarkness;
		png.data[idx] = pixelData;
		png.data[idx+1] = pixelData;
		png.data[idx+2] = pixelData;
		png.data[idx+3] = 0xff;
	  }
	}
}

function fractallikePerlin(x,y){
	var perlinBase  = 0;
	var size = config.startingsize;
	var strength = config.startingstrength;
	for(var i = 0; i< config.levels;i++){
		perlinBase += getPerlinValue(x,y,size,strength); 
		size = size * config.levelsize;	
		strength = strength * config.levelsize;	
	} 	
	return perlinBase;	
}

function getPerlinValue(x,y,size,strength){
		return (Math.abs(noise.perlin2(x/size, y/size)) * strength) * 256;
}

generate();


