class DustBin{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.DustBinWidth=200
		this.DustBinHeight=100
		this.wallThickness=20
		this.angle=0
		this.BottomBody=Bodies.rectangle(this.x,this.y,this.DustBinWidth,this.wallThickness,{isStatic:true})
		this.LeftWallBody=Bodies.rectangle(this.x-this.DustBinWidth/2,this.y-this.DustBinHeight/2,this.wallThickness,this.DustBinHeight,{isStatic:true})
		Matter.Body.setAngle(this.LeftWallBody,this.angle)
		this.RightWallBody=Bodies.rectangle(this.x+this.DustBinWidth/2,this.y-this.DustBinHeight/2,this.wallThickness,this.DustBinHeight,{isStatic:true})
		Matter.Body.setAngle(this.RightWallBody,-1*this.angle)
		World.add(world,this.BottomBody)
		World.add(world,this.LeftWallBody)
		World.add(world,this.RightWallBody)
	}
	display(){
		var PosBottom=this.BottomBody.position
		var PosLeft=this.LeftBody.position
		var PosRight=this.RightBody.position
		push();
		translate(PosBottom.x,PosBottom.y)
		rectMode(CENTER)
		stroke(255)
		angleMode(RADIANS)
		fill(255)
		rect(0,0,this.DustBinWidth,this.wallThickness)
		pop();

		push();
		translate(PosLeft.x,PosLeft.y)
		rectMode(CENTER)
		stroke(255)
		angleMode(RADIANS)
		fill(255)
		rotate(this.angle)
		rect(0,0,this.wallThickness,this.DustBinHeight)
		pop();

		push();
		translate(PosRight.x,PosRight.y)
		rectMode(CENTER)
		stroke(255)
		angleMode(RADIANS)
		fill(255)
		rotate(-1*this.angle)
		rect(0,0,this.wallThickness,this.DustBinHeight)
		pop();
	}
}