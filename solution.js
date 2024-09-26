function Stacker(){

var
EMPTY = 0,
WALL = 1,
BLOCK = 2,
GOLD = 3;

var moveorder = [];


var grid = new Array(35), visited = new Array(35), curpos = [17, 17];
for(let i = 0;i<35;i++){
	grid[i] = new Array(35);
	for(let j = 0;j<35;j++){

		grid[i][j] = [WALL, undefined];
	}
	visited[i] = new Array(35).fill(false);
}

// Booleans
var towerFound = false; 
var stage2 = false; 
var stage3 = false;
var holdingBlock = false;

// Arrays
var tower = undefined; 
var targets = undefined; 
var cur_targets = undefined; 


function encircleTower(direction_of_tower) {
    const directions = {
        "down": ["right", "down", "down", "left", "left", "up"],
        "up": ["right", "up", "up", "left", "left", "down"],
        "left": ["up", "left", "left", "down", "down", "right"],
        "right": ["down", "right", "right", "up", "up", "left"]
    };
    return directions[direction_of_tower] || [];
}


// Replace this with your own wizardry
this.turn = function(cell){

	visited[curpos[0]][curpos[1]] = true;

	grid[curpos[0]][curpos[1]] = [cell.type, cell.level];
	grid[curpos[0]-1][curpos[1]] = [cell.up.type, cell.up.level];
	grid[curpos[0]+1][curpos[1]] = [cell.down.type, cell.down.level];
	grid[curpos[0]][curpos[1]+1] = [cell.right.type, cell.right.level];
	grid[curpos[0]][curpos[1]-1] = [cell.left.type, cell.left.level];

	


	// Pick an action randomly
	var n = Math.random() * 6 >> 0;
	if (n === 0) return "left";
	if (n === 1) return "up";
	if (n === 2) return "right";
	if (n === 3) return "down";
	if (n === 4) return "pickup";
	if (n === 5) return "drop";
};

// More wizardry here

}
