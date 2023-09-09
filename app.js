//inicio
let botonMostrar = document.getElementById("user");
let botonusers = document.getElementById("user1");
let botonusers1 = document.getElementById("user2");
let botonusers2 = document.getElementById("user3");

botonMostrar.addEventListener("click",function(){
    botonusers.style.display= "block";
    botonusers1.style.display= "block";
    botonusers2.style.display= "block";
});

//mali
let botonMostrar1= document.getElementById("user1");
let botonpassMali = document.getElementById("passwordMali");
let botonIngresar =document.getElementById("interaccion");
botonMostrar1.addEventListener("click",function(){
    botonpassMali.style.display="block";
    botonIngresar.style.display="block";
});



//password mali
let ingresar = document.getElementById("interaccion");
let passwordCorrecto = "1234";

ingresar.addEventListener("click", function(){
    let password = document.getElementById("passwordMali").value;
    let Mali= document.getElementById("passwordMali");
    
    if(password === passwordCorrecto){
        Mali.style.display="none";
        ingresar.style.display="none";
        document.getElementById("opciones2").style.display = "block";
        document.getElementById("opciones3").style.display = "block";
        document.getElementById("opciones4").style.display = "block";
        document.getElementById("cerrar").style.display="block";
    } else {
        alert("Contraseña Incorrecta");
    }
});

//saldomali

let saldo = 200;
let consultarSaldo= document.getElementById("opciones2")
let ingresarMonto = document.getElementById("opciones3");
let retirarMonto = document.getElementById("opciones4"); 

consultarSaldo.addEventListener("click", function(){
    if (!isNaN(saldo)) {
        alert(`saldo actual:${saldo}`);
        alert(saldo+=ingres);
        alert(saldo -=retiro);

        
    } else {
        
    }
})

ingresarMonto.addEventListener("click", function() {
    let ingreso = parseInt(prompt("Ingresa un monto a depositar"));

    if (!isNaN(ingreso)) {
        saldo += ingreso; 
        alert("Saldo actual: " + saldo);
    } else {
        alert("Ingresa un monto válido");
    }
});

retirarMonto.addEventListener("click", function() {
    let retiro = parseInt(prompt("Ingresa un monto a retirar"));

    if (!isNaN(retiro)) { 
        if (retiro <= saldo) {
            saldo -= retiro; 
            alert("Saldo actual: " + saldo);
        } else {
            alert("Fondos insuficientes");
        }
    } else {
        alert("Ingresa un monto válido");
    }
});


//cerar sesion mali
let cerrarSesion = document.getElementById("cerrar");
 cerrarSesion.addEventListener("click", function(){
    document.getElementById("opciones2").style.display = "none";
    document.getElementById("opciones3").style.display = "none";
    document.getElementById("opciones4").style.display = "none";
    document.getElementById("cerrar").style.display="none";

 });

//Gera
 let botonMostrar2= document.getElementById("user2");
let botonpassGera = document.getElementById("passwordGera");
let botonIngresar1 =document.getElementById("interaccion1");
botonMostrar2.addEventListener("click",function(){
    botonpassGera.style.display="block";
    botonIngresar1.style.display="block";

});

//password gera
let ingresar2 = document.getElementById("interaccion1");
let passwordCorrecto2 = "5678";

ingresar2.addEventListener("click", function(){
    let password2 = document.getElementById("passwordGera").value;
    let Gera= document.getElementById("passwordGera");
    
    if(password2 === passwordCorrecto2){
        Gera.style.display="none";
        ingresar2.style.display="none";
        document.getElementById("opciones5").style.display = "block";
        document.getElementById("opciones6").style.display = "block";
        document.getElementById("opciones7").style.display = "block";
        document.getElementById("cerrar1").style.display="block";
    } else {
        alert("Contraseña Incorrecta");
    }
});

//saldo gera
let saldo2 = 290;
let consultarSaldo2= document.getElementById("opciones5")
let ingresarMonto2 = document.getElementById("opciones6");
let retirarMonto2 = document.getElementById("opciones7"); 

