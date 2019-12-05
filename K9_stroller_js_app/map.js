let ctx = null;
var gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 2, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 2, 2, 1, 1, 0, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
	0, 2, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 2, 2, 1, 1, 0, 4, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 3, 0,
	0, 2, 4, 4, 3, 1, 1, 1, 2, 2, 2, 2, 3, 1, 0, 2, 2, 2, 2, 1, 1, 0, 4, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 3, 0,
	0, 2, 4, 4, 3, 1, 1, 1, 2, 3, 3, 3, 3, 1, 0, 1, 0, 0, 0, 1, 1, 0, 4, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 3, 0,
	0, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0,
	0, 2, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0,
	0, 2, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0,
	0, 2, 1, 1, 1, 2, 4, 4, 4, 4, 4, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 9, 0,
	0, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 3, 3, 2, 4, 4, 4, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 9, 0,
	0, 2, 1, 1, 1, 4, 4, 4, 4, 4, 4, 9, 1, 1, 1, 1, 3, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 9, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 3, 3, 3, 2, 4, 4, 4, 4, 4, 4, 9, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 1, 1, 3, 2, 4, 4, 4, 4, 4, 4, 9, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 9, 1, 3, 2, 4, 4, 4, 4, 4, 4, 9, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 9, 1, 3, 2, 4, 4, 4, 4, 4, 4, 9, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 9, 1, 3, 2, 4, 4, 1, 2, 1, 4, 9, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 2, 6, 6, 6, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 9, 1, 3, 2, 4, 4, 1, 2, 1, 4, 9, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 2, 6, 6, 6, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 9, 1, 3, 2, 4, 4, 1, 2, 1, 4, 9, 1, 1, 1, 1, 1, 6, 4, 4, 2, 6, 6, 6, 6, 1, 1, 1, 2, 4, 4, 4, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 9, 1, 3, 2, 4, 4, 1, 2, 1, 4, 9, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 4, 1, 9, 1, 1, 1, 2, 4, 4, 4, 0, 1, 1, 1, 0, 2, 9, 0,
	0, 9, 1, 3, 2, 4, 4, 1, 2, 1, 4, 4, 4, 4, 4, 4, 9, 2, 4, 4, 4, 4, 4, 1, 9, 2, 2, 2, 2, 4, 4, 4, 0, 1, 6, 6, 6, 6, 9, 0,
	0, 9, 1, 3, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 9, 1, 4, 4, 4, 4, 4, 1, 9, 1, 1, 1, 2, 4, 4, 4, 0, 1, 1, 1, 9, 1, 1, 0,
	0, 9, 1, 3, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4, 4, 4, 4, 4, 1, 9, 1, 1, 1, 2, 4, 4, 4, 0, 1, 1, 1, 9, 1, 1, 0,
	0, 9, 1, 3, 2, 4, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 9, 2, 4, 4, 4, 4, 4, 1, 9, 1, 1, 1, 2, 4, 4, 4, 0, 1, 1, 1, 9, 1, 1, 0,
	0, 9, 1, 3, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1, 9, 1, 4, 4, 4, 4, 4, 1, 9, 1, 1, 1, 2, 4, 4, 4, 0, 1, 1, 1, 9, 1, 1, 0,
	0, 9, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 9, 1, 1, 3, 1, 1, 1, 3, 9, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 9, 1, 1, 0,
	0, 9, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 9, 1, 1, 0,
	0, 9, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 9, 1, 1, 0,
	0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 9, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 9, 1, 1, 0,
	0, 1, 1, 1, 2, 1, 3, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 9, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 9, 6, 1, 0,
	0, 3, 3, 3, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 9, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 9, 1, 0,
	0, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 9, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 4, 4, 4, 4, 4, 2, 4, 9, 1, 0,
	0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 4, 4, 4, 4, 4, 2, 2, 2, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 2, 2, 0,
	0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 9, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 4, 1, 2, 0,
	0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 9, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 3, 3, 4, 4, 4, 4, 4, 1, 4, 4, 2, 0,
	0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 9, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 3, 1, 4, 4, 4, 4, 4, 1, 1, 1, 2, 0,
	0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 9, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 0,
	0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 9, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

];
var tileW = 20, tileH = 20;
var mapW = 40, mapH = 40;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0; score = 0

