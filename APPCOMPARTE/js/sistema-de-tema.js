var tema = document.getElementById('tema');
var cuerpo = document.getElementById('body');
var theme = document.getElementById('result');
storagetheme = localStorage.getItem("storagetheme");

if(storagetheme == 'oscuro'){
result.innerHTML += 'oscuro';
$(cuerpo).addClass( "black" );
}else{result.innerHTML += 'claro'}

$(tema).click(function() {
  $( cuerpo ).toggleClass( "black" );
  revisartema();
});


function revisartema(){
storagetheme = localStorage.getItem("storagetheme");
if(storagetheme == 'oscuro'){
    localStorage.setItem("storagetheme", "claro");
    result.innerHTML = 'Cambio a claro';
    return false;
}
if(storagetheme == 'claro'){
    localStorage.setItem("storagetheme", "oscuro");
}
if(storagetheme == null){
    localStorage.setItem("storagetheme", "oscuro");
}
    result.innerHTML = 'Cambio a oscuro';

}