class treeObj{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.dustbinWidth=450;
        this.dustbinHeight=600;
        this.wallThickness=10;
        this.image=loadImage("images/tree.png")
        this.bottomBody=Bodies.rectangle(this.x,this.dustbinWidth,this.wallThickness,{isStatic:true})
        this.bottomBody=Bodies.rectangle(0,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight)
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness)

        World.add(world,this.bottomBody)
        World.add(world,this.leftWallBody)
        World.add(world,this.rightWallBody);
    }
    display()
    {
        var posBottom=this.bottomBody.position;
        Push()
        translate(posBottom.x,posBottom.y+10);
        fill(255)
        imageMode(CENTER);
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
        pop()
    }
}