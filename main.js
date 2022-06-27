
var canvas = new fabric.canvas ("MyCanvas");
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
fabric.Image.FromURL (get_image, function (Img){
	block_Image_object.scaleToWidth (blockImageWidth)
	block_Image_object.scaleToHeight (blockImageHeight)
	block_Image_object.set({
		top:block_y
		left:block_X
	});
canvas.add (block_image)
})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
  { 
	  new_image('rr1.png');
	  console.log ("r")
	e
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	// enviar ranger índigo
	}
	
}

