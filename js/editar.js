/* modal img */

// const modalImgWindow = document.getElementById("imgModal"); //contenedor principal de la ventana "imgModal"
// const modalImgOff = document.getElementById("cancelImg"); //boton para cerrar ventana
// const imgUser = document.getElementById("imgInput").value; //valor del input de imagen
// const saveImg = document.getElementById("enterImg"); //boton para guardar la imagen
// const modalImgOn = document.getElementById("openModal"); //boton para abrir modal

// //abrimos ventana cambaidno el display
// modalImgOn.addEventListener("click", ()=>{
//     modalImgWindow.style.display = "flex"
// });

// //cerramos la ventana cambiando el display
// modalImgOff.addEventListener("click", ()=>{
//     modalImgWindow.style.display = "none"
// });

// //guardamos la imagen a una variable que luego pasaremos a la base y cerramos la ventana
// saveImg.addEventListener("click", ()=>{
//     const img = imgUser;
//     modalImgWindow.style.display = "none"
//     return img;
// });


/* edit img */


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

/* modal password */

const modalPassWindow = document.getElementById("editPassModal"); //contenedor principal de la ventana "editPassModal"
const modalPassOff = document.getElementById("cancelPass"); //boton para cerrar ventana
const modalPassOn = document.getElementById("openPModal"); //boton para abrir modal

//abrimos ventana cambaidno el display
modalPassOn.addEventListener("click", ()=>{
    modalPassWindow.style.display = "flex"
});

//cerramos ventana cambaidno el display
modalPassOff.addEventListener("click", ()=>{
    modalPassWindow.style.display = "none"
});

/* editar contraseña */

const passData = "pepe123" //"contraseña en la base de datos"

const actualPassInput = document.getElementById("actualPassword"); //input donde se ingresa la contraseña actual
const newPassInput = document.getElementById("newPassword"); //input donde se ingresa la contraseña nueva
const confirmPassInput = document.getElementById("confirmNewPassword"); //input donde se ingresa la confirmacion de contraseña

const showActualPass = document.getElementById("eye1"); //boton para mostrar el contenido del input de la contraseña actual
const showNewPass = document.getElementById("eye2"); //boton para mostrarel contenido del input de la nueva contraseña
const showConfirmPass = document.getElementById("eye3"); //boton para mostarr la confirmacion de contraseña 

const actualPassLabel = document.getElementById("passwordLabel"); //etiqueta del campo de contraseña actual
const newPassLabel = document.getElementById("newPasswordLabel"); //etiqueta del campo de contraseña nueva 
const confirmPassLabel = document.getElementById("confirmNewPasswordLabel"); //etiqueta del campo de la confirmacion de contraseña

const pActualPass = document.getElementById("pPassword"); //parrafo del campo de contraseña actual
const pNewPass = document.getElementById("pNPassword"); //parrafo del campo de contraseña nueva 
const pConfirmPass = document.getElementById("pConfirmPassword"); //parrafo del campo de la confirmacion de contraseña

const editPass = document.getElementById("enterPass"); //boton para ingresar los cambios 

//le damos al boton la funcion de validar con una funcion "click"
editPass.addEventListener("click", validate);

function errorActualPass(){
    //Cambia el estilo del Input, Label y parrafo del dato en cuestion
    actualPassInput.classList.add("inputError");
    showActualPass.classList.add("eyeError");
    actualPassLabel.classList.add("errorActiv");
    pActualPass.classList.add("errorActiv");
}

function errorActualPassBack(){    
    //si el error se resuelve se quitan las alertas 
    actualPassInput.classList.remove("inputError");
    showActualPass.classList.remove("eyeError");
    actualPassLabel.classList.remove("errorActiv");
    pActualPass.classList.remove("errorActiv");
}

function errorNewPass(){
    //Cambia el estilo del Input, Label y parrafo del dato en cuestion
    newPassInput.classList.add("inputError");
    showNewPass.classList.add("eyeError");
    newPassLabel.classList.add("errorActiv");
    pNewPass.classList.add("errorActiv");
    
    pNewPass.innerHTML="*La contraseña debe tener al menos seis caracteres";
}

function errorNewPassBack(){
    //si el error se resuelve se quitan las alertas 
    newPassInput.classList.remove("inputError");
    showNewPass.classList.remove("eyeError");
    newPassLabel.classList.remove("errorActiv");
    pNewPass.classList.remove("errorActiv");
}

function errorConfirmPass(){
    //Cambia el estilo del Input, Label y parrafo del dato en cuestion
    confirmPassInput.classList.add("inputError");
    showConfirmPass.classList.add("eyeError");
    confirmPassLabel.classList.add("errorActiv");
}

function errorConfirmPassBack(){
    //si el error se resuelve se quitan las alertas 
    pNewPass.classList.remove("errorActiv");
    confirmPassInput.classList.remove("inputError");
    showConfirmPass.classList.remove("eyeError");
    confirmPassLabel.classList.remove("errorActiv");
    pConfirmPass.classList.remove("errorActiv");
}

