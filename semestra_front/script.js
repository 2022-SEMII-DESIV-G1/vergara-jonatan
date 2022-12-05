const piramide = [];
const ruta = [];
let uwu = null;

for(let x = 0;  10 > x;){
    piramide[x] =  [];
    for (let y = 0; x >= y;){  
            piramide[x][y] = y + 1;
            if(piramide[x][y] > piramide[x][y-1]){
                uwu = piramide[x][y]
               
            }
            document.write( piramide[x][y] );
            y++;
    }
    document.write("<br/>");
    ruta[x] = uwu
    console.log( ruta[x] );
    x++; 
}  
