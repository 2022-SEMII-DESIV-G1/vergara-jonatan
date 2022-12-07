const rest = document.getElementById("result")
document.getElementById('limpiar').style.visibility = 'hidden';
function fcalc(){
     txt = document.getElementById("input").value.toUpperCase();
    if (txt) {
        resp = "";
            let x = 0;
            while (x < txt.length) {
                valor = "";
                cant = 0;
                let z = 0;
                boolean = false;
                while(z < resp.length) {
                    if (txt.charAt(x) == resp.charAt(z)) {
                        boolean = true;
                    }
                    z++;
                }
                let y = 0;
                while((y < txt.length) && !(boolean)) {
                    if ((txt.charAt(x) == txt.charAt(y)) && !(boolean)) {
                        cant++;
                        valor = txt.charAt(x) + " : " + cant + "<br>";
                    }
                    y++;
                }
                resp = resp + valor;
                x++;
            }
            rest.innerHTML = resp;
            document.getElementById('limpiar').style.visibility = 'visible';
   }
   else {
    rest.innerHTML = "No hay una oracion.";
   }
}
function flimp(){
    document.getElementById("input").value = ''
    rest.innerHTML = ""
    document.getElementById('limpiar').style.visibility = 'hidden';
}