consultarSaldo2.addEventListener("click", function(){
    if (!isNaN(saldo2)) {
        alert(`saldo actual:${saldo2}`);
        alert(saldo2+=ingres2);
        alert(saldo2 -=retiro2);

        
    } else {
        alert("Contraseña Incorrecta");
    }
})

ingresarMonto2.addEventListener("click", function() {
    let ingreso2 = parseInt(prompt("Ingresa un monto a depositar"));

    if (!isNaN(ingreso2)) {
        saldo2 += ingreso2; 
        alert("Saldo actual: " + saldo2);
    } else {
        alert("Ingresa un monto válido");
    }
});

retirarMonto2.addEventListener("click", function() {
    let retiro2 = parseInt(prompt("Ingresa un monto a retirar"));

    if (!isNaN(retiro2)) { 
        if (retiro2 <= saldo2) {
            saldo2 -= retiro2; 
            alert("Saldo actual: " + saldo2);
        } else {
            alert("Fondos insuficientes");
        }
    } else {
        alert("Ingresa un monto válido");
    }
});


//cerrar sesion gera
let cerrarSesion2 = document.getElementById("cerrar1");
 cerrarSesion2.addEventListener("click", function(){
    document.getElementById("opciones5").style.display = "none";
    document.getElementById("opciones6").style.display = "none";
    document.getElementById("opciones7").style.display = "none";
    document.getElementById("cerrar1").style.display="none";

 });


 //maui
 let botonMostrar3= document.getElementById("user3");
let botonpassMaui = document.getElementById("passwordMaui");
let botonIngresar2 =document.getElementById("interaccion2");
botonMostrar3.addEventListener("click",function(){
    botonpassMaui.style.display="block";
    botonIngresar2.style.display="block";

});

//passwordmaui
let ingresar3 = document.getElementById("interaccion2");
let passwordCorrecto3 = "1212";

ingresar3.addEventListener("click", function(){
    let password3 = document.getElementById("passwordMaui").value;
    let Maui3= document.getElementById("passwordMaui");
    
    if(password3 === passwordCorrecto3){
        Maui3.style.display="none";
        ingresar3.style.display="none";
        document.getElementById("opciones8").style.display = "block";
        document.getElementById("opciones9").style.display = "block";
        document.getElementById("opciones10").style.display = "block";
        document.getElementById("cerrar2").style.display="block";
    } else {
        alert("Contraseña Incorrecta");
    }
});

//saldo maui
let saldo3 = 67;
let consultarSaldo3= document.getElementById("opciones8")
let ingresarMonto3 = document.getElementById("opciones9");
let retirarMonto3 = document.getElementById("opciones10"); 

consultarSaldo3.addEventListener("click", function(){
    if (!isNaN(saldo3)) {
        alert(`saldo actual:${saldo3}`);
        alert(saldo3+=ingres3);
        alert(saldo3 -=retiro3);

        
    } else {
        alert("ingresa un monto valido");
        
    }
});

ingresarMonto3.addEventListener("click", function() {
    let ingreso3 = parseInt(prompt("Ingresa un monto a depositar"));

    if (!isNaN(ingreso3)) {
        saldo3 += ingreso3; 
        alert("Saldo actual: " + saldo3);
    } else {
        alert("Ingresa un monto válido");
    }
});

retirarMonto3.addEventListener("click", function() {
    let retiro3 = parseInt(prompt("Ingresa un monto a retirar"));

    if (!isNaN(retiro3)) { 
        if (retiro3 <= saldo3) {
            saldo3 -= retiro3; 
            alert("Saldo actual: " + saldo3);
        } else {
            alert("Fondos insuficientes");
        }
    } else {
        alert("Ingresa un monto válido");
    }
});

//cerrar maui
let cerrarSesion3 = document.getElementById("cerrar2");
 cerrarSesion3.addEventListener("click", function(){
    document.getElementById("opciones8").style.display = "none";
    document.getElementById("opciones9").style.display = "none";
    document.getElementById("opciones10").style.display = "none";
    document.getElementById("cerrar2").style.display="none";

 });






 