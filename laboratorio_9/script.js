const piramide = [[1],[2,3],[4,5,6],[7,8,9,1],[2,3,4,5,6],[7,8,9,1,2,3]];


for(let x = 0;  piramide.length > x;){
    for (let y = 0; x >= y;){  
            document.write( piramide[x][y] );
            y++;
    }
    document.write("<br/>");
    x++;

}  



