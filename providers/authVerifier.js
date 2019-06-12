const validarCpf = require('validar-cpf');

const authVerifier = (data) => {
    let mustHave = ["nome", "email", "cpf", "rua", "bairro", "cidade", "estado", "cep", "password"];
    let isValidKeys = Object.keys(data)

    if (JSON.stringify(mustHave).trim() !== JSON.stringify(isValidKeys).trim()) {
        return {
            isValid: false,
            message: 'Missing keys!'
        }
    }
    else {
        let isValidValue = true
        let message = 'Missing values';
        mustHave.map(item => {
            if (data[item] === '') {
                isValidValue = false
            }
            if (item === 'cpf') {
                if (!validarCpf(data[item])) {
                    isValidValue = false;
                    message = 'CPF Inválido!'
                }
            }
        })
        if (!isValidValue) {
            return {
                isValid: false,
                message: message
            }
        }
        return {
            isValid: true,
        }
    }
}

module.exports = authVerifier;