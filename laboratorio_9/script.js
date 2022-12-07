const piramide = [];
const ruta = [];

for(let x = 0;  10 > x;){
    piramide[x] =  [];
    for (let y = 0; x >= y;){  
            piramide[x][y] = y + 1;
            if(piramide[x][y] > piramide[x][y-1]){
                ruta[x] = piramide[x][y]
                console.log( ruta[x] );
            }
            document.write( piramide[x][y] );
            y++;
    }
    document.write("<br/>");
    x++; 
}  
