const form = document.getElementById('form')
const nome = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const numero = document.getElementById('numero')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const conf_senha = document.getElementById('senha2')
var comp = '';

form.addEventListener('submit', e=>{
    e.preventDefault()

    validateInputs()
})

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add("erro")
    inputControl.classList.remove('success')
}

    const setSuccess = element =>{
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error')
        errorDisplay.innerText = "";
        inputControl.classList.add('success')
        inputControl.classList.remove('erro')
    }

const validateInputs = () =>{
    const nomeValue = nome.value.trim()
    const cpfValue = cpf.value.trim()
    const numbValue = numero.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const senha2Value = conf_senha.value.trim()

    if(nomeValue === ''){
        setError(nome, "Nome é requerido");
        
    }else{
        setSuccess(nome);
    }
    if (cpfValue === '' || !validarCPF(cpfValue)) {
        setError(cpf, "CPF inválido");
    } else {
        setSuccess(cpf);
    }

    if(numbValue =='' || nomeValue != 11){
        setError(numero,"Número invalido")
        
    }else{
        setSuccess(numero)
    }
    if(emailValue === ''){
        setError(email,"Email é requerido")
    }else{
        setSuccess(email)
    }
    if(senhaValue ===''){
        setError(senha, "Senha é requerida")
    }else{
        setSuccess(senha)
    }
    if(senha2Value ===''){
        setError(conf_senha, "Senha é requerida")
    }else{
        setSuccess(conf_senha)
    }

    if(senha2Value !== senhaValue){
        setError(conf_senha, "Senhas não batem")
    }

    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    
        if (cpf.length !== 11) {
            return false;
        }
    
        // Verifica se todos os dígitos são iguais, o que tornaria o CPF inválido
        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }
    
        // Calcula o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let digitoVerificador1 = resto >= 10 ? 0 : resto;
    
        // Calcula o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digitoVerificador2 = resto >= 10 ? 0 : resto;
    
        // Verifica se os dígitos verificadores calculados coincidem com os dígitos do CPF
        if (parseInt(cpf.charAt(9)) === digitoVerificador1 && parseInt(cpf.charAt(10)) === digitoVerificador2) {
            return true;
        } else {
            return false;
        }
    }
}