(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.flag_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A0EO9IAA95MAllAAAQEVJklSC7QlRC7FyFLQFyFMlWEIg");
	var mask_graphics_1 = new cjs.Graphics().p("A0CO9IAA95MAllAAAQBLClALB4QAJBvAWBkQAJA5gFAwQgbCiiOBRQlAC1FcE+QFdE8lJD+MgllAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("Az/O9IAA95MAllAAAQBVC9gIB8QgKBzApBzQASA8gEA1QgYCbiHBOQkuCvFGEvQFHEvk6DzMgllAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Az9O9IAA95MAllAAAQBhDWgbCAQgdB3A8B/QAZBBgBA5QgXCUh/BMQkcCpEwEhQEyEhktDoMgllAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Az6O9IAA95MAllAAAQBsDvguCEQgxB7BPCMQAiBFABA+QgVCNh3BJQkMCiEcEVQEbESkeDdMgllAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("Az3O9IAA95MAllAAAQB3EIhCCIQhEB/BjCZQAqBJADBDQgTCFhwBHQj5CcEFEHQEGEDkQDTMgllAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("Az1O9IAA95MAllAAAQCDEhhWCLQhXCEB3ClQAyBOAEBHQgRB/hnBEQjoCXDvD3QDwD3kCDHMgllAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("Az0O9IAA95MAlkAAAQCPE6hqCOQhqCJCKCyQA6BTAGBLQgPB3hfBCQjXCQDaDqQDaDoj0C9MglkAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Az1O9IAA95MAlkAAAQCaFSh9CTQh9CMCdDAQBCBXAIBPQgNBwhYBAQjECLDEDbQDEDajmCyMglkAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Az2O9IAA95MAlkAAAQClFriPCWQiSCRCxDMQBKBcAKBTQgKBqhRA9QizCECuDPQCvDLjYCnMglkAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Az3O9IAA95MAlkAAAQCwGEijCbQikCUDEDYQBTBhAMBYQgKBjhHA6QiiB+CYDBQCZC8jKCdMglkAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Az4O9IAA95MAlkAAAQC8Gdi3CeQi3CZDXDlQBaBlAPBdQgIBchAA3QiQB4CCCyQCECvi8CSMglkAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Az5O9IAA95MAlkAAAQDHG2jKCiQjKCdDqDxQBiBqAQBhQgEBVg5A1Qh/ByBtCkQBuChiuCHMglkAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Az6O9IAA95MAlkAAAQDSHPjdClQjeCiD+D9QBrBwARBlQgCBNgxAzQhtBsBWCXQBaCSihB8MglkAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("Az7O9IAA95MAlkAAAQDdHojxCoQjwCnEREKQBzB0AUBpQgCBIgoAvQhbBmBACJQBDCEiSBxMglkAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("Az9O9IAA95MAllAAAQDoIAkECtQkECrElEXQB6B4AXBuQAABAghAtQhJBgAqB6QAuB2iEBnMgllAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("Az+O9IAA95MAllAAAQDzIZkXCxQkYCvE5EkQCDB8AYByQACA6gZArQg4BYAVBtQAYBoh2BcMgllAAAg");
	var mask_graphics_17 = new cjs.Graphics().p("Az/O9IAA95MAllAAAQD+IykqC1QkrCyFLExQCLCCAaB2QAFAygRApQgnBTgBBeQACBbhnBQMgllAAAg");
	var mask_graphics_18 = new cjs.Graphics().p("A0BO9IAA95MAllAAAQEJJLk+C4Qk+C3FfE+QCTCFAcB7QAHAsgKAmIgrCeQgUBLhZBGMgllAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("A0EO9IAA95MAllAAAQEVJklSC7QlRC7FyFLQFyFMlWEIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:145.0779,y:56.8}).wait(1).to({graphics:mask_graphics_1,x:144.8199,y:56.8}).wait(1).to({graphics:mask_graphics_2,x:144.5593,y:56.8}).wait(1).to({graphics:mask_graphics_3,x:144.3005,y:56.8}).wait(1).to({graphics:mask_graphics_4,x:144.0502,y:56.8}).wait(1).to({graphics:mask_graphics_5,x:143.7838,y:56.8}).wait(1).to({graphics:mask_graphics_6,x:143.5331,y:56.8}).wait(1).to({graphics:mask_graphics_7,x:143.5,y:56.8}).wait(1).to({graphics:mask_graphics_8,x:143.6,y:56.8}).wait(1).to({graphics:mask_graphics_9,x:143.7,y:56.8}).wait(1).to({graphics:mask_graphics_10,x:143.8,y:56.8}).wait(1).to({graphics:mask_graphics_11,x:143.9,y:56.8}).wait(1).to({graphics:mask_graphics_12,x:144,y:56.8}).wait(1).to({graphics:mask_graphics_13,x:144.1,y:56.8}).wait(1).to({graphics:mask_graphics_14,x:144.2,y:56.8}).wait(1).to({graphics:mask_graphics_15,x:144.3254,y:56.8}).wait(1).to({graphics:mask_graphics_16,x:144.4364,y:56.8}).wait(1).to({graphics:mask_graphics_17,x:144.5721,y:56.8}).wait(1).to({graphics:mask_graphics_18,x:144.757,y:56.8}).wait(1).to({graphics:mask_graphics_19,x:145.0779,y:56.8}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D02C35").s().p("AzvLHIAA2kQDsE0IgkfQIfkeGGEKQGGEKGokLIAAWkQnQBQmbjWQmajWnZFJQjzCpjEAAQi6AAiQiWg");
	this.shape.setTransform(149.1,58.3841);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D02C35").s().p("AteNSQgpgDgogKQhhgahfgbQhNgPgzg9IAA2jQA7BNBXAVQBlAcBuAXQApAJAsgBQCwgHDqh7QIIkQF4D6QF1D6GWj/IAAWjQm+BNmKjKQmKjLnFE3QjpCgi8AAIgSgBg");
	this.shape_1.setTransform(149.1,58.6124);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D02C35").s().p("AsHNIQgxgFgwgPQh0glh2gIQhlADg4hIIAA2jQBFBZBxAEQB8AMB/AkQAvAPA0AAQCogHDhh0QHwkCFpDqQFlDrGEj0IAAWjQmrBKl6i/Ql7i/mxElQjeCVi1AAIgTAAg");
	this.shape_2.setTransform(149.1,58.8172);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D02C35").s().p("AquM9Qg7gHg3gTQiHgwiOALQh9AVg9hTIAA2jQBPBmCKgNQCVgGCNAxQA4AVA7ABQCigGDWhtQHZjzFZDZQFVDbFyjoIAAWjQmYBGlqizQlri0meETQjTCMitAAIgTgBg");
	this.shape_3.setTransform(149.1,59.0368);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D02C35").s().p("ApXMzQhCgKhAgYQiZg6ilAeQiWAnhCheIAA2kQBZB0CjgfQCugXCdA/QA/AbBCABQCagFDMhnQHCjkFKDJQFFDLFgjdIAAWkQmFBClainQlbipmMEBQjICCilAAIgUAAg");
	this.shape_4.setTransform(149.1,59.273);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D02C35").s().p("An/MoQhLgLhHgcQishFi9AwQivA5hGhpIAA2kQBjCAC8gvQDHgpCtBMQBGAhBJADQCTgFDChgQGqjWE7C5QE1C8FOjSIAAWkQlyA/lKicQlLidl5DvQi9B4idAAIgVgBg");
	this.shape_5.setTransform(149.1,59.4822);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D02C35").s().p("AmnMeQhTgNhQghQi/hQjUBDQjHBLhLh0IAA2kQBsCNDXhAQDeg7C9BaQBNAnBRAEQCMgFC3haQGUjGErCpQElCsE8jHIAAWkQlgA8k5iRQk8iSllDdQiyBuiVAAIgWAAg");
	this.shape_6.setTransform(149.1,59.6959);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D02C35").s().p("AlPMTQhcgPhXgmQjShajsBWQjgBdhPiAIAA2jQB2CaDvhSQD5hMDMBnQBUAtBYAFQCFgECshTQF8i4EeCZQEUCcEqi7IAAWjQlNA5kpiGQksiGlSDLQioBliMAAIgXgBg");
	this.shape_7.setTransform(149.1,59.9113);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D02C35").s().p("Aj3MIQhlgRhegqQjmhlkDBpQj4BvhUiLIAA2jQCACmEIhiQERheDcB1QBcAzBfAFQB+gDChhMQFmiqEOCJQEECNEYiwIAAWjQk5A2kah7Qkch6lAC5QibBaiEAAIgZgBg");
	this.shape_8.setTransform(149.1,60.1221);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D02C35").s().p("AzvKxIAA2kQCKC0Eih0QEphvDrCCQBjA5BnAGQB2gCCYhGQFPibD+B5QD0B9EGilIAAWkQkmAykKhvQkNhvksCnQigBZiHgKQhsgThnguQj3hwkbB7Qh/A8hXAAQhlAAgvhQg");
	this.shape_9.setTransform(149.1,60.585);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D02C35").s().p("AzvKpIAA2kQCTDBE8iFQFCiBD7CQQBqA/BuAHQBvgCCOg/QE2iMDwBoQDkBuD0iaIAAWkQkUAvj5hkQj9hkkZCVQiXBQh+gKQh1gVhvgzQkKh6kzCOQiOBGhfAAQhoAAgxhUg");
	this.shape_10.setTransform(149.1,61.3782);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D02C35").s().p("AzvKuIAA2kQCeDOFUiWQFbiTEKCeQBxBFB1AHQBpgBCDg5QEgh9DhBZQDTBdDiiOIAAWkQkBArjphYQjthYkGCCQiNBHh3gKQh9gYh2g3QkdiFlKChQieBRhoAAQhsAAgyhYg");
	this.shape_11.setTransform(149.1,60.8718);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D02C35").s().p("AzvKzIAA2kQCoDaFtinQFzikEaCsQB4BKB9AJQBigBB4gyQEKhuDRBIQDDBODQiDIAAWkQjuAojZhNQjdhNjzBxQiDA9hvgLQiFgZh/g8QkviQliC0QitBchxAAQhwAAgzhcg");
	this.shape_12.setTransform(149.1,60.3542);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D02C35").s().p("AzvK4IAA2kQCxDnGIi4QGLi2EqC5QB/BRCEAJQBaAABvgrQDyhgDDA4QCyA/C+h4IAAWkQjbAljIhCQjPhBjfBeQh4AzhpgKQiNgciGhAQlDial5DGQi9Bnh4AAQh0AAg1hgg");
	this.shape_13.setTransform(149.1,59.8512);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D02C35").s().p("AzvK9IAA2kQC7D0GhjJQGkjHE4DGQCHBXCMAKQBUAABjgkQDbhRCzAoQCjAuCshsIAAWkQjIAhi4g2Qi/g2jMBNQhvAphggLQiWgdiOhFQlVilmRDZQjMByiAAAQh5AAg2hkg");
	this.shape_14.setTransform(149.1,59.3553);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D02C35").s().p("AzvLCIAA2kQDFEBG6jaQG9jZFIDUQCNBcCVAMQBMABBZgeQDDhDClAYQCSAfCahhIAAWkQi1AeiogrQivgqi5A6QhkAghZgLQiegfiYhKQlmivmpDrQjbB9iJAAQh9AAg3hog");
	this.shape_15.setTransform(149.1,58.8546);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D02C35").s().p("AzvLHIAA2kQDPEOHUjsQHVjqFXDiQCVBiCcAMQBEACBPgYQCsgzCWAHQCCAQCIhWIAAWkQijAbiXgfQigggilApQhaAWhRgLQiogiiehOQl6i6m/D+QjrCIiRAAQiBAAg5hsg");
	this.shape_16.setTransform(149.1,58.355);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D02C35").s().p("AzvLMIAA2jQDZEaHtj8QHuj8FmDvQCdBoCjANQA9ACBFgQQCVglCHgJQBxAAB2hKIAAWjQiQAYiHgUQiQgUiTAXQhPAMhKgLQivgkinhSQmLjFnYERQj7CSiYAAQiFAAg7hwg");
	this.shape_17.setTransform(149.1,57.8434);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D02C35").s().p("AzvLRIAA2kQDjEnIGkNQIGkNF3D8QCjBvCrANQA2ADA6gKQB+gWB4gZQBhgQBkg/IAAWkQh9AUh4gIQh/gJiAAFQhFAChCgLQi3gmivhXQmfjPnvEkQkJCdihAAQiKAAg8h0g");
	this.shape_18.setTransform(149.1,57.3634);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D02C35").s().p("AzvLWIAA2jQDsE0IgkfQIfkfGGEKQGGEKGokKIAAWjQnnBOmzjaQmxjaoHE2QkZCoioAAQiOAAg+h4g");
	this.shape_19.setTransform(149.1,56.8427);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.7,-27.7,250.90000000000003,172.29999999999998);


(lib.flag1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flag_1();
	this.instance.setTransform(105.2,99.95,1,1,0,0,0,126.4,72.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("AAAVgMAAAgq/");
	this.shape.setTransform(0,151.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flag1, new cjs.Rectangle(-4.6,-11.1,258.90000000000003,301.5), null);


// stage content:
(lib.flag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.flag1();
	this.instance.setTransform(213.6,188.5,0.2463,0.2463,0,0,0,125,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(456.7,351.3,-211.29999999999998,-125.70000000000002);
// library properties:
lib.properties = {
	id: '95A39D612192444B871BFED45EFD73D8',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['95A39D612192444B871BFED45EFD73D8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;