var click=false;
var getcol = new move();
var numofraws = 10;
var numofcols = 5;
var GameOver;
var raws = new Array(numofraws);
var circles = new Array(numofraws+1);
//var hdiv = playground.height/15;
function circle()
	{
	var hdiv = 10;//playground.height/15;
	var W = 300;//playground.width;
	r=hdiv/2;
	//alert(W);
	pcenterY = r;
	pcenterX = W/2 - 7*r;
	this.prop = {x: pcenterX, y: pcenterY, color: '#8e8c89', bool: false,i: 2,j: 2,id: 6};
	
	}
for (var i = 0; i < numofraws+1; i++) 
 	{
	circles[i] = new Array(numofcols);
  	}
var randnum;
for(kk=0;kk<numofraws+1;kk++)
	{
	for(hh=0;hh<numofcols;hh++)
 		{
 		circles[kk][hh]=new circle();
 		}
	}
function init()
	{
	GameOver = false;
	for (var i = 0; i < numofraws; i++) 
	 	{
		raws[i] = new raw(i);
	  	}
	for(kk=0;kk<numofraws+1;kk++)
		{
		for(hh=0;hh<numofcols;hh++)
	 		{
	 		circles[kk][hh]=new circle();
	 		}
		}
	
	/*digits = [1,2,3,4,5,6,7]
	len = 5
	num = 0
	while(len--)
		num = num * 10 + digits[Math.floor(Math.random() * digits.length)]
	alert(num);*/
	var str = '';
	for (var i=0; i<4; i++) {
	  str += Math.floor(Math.random()*6) + 1;
	}
	randnum = parseInt(str);
	
	//alert(randnum);
	drawboard1();
	var canid=document.getElementById("playground");
	canid.addEventListener("mousedown",cordinate,false);
	canid.addEventListener("mousemove",cord,false,circles);
    }
function check()
	{//function to check the color is right cell
	// and change the id and col of small circle
	
	}

function raw(r)
	{
	this.arr = new Array(4);
	this.bool = false;
	if(r==0)
		this.bool = true;
	for(i=0;i<4;i++)
		{
		this.arr[i] = {color:'#8e8c89', rad: 1.5 , id: i,colid: 0 };
		
		}	
	
	}
function move()
	{
	this.color = "#fff"
	}
function cordinate(event)
	{
	//if(click==false) click=true;else click=false;
    var rect = playground.getBoundingClientRect();
    xPos=(event.pageX-rect.left)*298.5/760;
    yPos=(event.pageY-rect.top)*150/617;
   	if(!GameOver)
    getarea(xPos,yPos);
    //alert("x= "+xPos+"y="+yPos);
    //alert(randnum);
    }
function cord(event)
	{
	
    var rect = playground.getBoundingClientRect();
    xPos=(event.pageX-rect.left)*298.5/760;
    yPos=(event.pageY-rect.top)*150/617;
    if(click)
    	{
    	
		drawboard();
    	var canid=document.getElementById("playground");
		var canobj=canid.getContext("2d");
		canobj.fillStyle=getcol.color;
    	canobj.beginPath();
		canobj.arc(xPos,yPos,5,0,2*Math.PI);
		canobj.fill();
		canobj.closePath();
		canobj.stroke();
		//alert("x= "+xPos+"y="+yPos);
    	}
    
    }
function getcolor(i)
	{
	if(i==0)
		k="#f00";
	else if(i==1)
		k="#0f0";
	else if(i==2)
		k="#00f";
	else if(i==3)
		k="#ff0";
	else if(i==4)
		k="#0ff";
	else if(i==5)
		k="#f0f";
	else
		k='#8e8c89';
	return k;
	}
function getid(color)
	{
	if(color=="#f00")
		k=0;
	else if(color=="#0f0")
		k=1;
	else if(color=="#00f")
		k=2;
	else if(color=="#ff0")
		k=3;
	else if(color=="#0ff")
		k=4;
	else if(color=="#f0f")
		k=5;
	else
		k=6;
	return k;
	}

