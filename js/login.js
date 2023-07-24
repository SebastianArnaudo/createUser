/* redirecciones */

const cancel = document.getElementById("close");
const signUp = document.getElementById("createUser");

cancel.addEventListener("click", close);
signUp.addEventListener("click", sign);

function close(){
    window.location.href='index.html';
}

function sign(){
    window.location.href='signUp.html';
}

function logIn(){
    window.location.href='home.html';
}

/* logIn */

const userData = "pepe"; //Usuario extraido de la Base de Datos.
const passData = "pepe123"; //Contraseña extraida de la Base de Datos.

const inputU = document.getElementById("userInput"); //Input de usuario dentro del formulario.
const labelU = document.getElementById("userLabel"); //Etiqueta de usuario dentro del formulario.

const inputP = document.getElementById("passwordInput"); //Input de contraseña dentro del formulario.
const labelP = document.getElementById("passwordLabel"); //Etiqueta de contraseña dentro del formulario.
const showPass = document.getElementById("eye"); //Span para ocultar o mostrar la contraseña dentro del formulario.

const form = document.querySelector("form");

const alerta = document.getElementById("error"); //Parrafo donde se cominca si hay algun error.

const login = document.getElementById("enter"); //Boton para ingresar.

login.addEventListener("click", () => main()); //Cuando se preciona el boton para iniciar secion se ejecuta una comparacion de datos.

//utilizando el span del campo "password" cambiamos el tipo de input del campo, haciendo que muestre o no su contenido
showPass.addEventListener("click", ()=> {
    if (inputP.type === "password") {
        inputP.type = "text";
    } else{
        inputP.type = "password";
    }
});

function validate(){
    if (form.userInput.value != "" && form.passwordInput.value != ""){
        login.disabled=false;
        login.classList.replace("enterDisabled","enter")
    } else{
        login.disabled=true;
        login.classList.replace("enter","enterDisabled")
    }
}

form.addEventListener("keyup",validate);

function main(){

    const userPut = document.getElementById("userInput").value; //Usuario extraido del formulario.
    const passPut = document.getElementById("passwordInput").value; //Contraseña extraida del formulario.

    function errorUser(){
        //Cambia el estilo del Input, Label del dato en cuestion y del parrafo 
        inputU.classList.add("inputError"); 
        labelU.classList.add("labelError");
        alerta.classList.add("errorActiv");
    }
    
    function errorPassword(){
        //Cambia el estilo del Input, Label del dato en cuestion y del parrafo 
        inputP.classList.add("inputError");
        labelP.classList.add("labelError");
        showPass.classList.add("eyeError");
        alerta.classList.add("errorActiv");
    }

    function errorBack(){

        //si el error se resuelve se quitan las alertas. 
        inputU.classList.remove("inputError"); 
        labelU.classList.remove("labelError");
        alerta.classList.remove("errorActiv");
        
        inputP.classList.remove("inputError");
        labelP.classList.remove("labelError");
        showPass.classList.remove("eyeError");
        alerta.classList.remove("errorActiv");
    }
    
    function compare(){
        if(userPut != userData && passPut != passData){
            errorUser()
            errorPassword()
            alerta.innerHTML= "*Usuario y Contraseña Incorrectos"
        
            /*Si la contraseña o el usuario ingresados no coindicen
            con los almacenados en la base de datos se notifica del error
            y se cambian los etilos de los inputs y sus labels*/
        }
        else if(userPut != userData){
            errorUser();
            alerta.innerHTML= "*Usuario Incorrecto"
            
            /*Si el usuario ingresado no coindice
            con los almacenados en la base de datos se notifica del error
            y se cambian los etilos del input y su label*/
        }
        else if(passPut != passData){
            errorPassword()
            alerta.innerHTML= "*Contraseña Incorrecta"
            
            /*Si la contraseña ingresada no coindice
            con las almacenados en la base de datos se notifica del error
            y se cambian los etilos del input y su label*/
        }
        else{
            /*Si todo es correcto se ingresa al "perfil" del usuario*/
            logIn()
            errorBack()
        }
    }
    
    return compare()
}

