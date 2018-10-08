function ValidaCampos() {
    
    if (document.getElementById("txtNome").value == "" || document.getElementById("txtNome").value.length < 8)
    {
        alert("Nome inválido");
        document.getElementById("txtNome").focus();
        return false;
    }
}

function validacaoEmail() {
    usuario = form1.email.value.substring(0, form1.email.value.indexOf("@"));
    dominio = form1.email.value.substring(form1.email.value.indexOf("@")+ 1, form1.email.value.length);
    
    if ((usuario.length >=1) && 
        (dominio.length >=3) && 
        (usuario.search("@")==-1) && 
        (dominio.search("@")==-1) && 
        (usuario.search(" ")==-1) && 
        (dominio.search(" ")==-1) && 
        (dominio.search(".")!=-1) && 
        (dominio.indexOf(".") >=1)&& 
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    
    }
    else{
    alert("E-mail invalido");
    }

}

window.onload = function(){
    document.getElementById("txtEmail").onblur = validacaoEmail;
}