function getarea(x,y)
	{
	if(click==false) click=true;else click=false;
	var canid=document.getElementById("playground");
	var canobj=canid.getContext("2d");
	//canobj.clearRect(0, 0, playground.width, playground.height);
	var hdiv = playground.height/15;
	var W = playground.width;
	r=hdiv/2;
	pcenterY = r;
	pradius = r;
	pcenterX = W/2 - 7*r;
	pcenterY = pcenterY - r/4;
	for(i=0;i<numofraws;i++)
		{
		pcenterX = W/2 - 7*r;
		pcenterY = pcenterY+10*r/4;
		for(j=0;j<numofcols;j++)
			{
			pcenterX += 11*r/4;
			if (j==numofcols-1 && i>=2 && i<8)
				{
				pcenterX = 11*r/4+ W/2 - 13*r;
				k = getcolor(i-2)
				//alert(getcol.color);
				if((pcenterX+r > x && pcenterX-r < x) && (pcenterY+r > y && pcenterY-r < y))
					{
					
					if(click)
						{
						//getcol.color=k;
						
						getcol.color = circles[i][numofcols-1].prop.color;
						
						}
					drawboard();
					return;
					
					}
				else
					{
					//circles[i][j] ='#012345';
					}
				}
			else if(j!=numofcols-1)
				{
				if((pcenterX+r > x && pcenterX-r < x) && (pcenterY+r > y && pcenterY-r < y))
					{
					//
					if(click){
						if(circles[i][j].prop.bool)
							getcol.color = circles[i][j].prop.color;
						else//to avoid move from null space(except circle) invisible @starting
							click=false;
						//k='#ff2345';
						//getcol.color=k;
						}
					else
						{
						if(raws[i].bool==true)
							{
							circles[i][j].prop.bool = true;
							circles[i][j].prop.color = getcol.color;
							circles[i][j].prop.id = getid(circles[i][j].prop.color);
							//alert(circles[i][j].prop.id);
							check(i);
							}
						else
							click =true;
						
						}
						
					drawboard();
					return;
					}
				}
			
			}
		
		}
		
		if(click==false) click=true;else click=false;//to avoid move from null space(except circle)
		drawboard();
	}
function check(i)
	{
	cc=false;
    GameOver = false;
    win = false;
	for(j=0;j<numofcols-1;j++)
		{
		if(circles[i][j].prop.bool == false)
			cc=true;
		}
	if(!cc)
		{
		//alert(randnum);
		black=0;
		white=0;
		array = new Array(4);
		array[0]=(randnum-randnum%1000)/1000;
		array[1]=((randnum%1000)-(randnum%100))/100;
		array[2]=((randnum%100)-(randnum%10))/10;
		array[3]=randnum%10;
		
		g1=(randnum-randnum%1000)/1000;
		g2=((randnum%1000)-(randnum%100))/100;
		g3=((randnum%100)-(randnum%10))/10;
		g4=randnum%10;
		//alert(g1);	
		/*for(kk=0;kk<4;kK++)
			{
			if(array[kk]-1 == circles[i][kk].prop.id)
				{
				black+=1;
				white-=1;
				}
			}*/
		if(array[0]-1 == circles[i][0].prop.id)
				{
				black+=1;
				white-=1;
				}
		if(array[1]-1 == circles[i][1].prop.id)
				{
				black+=1;
				white-=1;
				}
		if(array[2]-1 == circles[i][2].prop.id)
				{
				black+=1;
				white-=1;
				}
		if(array[3]-1 == circles[i][3].prop.id)
				{
				black+=1;
				white-=1;
				}
		for(k=0;k<4;k++)
			{
			if(circles[i][k].prop.id == array[0]-1){white+=1;array[0]=10;}
			else if(circles[i][k].prop.id == array[1]-1){white+=1;array[1]=10;}
			else if(circles[i][k].prop.id == array[2]-1){white+=1;array[2]=10;}
			else if(circles[i][k].prop.id == array[3]-1){white+=1;array[3]=10;}
			}
		//alert(black);
		if(black==4)
			{
			GameOver=true;
			win=true;
			}
		for(k=0;k<4;k++)
			{
			if(black!=0)
				{
				
				raws[i].arr[k].color ="#000";
				black -=1;
				}
			else if(white!=0)
				{
				raws[i].arr[k].color ="#fff";
				white -=1;
				}
			}
		raws[i].bool=false;
		if(i==9)
			GameOver=true;
		else
			raws[i+1].bool=true;
		if(GameOver)
			{
			if(win == true)
				alert("Win");
			else
				alert("Game Over  :)");
			circles[10][0].prop.color =getcolor(g1-1);
			circles[10][1].prop.color =getcolor(g2-1);
			circles[10][2].prop.color =getcolor(g3-1);
			circles[10][3].prop.color =getcolor(g4-1);
			}
			
		}
	}
