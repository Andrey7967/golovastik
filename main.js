let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");
let fpsCounter = document.getElementById("counterFPS");
canvas.width=1000;
canvas.height=1000;
let scale = 1;
ctx.lineWidth= 2;

let head = new Image();
head.src = "tadpole.png";


class Target {
    x;
    y;
}
class Reptile {
    timeFraction = 0;
    x;
    y;
    neighbor;
    current;
    Segments = [];
    constructor(x,y) {
        this.x =x;
        this.y = y; 
    }
    draw() {
        ctx.strokeStyle = "rgb(255,255,255)";
        ctx.fillStyle = "rgb(255,255,255)";
        // ctx.fillRect(this.x * scale,this.y * scale,5 * scale ,5 * scale);
        if(this.Segments.length != 0) {
            
            ctx.beginPath();
            ctx.moveTo((this.x+2 )* scale, (this.y+2)*scale);
            ctx.lineTo((this.Segments[0].x +2) * scale,(this.Segments[0].y +2) * scale);
                  
            ctx.stroke();
            ctx.closePath();
   
            // ctx.fillRect(this.Segments[0].x * scale,this.Segments[0].y* scale,5 * scale ,5 * scale);
        }
        for(let i=1;i<this.Segments.length;i++) {
            let seg = this.Segments[i];
            let segpre = this.Segments[i-1];
            ctx.beginPath();
            ctx.moveTo((segpre.x+2 )* scale, (segpre.y+2)*scale);
            ctx.lineTo((seg.x +2) * scale,(seg.y +2) * scale);
            ctx.stroke();
            ctx.closePath();
          
          
      
    
            
        }
        let cosHead= (cursor.x-x1.Segments[x1.Segments.length-1].x)/Math.sqrt((x1.Segments[x1.Segments.length-1].x-cursor.x)**2 + (x1.Segments[x1.Segments.length-1].y-cursor.y)**2);
        let sinHead = (cursor.y-x1.Segments[x1.Segments.length-1].y)/Math.sqrt((x1.Segments[x1.Segments.length-1].x-cursor.x)**2 + (x1.Segments[x1.Segments.length-1].y-cursor.y)**2);
        
        ctx.save();
        ctx.translate(this.Segments[this.Segments.length-1].x,this.Segments[this.Segments.length-1].y );

        if(sinHead<0) {
            
            ctx.rotate(Math.PI/2+-Math.acos(cosHead));
           
            
        }  else {
            ctx.rotate(Math.PI/2+Math.acos(cosHead));
        }
        
        
        ctx.drawImage(head,-9.5,-33,head.width/5,head.height/5);
        ctx.restore();
      
        
    }
    follow(target,targetMove) {
        
        let cos = (this.Segments[0].x-target.x)/Math.sqrt((this.Segments[0].x-target.x)**2 + (this.Segments[0].y-target.y)**2);
        let sin = (this.Segments[0].y-target.y)/Math.sqrt((this.Segments[0].x-target.x)**2 + (this.Segments[0].y-target.y)**2); 
        this.x = this.Segments[0].x + cos * 2;
        this.y = this.Segments[0].y + sin * 2;
        if(Math.abs( this.Segments[this.Segments.length-1].x - targetMove.x) > 20.001) {
            if( this.Segments[this.Segments.length-1].x > targetMove.x) {
                this.Segments[this.Segments.length-1].x-=80 * this.timeFraction;
            } else {
                this.Segments[this.Segments.length-1].x+=80 * this.timeFraction;
            }
        }
        if(Math.abs( this.Segments[this.Segments.length-1].y - targetMove.y) > 20.001) {
            if( this.Segments[this.Segments.length-1].y > targetMove.y) {
                this.Segments[this.Segments.length-1].y-=80* this.timeFraction;
            } else {
                this.Segments[this.Segments.length-1].y+=80* this.timeFraction;
            }
        }
        
    }
    segmentsFollow(target) {
        for(let i=0;i<this.Segments.length-1;i++) {
            let cos = (this.Segments[i+1].x-target.x)/Math.sqrt((this.Segments[i+1].x-target.x)**2 + (this.Segments[i+1].y-target.y)**2);
            let sin = (this.Segments[i+1].y-target.y)/Math.sqrt((this.Segments[i+1].x-target.x)**2 + (this.Segments[i+1].y-target.y)**2); 
            this.Segments[i].x = this.Segments[i+1].x + cos * 2;
            this.Segments[i].y = this.Segments[i+1].y + sin * 2;
    }
} 
 
    addSegment(x,y) {
        this.Segments.push(new Reptile(x,y));
        this.draw();
    }
}

let bias = 8;
let x1=  new Reptile(20,20);
let cursor = new Target(0,0);
x1.addSegment(20,40);
x1.addSegment(20,60);
x1.addSegment(20,80);
x1.addSegment(20,60);
x1.addSegment(20,80);
x1.addSegment(20,60);
x1.addSegment(20,80);
x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);x1.addSegment(20,60);
x1.addSegment(20,80);
x1.addSegment(80,80);
x1.addSegment(20,80);
x1.addSegment(20,80);
x1.addSegment(20,80);
x1.addSegment(20,80);
x1.addSegment(20,80);
x1.addSegment(20,80);
x1.addSegment(80,80);
x1.draw();



let fluctuation = {
    angle:0,
    x: cursor.x,
    y: cursor.y
};

let flag = 0;
let start = 0;
let last = 0;
let elapsed;
let c  =0;
function RenderGame(timestamp) {
    last = start;
    start = performance.now();
    elapsed = start-last;
    console.log(elapsed)
    if(fluctuation.angle > Math.PI/6) {
        flag = 1;
    } if(fluctuation.angle < -Math.PI/6) {
        flag= 0;
    }
    
    if(flag == 0 ) {
        fluctuation.angle+=6.6* x1.timeFraction;
    } else {
        fluctuation.angle-=8.6* x1.timeFraction;
    }

    let cosCursor= (cursor.x-x1.Segments[x1.Segments.length-1].x)/Math.sqrt((x1.Segments[x1.Segments.length-1].x-cursor.x)**2 + (x1.Segments[x1.Segments.length-1].y-cursor.y)**2);
    let sinCursor = (cursor.y-x1.Segments[x1.Segments.length-1].y)/Math.sqrt((x1.Segments[x1.Segments.length-1].x-cursor.x)**2 + (x1.Segments[x1.Segments.length-1].y-cursor.y)**2);
 
   
    fluctuation.x = x1.Segments[x1.Segments.length-1].x + 20*(cosCursor*Math.cos(fluctuation.angle) - sinCursor * Math.sin(fluctuation.angle));
    fluctuation.y = x1.Segments[x1.Segments.length-1].y+ 20*(sinCursor*Math.cos(fluctuation.angle) + Math.sin(fluctuation.angle) * cosCursor);
    
   
    x1.follow(fluctuation,cursor);
    x1.segmentsFollow(fluctuation);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    x1.draw();
    x1.timeFraction = elapsed/1000; 
    if(c==100) {
        fpsCounter.innerHTML = String(Math.round(1000/elapsed)) + " FPS";
        c=0;
    }
    
    c++;
    
    window.requestAnimationFrame(RenderGame);

}

window.requestAnimationFrame(RenderGame);



canvas.addEventListener('mousemove', () => {
   cursor.x = event.clientX;
   cursor.y = event.clientY;
  
})

