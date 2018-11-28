

 /**
  * @author James Condon
	* @studentId c00207200
	* Gesture Manager
	*/
var gameNs = {};
var app = {};

function main(){
	initCanvas();
	var game = new Game();
	gameNs.game = game;
	game.initWorld();
	game.update();
}
/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
function initCanvas(){
	// Use the document object to create a new element canvas.
	var canvas = document.createElement("canvas");
	// Assign the canvas an id so we can reference it elsewhere.
	canvas.id = 'mycanvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// We want this to be a 2D canvas.
	app.ctx = canvas.getContext("2d");
	// Adds the canvas element to the document.
	document.body.appendChild(canvas);
}
