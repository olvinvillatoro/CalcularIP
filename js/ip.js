
//el primer valor de ip para derminar la clase
let clase;




//cantidad de hosts disponibles (2^n)
let host;
//es el valor en el obteto que se esta trabajando (132.18.WORKINGBIT.25)
//let workingbit=129;

//
var red
let bithost
var broadcast

let idRed;
let ipBroadcast;
    

function calcularIp(){
    

        //direccion ip completa
        let ip=document.getElementById('ip').value;
        console.log(ip);
        //la [prefijo] ingresada por el usuario
        let prefijo=document.getElementById('prefijo').value;
        console.log(prefijo);
        let ipARR=ip.split(".");

        clase=parseInt(ipARR[0]);

        //CLASE C

            if(clase>=192 && clase<=223){
                if (prefijo>=24) {
                    bithost=32-prefijo;
                    workingBit();
                claseC();  
                }
                else{
                    console.log("Prefijo invalido para redes de clase C");
                }
            }

        //CLASE B
            if(clase>=128 && clase<=191){
                if (prefijo>=16) {
                    
                    bithost=32-prefijo;
                    workingBit();
                    claseB();                        
                }
                else{
                    console.log("Prefijo invalido para redes de clase B");
                }
            }



        //CLASE A

        if(clase>0 && clase<=127){
            if (prefijo>=8) {
                
                bithost=32-prefijo;
                workingBit();
                claseA();          
            }
            else{
                console.log("Prefijo invalido para redes de clase B");
            }
        }

        console.log(ip);
        console.log(idRed);
        console.log(ipBroadcast);

     

    var h1=document.getElementById('ipResultado');
    var t = document.createTextNode("IP:"+idRed+" Broadcast:"+ipBroadcast);
h1.appendChild(t); 
  // document.getElementById('broadcast').innerHTML(ipBroadcast);

        function claseC(){ 
            host=Math.pow(2,bithost);
            red=Math.round((workingbit/host));
            red=red*host;
            broadcast= red+host-1;
            idRed=ipARR[0]+"."+ipARR[1]+"."+ipARR[2]+"."+red;
            ipBroadcast=ipARR[0]+"."+ipARR[1]+"."+ipARR[2]+"."+broadcast;
        }

        function claseB(){
            
            if(bithost>8){
                            
                host=Math.pow(2,(bithost-8));
                red=Math.round((workingbit/host));
                red=red*host;
                broadcast= red+host-1;
                idRed=ipARR[0]+"."+ipARR[1]+"."+red+".0";
                ipBroadcast=ipARR[0]+"."+ipARR[1]+"."+broadcast+".255";
                
            }
            else{
                console.log("Llamar Clase C");
                claseC();
            }

        }

        function claseA(){
            if(bithost>16){
                                                
                host=Math.pow(2,(bithost-16));
                red=Math.floor((workingbit/host));
                red=red*host;
                broadcast= red+host-1;
                idRed=ipARR[0]+"."+red+"."+"0"+".0";
                ipBroadcast=ipARR[0]+"."+broadcast+"."+"255"+".255";
                
            }
            else{
                console.log("Llamar Clase B");
                claseB();
            }

        }

        function workingBit(){
            if(bithost<=8){
                workingbit=parseInt( ipARR[3]);
            }
            else if(bithost<=16){
                workingbit=parseInt( ipARR[2]);

            }
            else{
                workingbit=parseInt( ipARR[1]);
            }
            return workingbit;

        }

}