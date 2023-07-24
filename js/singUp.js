/* ingresar imagen */

const file = document.getElementById("photo");
const img = document.getElementById("img");
const defaultFile = "img/userIcon.png";

file.addEventListener("change", e =>{
    if(e.target.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){ 
        img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    } else{
        img.src=defaultFile;
    }
});


/* ver contraseñas  */ 

const showPass = document.getElementById("eye1"); //Span para ocultar o mostrar la contraseña dentro del formulario.
const showConfirmPass = document.getElementById("eye2"); //Span para ocultar o mostrar la validacion de contraseña dentro del formulario.
const passInput = document.getElementById("password"); //Input de contraseña dentro del formulario.
const ConfirmPassInput = document.getElementById("confirmPassword") //Input de comfirmar contraseña dentro del formulario.

//utilizando el span del campo "password" cambiamos el tipo de input del campo, haciendo que muestre o no su contenido
showPass.addEventListener("click", ()=> {
    if (passInput.type === "password") {
        passInput.type = "text";
    } else{
        passInput.type = "password";
    }
});

//utilizando el span del campo "confirmPassword" cambiamos el tipo de input del campo, haciendo que muestre o no su contenido
showConfirmPass.addEventListener("click", ()=> {
    if (ConfirmPassInput.type === "password") {
        ConfirmPassInput.type = "text";
    } else{
        ConfirmPassInput.type = "password";
    }
});

/* habilitando/deshabilitando boton */

const enter = document.getElementById("enter");
const form = document.querySelector("form");

function activate(){
    
    if (form.user.value == "" || form.password.value == "" || form.confirmPassword.value == "" || form.email.value == "" || form.nam.value == "" ||  form.lastName.value=="" || form.birthday.value=="" || form.placeResidence.value==""){
        enter.disabled=true;
        enter.classList.replace("enter","enterDisabled")
    } else{
        enter.disabled=false;
        enter.classList.replace("enterDisabled","enter")
    }
}

form.addEventListener("keyup", activate)




/*validacion de datos*/

const pUser = document.getElementById("pUser"); //Parrafo donde se notifica el error del campo user
const pPass = document.getElementById("pPassword"); //Parrafo donde se notifica el error del campo password
const pPassConfirm = document.getElementById("pConfirmPassword"); //Parrafo donde se notifica el error del campo confirmPassword
const pBirthday = document.getElementById("pBirthday"); //Parrafo donde se notifica el error del campo birthday
const pNullCamp = document.getElementById("pNullCamp") //Parrafo donde se notifica de campos vacios

const userInput = document.getElementById("user"); //input de user
const birthdayInput = document.getElementById("birthday"); //input de birthday

const userLabel = document.getElementById("userLabel"); //etiqueta de campo user
const passLabel = document.getElementById("passwordLabel"); //etiqueta de campo password
const confirmPassLabel = document.getElementById("confirmPasswordLabel"); //etiqueta de campo confirmPassword
const birthdayLabel = document.getElementById("birthdayLabel"); //etiqueta de campo birthday


function errorUser(){
    //Cambia el estilo del Input, Label y parrafo del dato en cuestion
    userInput.classList.add("inputError"); 
    userLabel.classList.add("labelError");
    pUser.classList.add("errorActiv");
}
function errorPass(){
    //Cambia el estilo del Input, Label y parrafo del dato en cuestion
    passInput.classList.add("inputError"); 
    passLabel.classList.add("labelError");
    pPass.classList.add("errorActiv");
    showPass.classList.add("eyeError");
}
function errorConfirmPass(){
    //Cambia el estilo del Input, Label y parrafo del dato en cuestion
    ConfirmPassInput.classList.add("inputError"); 
    confirmPassLabel.classList.add("labelError");
    pPassConfirm.classList.add("errorActiv");
    showConfirmPass.classList.add("eyeError");
    
    //al ser la comparacion de dos campos se hace en ambos
    passInput.classList.add("inputError"); 
    passLabel.classList.add("labelError");
    showPass.classList.add("eyeError");
}
function errorBirthday(){
    //Cambia el estilo del Input, Label y parrafo del dato en cuestion
    birthdayInput.classList.add("birthdayError"); 
    birthdayLabel.classList.add("labelError");
    pBirthday.classList.add("errorActiv");
}

