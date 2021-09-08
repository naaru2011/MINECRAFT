var canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 500;
player_y = 300;

var player_object = "";
var block_image_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);
    });
    }


    
function new_image(get_image) {
fabric.Image.fromURL(get_image, function(Img){
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top: player_y,
        left: player_x,
    });
    canvas.add(block_image_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

if (keyPressed == "80" && e.shiftKey == true) {
    block_image_height = block_image_height + 10;
    block_image_width = block_image_width + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
    console.log("p and shift key have been pressed together.");    
}
if (keyPressed == "77" && e.shiftKey == true) {
  block_image_height = block_image_height - 10;
  block_image_width = block_image_width - 10;
  document.getElementById("current_height").innerHTML = block_image_height;
  document.getElementById("current_width").innerHTML = block_image_width;  
  console.log("m and shift key have been pressed together.");
}
if (keyPressed == "38") {
up();
console.log("up arrow has been pressed.");
}
if (keyPressed == "40") {
down();
console.log("down arrow has been pressed.");
}
if (keyPressed == "37") {
    left();
    console.log("left arrow has been pressed");
}
if (keyPressed == "39") {
right();
console.log("right arrow has been pressed");   
}
if (keyPressed == "87") {
new_image("wall.jpg");
console.log("w key has been clicked");    
}
if (keyPressed == "71") {
new_image("ground.png");
console.log("g key has been clicked");    
}
if (keyPressed == "76") {
    new_image("light_green.png");
    console.log("L key has been clicked");    
    }
    if (keyPressed == "84") {
        new_image("trunk.jpg");
        console.log("T key has been clicked");    
        }
        if (keyPressed == "82") {
            new_image("roof.jpg");
            console.log("R key has been clicked");    
            }
            if (keyPressed == "89") {
                new_image("yellow_wall.png");
                console.log("y key has been clicked");    
                }
                if (keyPressed == "68") {
                    new_image("dark_green.png");
                    console.log("d key has been clicked");    
                    }
                    if (keyPressed == "85") {
                        new_image("unique.png");
                        console.log("u key has been clicked");    
                        }
                        if (keyPressed == "67") {
                            new_image("cloud.png");
                            console.log("c key has been clicked");    
                            }
                            if (keyPressed == "66") {
                             new_image("bed.JPG");
                             console.log("b key has been clicked");   
                            }
                            if (keyPressed == "70") {
                                new_image("dor.JPG");
                                console.log("f key has been clicked");   
                               }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        console.log("block image height = " + block_image_height);
        console.log("when up arrow is clicked, x = " + player_x + "and y = " + player_y);
        player_update();
    }
}
function down() {
    if (player_y <= 550) {
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        console.log("block image height = " + block_image_height);
        console.log("when down arrow is clicked, x = " + player_x + "and y = " + player_y);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        console.log("block image width = " + block_image_width);
        console.log("when left arrow is clicked, x = " + player_x + "and y = " + player_y);
        player_update();
    }
}
function right() {
    if (player_x <= 800) {
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        console.log("block image width = " + block_image_width);
        console.log("when up arrow is clicked, x = " + player_x + "and y = " + player_y);
        player_update();
    }
}
