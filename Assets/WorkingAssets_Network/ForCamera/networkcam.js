
function OnNetworkInstantiate (msg : NetworkMessageInfo) {
var Camera1 =GetComponent.<Camera>();
if(GetComponent.<NetworkView>().isMine == true){
   GetComponent.<Camera>().enabled = true;
   Camera1.enabled = true;
}
else{Camera1.enabled = false;}
     GetComponent.<Camera>().enabled = false;
}