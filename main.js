canvas=document.getElementById("Olymlogo");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle ="pink";
ctx.lineWidth=2;
ctx.rect(50,50,790,500);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.lineWidth=5;
ctx.arc(250,210,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.lineWidth=5;
ctx.arc(400,210,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth=5;
ctx.arc(550,210,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.lineWidth=5;
ctx.arc(325,305,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green";
ctx.lineWidth=5;
ctx.arc(480,305,70,0,2*Math.PI);
ctx.stroke();