var tileset = null, tilesetURL = "/Users/Owner/Desktop/k9stroller/K9_stroller_js_app/tileset.png", tilesetLoaded = false;

var floorTypes = {
	solid	: 0,
	path	: 1,
	water	: 2,
	ice		: 3,
	conveyorU	: 4,
	conveyorD	: 5,
	conveyorL	: 6,
	conveyorR	: 7

};
var tileTypes = {
	0 : { colour:"#685b48", floor:floorTypes.solid, sprite:[{x:0,y:0,w:40,h:40}]	},
	1 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:40,y:0,w:40,h:40}]	},
	2 : { colour:"#e8bd7a", floor:floorTypes.path,	sprite:[{x:80,y:0,w:40,h:40}]	},
	3 : { colour:"#286625", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	},
	4 : { colour:"#678fd9", floor:floorTypes.water,	sprite:[
		{x:160,y:0,w:40,h:40,d:200}, {x:200,y:0,w:40,h:40,d:200},
		{x:160,y:40,w:40,h:40,d:200}, {x:200,y:40,w:40,h:40,d:200},
		{x:160,y:40,w:40,h:40,d:200}, {x:200,y:0,w:40,h:40,d:200}
	]},
	5 : { colour:"#eeeeff", floor:floorTypes.ice,	sprite:[{x:120,y:120,w:40,h:40}]},
	6 : { colour:"#cccccc", floor:floorTypes.conveyorL,	sprite:[
			{x:0,y:40,w:40,h:40,d:200}, {x:40,y:40,w:40,h:40,d:200},
			{x:80,y:40,w:40,h:40,d:200}, {x:120,y:40,w:40,h:40,d:200}
		]},
	7 : { colour:"#cccccc", floor:floorTypes.conveyorR,	sprite:[
			{x:120,y:80,w:40,h:40,d:200}, {x:80,y:80,w:40,h:40,d:200},
			{x:40,y:80,w:40,h:40,d:200}, {x:0,y:80,w:40,h:40,d:200}
		]},
	8 : { colour:"#cccccc", floor:floorTypes.conveyorD,	sprite:[
			{x:160,y:200,w:40,h:40,d:200}, {x:160,y:160,w:40,h:40,d:200},
			{x:160,y:120,w:40,h:40,d:200}, {x:160,y:80,w:40,h:40,d:200}
		]},
	9 : { colour:"#cccccc", floor:floorTypes.conveyorU,	sprite:[
			{x:200,y:80,w:40,h:40,d:200}, {x:200,y:120,w:40,h:40,d:200},
			{x:200,y:160,w:40,h:40,d:200}, {x:200,y:200,w:40,h:40,d:200}
		]}
};

var directions = {
	up		: 0,
	right	: 1,
	down	: 2,
	left	: 3
};


var keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
};

var viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};

var player = new Character();

