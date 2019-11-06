document.getElementById('main').innerHTML = '<canvas width="1000" height="500" class="canvas"></canvas>';


const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let x0 = 300;
let y0 = 300;
let cube = {
    x : 0,
    y : 0,
    z : 0,

}


const change = () => {
     

    w = 0.52;
    cube.x = document.getElementById("myRangeX").value;
    cube.y = document.getElementById("myRangeY").value;
    cube.z = document.getElementById("myRangeZ").value;
    cube.x *= w;
    cube.y *= w;
    cube.z *= w;
    console.log(cube)
    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        //drawing face side
        ctx.lineTo(x0, y0-cube.y)
        ctx.lineTo((x0-cube.x),(y0 -cube.y - 0.3*cube.x));
        ctx.lineTo((x0-cube.x),y0 - 0.3*cube.x);
        ctx.lineTo(x0, y0);
        ctx.stroke();
        //drawing right side
        ctx.lineTo((x0+cube.z),y0 - 0.3*cube.z);
        ctx.lineTo((x0+cube.z), (y0 - 0.3*cube.z) - cube.y);
        ctx.lineTo((x0), y0-cube.y);
        ctx.stroke();
        //drawing top side
        ctx.moveTo((x0-cube.x),(y0 -cube.y - 0.3*cube.x));
        ctx.lineTo((x0-cube.x)+cube.z,(y0 - cube.y - 0.3*cube.z - 0.3*cube.x));
        ctx.lineTo((x0+cube.z), (y0 - 0.3*cube.z) - cube.y);
        ctx.stroke();
     
    }
    draw();

}


