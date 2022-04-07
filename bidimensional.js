var bit1=new Array(0,1,0,1,1,0,1,0);
var bit2=new Array(0,1,0,1,0,0,1,0);
var bit3=new Array(1,0,0,1,1,0,1,1);
var bit4=new Array(1,1,0,1,0,1,1,1);
var res=new Array;

var qtd=0;
var vl;

document.write("Valores dos bitdimensional <br>" + bit1 + "<br>" + bit2 + "<br>" + bit3 + "<br>" + bit4 + "<br><br>");

for(let i=0; i < bit1.length; i++){
   
    vl =bit1[i];
    if(vl == 1){
        qtd++

    }
}

qtd =qtd %2

if(qtd == 0){
    bit1.push(0);
}else{
    bit1.push(1);
}


qtd=0;
vl=0;

for(let i=0; i < bit2.length; i++){
    vl =bit2[i];
    if(vl == 1){
        qtd++

    }
}

qtd =qtd %2

if(qtd == 0){
    bit2.push(0);
}else{
    bit2.push(1);
}

qtd=0;
vl=0;

for(let i=0; i < bit3.length; i++){
    vl =bit3[i];
    if(vl == 1){
        qtd++

    }
}

qtd =qtd %2

if(qtd == 0){
    bit3.push(0);
}else{
    bit3.push(1);
}

qtd=0;
vl=0;

for(let i=0; i < bit4.length; i++){
    vl =bit4[i];
    if(vl == 1){
        qtd++

    }
}

qtd =qtd %2

if(qtd == 0){
    bit4.push(0);
}else{
    bit4.push(1);
}
qtd=0;
var m=[bit1,bit2,bit3,bit4];
var c1, c2,c3, c4,c5, c6, c7, c8,c9;
var c1c=0, c2c=0,c3c=0, c4c=0,c5c=0, c6c=0, c7c=0, c8c=0,c9c=0;



while(qtd < m.length){
    
    c1= m[qtd][0];
    if(c1 == 1){
        c1c++;
         
    }
    c2= m[qtd][1];
    if(c2 == 1){
        c2c++;
         
    }
    c3= m[qtd][2];
    if(c3 == 1){
        c3c++;
         
    }
    c4= m[qtd][3];
    if(c4 == 1){
        c4c++;
         
    } c5= m[qtd][4];
    if(c5 == 1){
        c5c++;
         
    } 
    c6= m[qtd][5];
    if(c6 == 1){
        c6c++;
         
    }
    c7= m[qtd][6];
    if(c7 == 1){
        c7c++;
         
    }
    c8= m[qtd][7];
    if(c8 == 1){
       c8c++;
         
    }

    c9= m[qtd][8];
    if(c9 == 1){
       c9c++;
         
    }
    qtd++;



}

c1c = c1c % 2;
if( c1c== 0){
    res.push(0);
}
else{
    res.push(1);
} 

c2c = c2c % 2;
if( c2c== 0){
    res.push(0);
}
else{
    res.push(1);
}

c3c = c3c % 2;
if( c3c== 0){
    res.push(0);
}
else{
    res.push(1);
}
c4c = c4c % 2;
if( c4c== 0){
    res.push(0);
}
else{
    res.push(1);
}
c5c = c5c % 2;
if( c5c== 0){
    res.push(0);
}
else{
    res.push(1);
}

c6c = c6c % 2;
if( c6c== 0){
    res.push(0);
}
else{
    res.push(1);
}
c7c = c7c % 2;
if( c7c== 0){
    res.push(0);
}
else{
    res.push(1);
}
c8c = c8c % 2;
if( c8c== 0){
    res.push(0);
}
else{
    res.push(1);
}

c9c = c9c % 2;
if( c9c== 0){
    res.push(0);
}
else{
    res.push(1);
}



document.write("Resultado<br>" + bit1 + "<br>" + bit2 + "<br>" + bit3 + "<br>" + bit4 + "<br>" + res + "<br>");