function validate(){

    var newPassData="" //contraseña dentro de la base de datos

    const actualPass = document.getElementById("actualPassword").value //valor del input donde se ingresa la contraseña actual
    const newPass = document.getElementById("newPassword").value //valor del input donde se ingresa la nueva contraseña 
    const confirmPass = document.getElementById("confirmNewPassword").value //valor del input donde se ingresa la confirmacion de contraseña 

    if (actualPass != passData){
        //se notifica al usuario si la contraseña ingresada no coincide con la registrada
        errorActualPass()
    } else{
        errorActualPassBack()
        
        if(newPass==actualPass){
            errorNewPass()
            pNewPass.classList.add("errorActiv");
            pNewPass.innerHTML="*La nueva contraseña no puede ser igual a la anterior";
        }
        else if(newPass.length >= 6 && newPass == confirmPass){
            errorNewPassBack()
            errorConfirmPassBack()
            newPassData=newPass
            modalPassWindow.style.display="none"
        }else if(newPass.length < 6 && newPass == confirmPass){    
            errorNewPass()
            errorConfirmPass()
            pNewPass.classList.add("errorActiv");
        } else if(newPass.length >= 6 && newPass != confirmPass){
            errorNewPassBack()
            errorConfirmPass()
            pConfirmPass.classList.add("errorActiv")
        } else if(newPass.length < 6 && newPass != confirmPass){
            errorConfirmPass()
            pConfirmPass.classList.add("errorActiv")
            errorNewPass()
            pNewPass.classList.add("errorActiv");
        }
    }
}

/* ver contraseñas  */ 

//utilizando el span del campo "ActualPassword" cambiamos el tipo de input del campo, haciendo que muestre o no su contenido
showActualPass.addEventListener("click", ()=> {
    if (actualPassInput.type === "password") {
        actualPassInput.type = "text";
    } else{
        actualPassInput.type = "password";
    }
});

//utilizando el span del campo "newPassword" cambiamos el tipo de input del campo, haciendo que muestre o no su contenido
showNewPass.addEventListener("click", ()=> {
    if (newPassInput.type === "password") {
        newPassInput.type = "text";
    } else{
        newPassInput.type = "password";
    }
});

//utilizando el span del campo "confirmNewPassword" cambiamos el tipo de input del campo, haciendo que muestre o no su contenido
showConfirmPass.addEventListener("click", ()=> {
    if (confirmPassInput.type === "password") {
        confirmPassInput.type = "text";
    } else{
        confirmPassInput.type = "password";
    }
});

/*Redireccion*/

const cancel =document.getElementById("cancel");
cancel.addEventListener("click", close);

function close(){
    window.location.href='home.html';
}

/*Editar Usuario */

const userData = ""; //"nombre de usaurio guardado en base de datos"
const emailData = ""; //"e-mail guardado en base de datos"
const nameData = ""; //"nombre guardado en base de datos"
const lastNameData = ""; //"apellido de usaurio guardado en base de datos"
const placeResidenceData = ""; //"residencia de usaurio guardado en base de datos"

const userLabel = document.getElementById("userLabel"); //input donde se ingresa el nombre de usaurio
const userInput = document.getElementById("userInput"); //etiqueta del campo de nombre de usuario
const userP = document.getElementById("userP"); //parrafo del campo de nombre de usuario

const enter = document.getElementById("enter"); //boton para guardar los datos editados

function editUser(){
    const user = document.getElementById("user").value; //valor del input donde se ingresa el nombre de usuario
    const email = document.getElementById("email").value; //valor del input donde se ingresa el email
    const name = document.getElementById("name").value; //valor del input donde se ingresa el nombre 
    const lastName = document.getElementById("lastName").value; //valor del input donde se ingresa el apellido 
    const placeResidence = document.getElementById("placeResidence").value; //valor del input donde se ingresa el lugar de residencia


    //si los campos estan vacios el dato se mantiene, de lo contrario guardara el dato ingresado
    if (user.length == ""){
        userData = userData
        userInput.classList.remove("errorInput");
        userLabel.classList.remove("errorActiv");
        userP.classList.remove("errorActiv");
    } else if(user.length < 5){
        userInput.classList.add("errorInput");
        userLabel.classList.add("errorActiv");
        userP.classList.add("errorActiv");
    }

    if(email.length==""){
        emailData = emailData
    } else{
        emailData = email
    }

    if(name.length==""){
        nameData = nameData
    } else{
        nameData = name
    }

    if(lastName.length==""){
        lastNameData = lastNameData
    } else{
        lastNameData = lastName
    }

    if(placeResidence.length==""){
        placeResidenceData = placeResidenceData
    } else{
        placeResidenceData = placeResidence
    }
}

//le damos al boton la funcion deeditar y validar con una funcion "click"
enter.addEventListener("click",editUser);