function Character()
{
	this.tileFrom	= [1,1];
	this.tileTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [30,30];
	this.position	= [45,45];
	this.delayMove	= 50;
	this.direction	= directions.up;

	this.sprites = {};
	this.sprites[directions.up]		= [{x:0,y:120,w:30,h:30}];
	this.sprites[directions.right]	= [{x:0,y:150,w:30,h:30}];
	this.sprites[directions.down]	= [{x:0,y:180,w:30,h:30}];
	this.sprites[directions.left]	= [{x:0,y:210,w:30,h:30}];
}
Character.prototype.placeAt = function(x, y)
{
	this.tileFrom	= [x,y];
	this.tileTo		= [x,y];
	this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
		((tileH*y)+((tileH-this.dimensions[1])/2))];
};
Character.prototype.processMovement = function(t)
{
	if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

	if((t-this.timeMoved)>=this.delayMove)
	{
		this.placeAt(this.tileTo[0], this.tileTo[1]);

		var tileFloor = tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor;

		if(tileFloor==floorTypes.ice)
		{
			if(this.canMoveDirection(this.direction))
			{
				this.moveDirection(this.direction, t);
			}
		}
		else if(tileFloor==floorTypes.conveyorL && this.canMoveLeft())	{ this.moveLeft(t); }
		else if(tileFloor==floorTypes.conveyorR && this.canMoveRight()) { this.moveRight(t); }
		else if(tileFloor==floorTypes.conveyorU && this.canMoveUp())	{ this.moveUp(t); }
		else if(tileFloor==floorTypes.conveyorD && this.canMoveDown())	{ this.moveDown(t); }
	}
	else
	{
		this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

		if(this.tileTo[0] != this.tileFrom[0])
		{
			var diff = (tileW / this.delayMove) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
		}
		if(this.tileTo[1] != this.tileFrom[1])
		{
			var diff = (tileH / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
		score ++;
	}

	return true;
}

Character.prototype.canMoveTo = function(x, y)
{
	if(tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.path &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.ice &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.conveyorU &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.conveyorD &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.conveyorL &&
		tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.conveyorR) { return false; }
	return true;
};
Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };

Character.prototype.canMoveDirection = function(d) {
	switch(d)
	{
		case directions.up:
			return this.canMoveUp();
		case directions.down:
			return this.canMoveDown();
		case directions.left:
			return this.canMoveLeft();
		default:
			return this.canMoveRight();
	}
};

Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };

Character.prototype.moveDirection = function(d, t) {
	switch(d)
	{
		case directions.up:
			return this.moveUp(t);
		case directions.down:
			return this.moveDown(t);
		case directions.left:
			return this.moveLeft(t);
		default:
			return this.moveRight(t);
	}
};

function toIndex(x, y)
{
	return((y * mapW) + x);
}

function getFrame(sprite, duration, time, animated)
{
	if(!animated) { return sprite[0]; }
	time = time % duration;

	for(x in sprite)
	{
		if(sprite[x].end>=time) { return sprite[x]; }
	}
}

let canvasDrawing = function()
{
	let canvas = document.createElement("canvas")
        canvas.id = "game";
        canvas.width = 800;
		canvas.height = 800;
	body.append(canvas)	
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	window.addEventListener("keydown", function(e) {
		e.preventDefault()
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		e.preventDefault()
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
	});

	viewport.screen = [document.getElementById('game').width,
		document.getElementById('game').height];
		
};

let timeLeft = 15;

loadTile = function()
{
tileset = new Image();
	tileset.onerror = function()
	{
		ctx = null;
		alert("Failed loading tileset.");
	};
	tileset.onload = function() { tilesetLoaded = true; };
	tileset.src = tilesetURL;

	for(x in tileTypes)
	{
		tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;

		if(tileTypes[x].animated)
		{
			var t = 0;
			
			for(s in tileTypes[x].sprite)
			{
				tileTypes[x].sprite[s]['start'] = t;
				t+= tileTypes[x].sprite[s].d;
				tileTypes[x].sprite[s]['end'] = t;
			}

			tileTypes[x]['spriteDuration'] = t;
		}
	}
}

function drawGame()
{
	loadTile()
	
	if(ctx==null) { return; }
	if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

	var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;
	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	if(!player.processMovement(currentFrameTime))
	{
		if(keysDown[38] && player.canMoveUp())		{ player.moveUp(currentFrameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(currentFrameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(currentFrameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(currentFrameTime); }
	}

	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
			var tile = tileTypes[gameMap[toIndex(x,y)]];
			var sprite = getFrame(tile.sprite, tile.spriteDuration,
				currentFrameTime, tile.animated);
			ctx.drawImage(tileset,
				sprite.x, sprite.y, sprite.w, sprite.h,
				viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
				tileW, tileH);
		}
	}

	var sprite = player.sprites[player.direction];
	ctx.drawImage(tileset,
		sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
		viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);

	ctx.fillStyle = "#ff0000";
	ctx.fillText("Score: " + score, 10, 20);
	ctx.fillText("Time Left: " + timeLeft, 10, 40);

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
