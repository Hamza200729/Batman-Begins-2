class Drops{
	constructor(x,y,r){
		var options={
			isStatic:false,
			friction:0.1,
			}
			
		this.body = Bodies.circle(this.x , this.y,(this.r)/2,options);
		this.x=x;
		this.y=y;
		this.r=r;

		World.add(world, this.body);

		}

	display(){
			var pos =this.body.position;
			push()
			translate(pos.x, pos.y);
			
            fill("blue");
            ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