function drawboard()
	{
	
	var canid=document.getElementById("playground");
	var canobj=canid.getContext("2d");
	var hdiv = playground.height/15;
	canobj.clearRect(0, 0, playground.width, playground.height);
	var W = playground.width;
	r=hdiv/2;
	pcenterY = r;
	pradius = r;
	pcenterX = W/2 - 7*r;
	pcenterY = pcenterY-r/4;
	canobj.fillStyle='#8e8c89';
	canobj.strokeStyle = '#000';
	for(i=0;i<numofraws+1;i++)
		{
		pcenterX = W/2 - 7*r;
		pcenterY = pcenterY+10*r/4;
		if (i==10)
			pcenterY = pcenterY+2*r/4;
		canobj.strokeStyle = '#000';
		for(j=0;j<numofcols;j++)
			{ 
			if(j==numofcols-1&& i<10 && pcenterX != 11*r/4 + W/2 - 13*r)
				{
				pcenterX += 11*r/4;
				smallx = pcenterX;
				smally = pcenterY;
				smally += r/2.5;
				smallx += 6*r/2;
				for(k=0;k<4;k++)
					{
					if(k==1)
						smallx -= 3*r/2;
					if(k==2)
						smally -= 3*r/3;
					if(k==3)
						smallx += 3*r/2;
					canobj.fillStyle = raws[i].arr[k].color;
					canobj.beginPath();
					canobj.arc(smallx,smally,raws[i].arr[k].rad,0,2*Math.PI);
					canobj.fill();
					canobj.closePath();
					canobj.stroke();
					}
				
				}
			if (j==numofcols-1 && i>=2 && i<8 && pcenterX > W/2)
				{
				pcenterX = W/2 - 13*r;
				
				canobj.fillStyle= circles[i][numofcols-1].prop.color;	
				pcenterX += 11*r/4;
				canobj.beginPath();
				canobj.arc(pcenterX,pcenterY,pradius,0,2*Math.PI);
				canobj.fill();
				canobj.closePath();
				canobj.stroke();
				}
			
			else if(j!=numofcols-1)
				{
				canobj.fillStyle= circles[i][j].prop.color;
				pcenterX += 11*r/4;
				canobj.beginPath();
				canobj.arc(pcenterX,pcenterY,pradius,0,2*Math.PI);
				canobj.fill();
				canobj.closePath();
				canobj.stroke();
				}
			
			}
		
		}
	}
function drawboard1()
	{
	
	var canid=document.getElementById("playground");
	var canobj=canid.getContext("2d");
	canobj.clearRect(0, 0, playground.width, playground.height);
	var hdiv = playground.height/15;
	var W = playground.width;
	r=hdiv/2;
	pcenterY = r;
	pradius = r;
	pcenterX = W/2 - 7*r;
	pcenterY = pcenterY - r/4;
	canobj.fillStyle='#8e8c89';
	canobj.strokeStyle = '#000';
	for(i=0;i<numofraws+1;i++)
		{
		pcenterX = W/2 - 7*r;
		pcenterY = pcenterY+10*r/4;
		if (i==10)
			pcenterY = pcenterY+2*r/4;
		canobj.fillStyle='#8e8c89';
		canobj.lineWidth = 0.2;
		canobj.strokeStyle = '#000';
		for(j=0;j<numofcols-1;j++)
			{
			pcenterX += 11*r/4;
			canobj.beginPath();
			canobj.arc(pcenterX,pcenterY,pradius,0,2*Math.PI);
			canobj.fill();
			canobj.closePath();
			canobj.stroke();//to draw circumference.
			circles[i][j].prop = {x: pcenterX, y: pcenterY, color: '#8e8c89', bool: false,i: i,j: j,id: 6};
			if(j==numofcols-2&& i<10 && pcenterX != 11*r/4 + W/2 - 13*r)
				{
				pcenterX += 11*r/4;
				smallx = pcenterX;
				smally = pcenterY;
				smally += r/2.5;
				smallx += 6*r/2;
				for(k=0;k<4;k++)
					{
					if(k==1)
						smallx -= 3*r/2;
					if(k==2)
						smally -= 3*r/3;
					if(k==3)
						smallx += 3*r/2;
					canobj.fillStyle = raws[i].arr[k].color;
					canobj.beginPath();
					canobj.arc(smallx,smally,raws[i].arr[k].rad,0,2*Math.PI);
					canobj.fill();
					canobj.closePath();
					canobj.stroke();
					}
				
				}
			if (j==numofcols-2 && i>=2 && i<8 && pcenterX > W/2)
				{
				
				
				pcenterX = W/2 - 13*r;
				k = getcolor(i-2)
				
					
				circles[i][numofcols-1].prop = {x: pcenterX, y: pcenterY, color: k, bool: false,i: i,j: numofcols-1,id: i-2};
				canobj.fillStyle=k;
				
				j=numofcols-3;
				}
			}
		
		}
	}