function errorUserBack(){

    //si el error se resuelve se quitan las alertas. 
    userInput.classList.remove("inputError"); 
    userLabel.classList.remove("labelError");
    pUser.classList.remove("errorActiv");
}
function errorPassBack(){

    //si el error se resuelve se quitan las alertas. 
    passInput.classList.remove("inputError"); 
    passLabel.classList.remove("labelError");
    pPass.classList.remove("errorActiv");
    showPass.classList.remove("eyeError");
}
function errorConfirmPassBack(){

    //si el error se resuelve se quitan las alertas. 
    ConfirmPassInput.classList.remove("inputError"); 
    confirmPassLabel.classList.remove("labelError");
    pPassConfirm.classList.remove("errorActiv");
    showConfirmPass.classList.remove("eyeError");
}
function errorBirthdayBack(){

    //si el error se resuelve se quitan las alertas. 
    birthdayInput.classList.remove("birthdayError"); 
    birthdayLabel.classList.remove("labelError");
    pBirthday.classList.remove("errorActiv");
}

//el boton enter activa la funcion de validacion
enter.addEventListener("click", validateInput);

function validateInput(){
    const user = document.getElementById("user").value; //valor de campo user
    const pass = document.getElementById("password").value; //valor de campo password
    const passConfirm = document.getElementById("confirmPassword").value; //valor de campo comfirmPassword
    const birthday = document.getElementById("birthday").value; //valor de campo birthday

    const create = false;

    function validDate(birthday){

        mensaje="";
            
        let dateA = new Date(); //Fecha del equipo.

        let dA = dateA.getDate(); //Dia actual.
        let mA = dateA.getMonth() + 1; //Mes actual.
        let yA = dateA.getFullYear(); //Año actual.


        let separarCadena = birthday.split(""); //separa la fecha en subcadenas dentro de una nueva.

        //unifica la fecha en un formato DD/MM/AAAA al tiempo que las convierte en un valor numerico
        let dB= Number(separarCadena[8] + separarCadena[9]); //dia de nacimiento.
        let mB= Number(separarCadena[5] + separarCadena[6]); //mes de nacimiento.
        let yB= Number(separarCadena[0] + separarCadena[1] + separarCadena[2]+ separarCadena[3]); //año de nacimiento.      

        if((yB == yA & mB > mA) || (yB == yA & mB >= mA & dB > dA) || yB>yA){ 
            //si la fecha ingresada es mayor a la actual se notifica al usuario y se detiene el programa. El mensaje tiene valor False
            let mensaje=false
            pBirthday.innerHTML= "No se permiten fechas superiores a la actual.";
        } else if(isNaN(dB,mB,yB)){
            //si el input retorna un dato invalido (NaN) se notifica al usuario y se detiene el programa. El mensaje tiene valor False
            let mensaje=false
            pBirthday.innerHTML= "Formato de fecha invalido. <br> Intentelo de nuevo.";
        } else if (age(dB,dA,mB,mA,yB,yA) < 18){ //si el usuario tiene menos de 18 años se le niega la entrada. El mensaje tiene valor False 
            let mensaje=false;
            pBirthday.innerHTML= "Usted es menor de edad.";
        } else{
            mensaje= true //de lo contrario el mensaje tiene valor True
        }
    
        function age(dB,dA,mB,mA,yB,yA){

            /*La edad del usuario se calcula restando el año ingresado con el actual.
            Sin embargo, si el mes actual coincide con el de nacimiento pero el dia es inferior se resta un año al resultado de dicho calculo.
            lo mismo pasa si el mes actual es inferior al de nacimiento.*/
            let edad = 0;
        
            if ((mB == mA && dB > dA) || (mB > mA)){
                edad = yA - yB - 1;
            }else {
                edad = yA - yB;
            }
            return edad;
        }
        return mensaje;
    }
    
    if (user.length < 5){
        errorUser();
    } else{
        errorUserBack();
    }
    if(pass.length < 6){
        errorPass();
    } else{
        errorPassBack();
    }
    if (pass != passConfirm){
        errorConfirmPass();
    } else if(pass == passConfirm && pass.length >= 6){
        errorConfirmPassBack();
        errorPassBack();
    } else{
        errorConfirmPassBack();
    }
    if(validDate(birthday)== false){
        errorBirthday();
    } else{
        errorBirthdayBack();
    }

    
}

/* cancelar signIn */

const cancelSI = document.getElementById("cancel");

cancelSI.addEventListener("click", cancel);

function cancel(){
    window.location.href='logIn.html';
}