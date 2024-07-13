function validarEmail(email) {
    const rejexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    console.log(rejexEmail.test(email))
    return rejexEmail.test(email)
}

function validarEmailReacao(email) {
    $('input').css('transition', 'ease-out 500ms')
    $('#email').css('border-bottom', '1px solid transparent')

    if (validarEmail(email)) {
        $('#email').css('border-bottom', '2px solid green')
    } else {
        $('#email').css('border-bottom', '1px solid red')
    }
}

function validarSenha(senha) {

    const rejexSenha = /^(([^<>()[\]\\.,;:\ \"]*)|(\".+\"))$/

    if (senha.length == 0) {
        return false
    }

    console.log(rejexSenha.test(senha))
    return rejexSenha.test(senha)
}

function validarSenhaReacao(senha) {
    $('input').css('transition', 'ease-out 500ms')
    $('#senha').css('border-bottom', '1px solid transparent')

    // if 
    if (validarSenha(senha)) {
        $('#senha').css('border-bottom', '2px solid green')
    } else {
        $('#senha').css('border-bottom', '1px solid red')
    }

    // const linha = $('#linha')
    $('#linha').css('transition', '1s')

    let tamanho = senha.length

    if (tamanho == 0) {
        // testes
        $('#linha').css('background', 'transparente')
        $('#linha').css('width', '0')
        $('span').css('color', 'black')

    }

    if (0 < tamanho && tamanho <= 8) {
        // testes
        $('#linha').css('background', 'red')
        $('#linha').css('width', '25%')
        $('#spanConteudo').css('color', 'green')

    }

    if (8 < tamanho && tamanho <= 16) {
        // testes
        $('#linha').css('background', 'yellow')
        $('#linha').css('width', '50%')
        $('#spanLetra').css('color', 'green')

    }

    if (tamanho > 16) {
        // testes
        $('#linha').css('background', 'green')
        $('#linha').css('width', '100%')
        $('#spanEspecial').css('color', 'green')

    }
}

$('#email').on('input', function () {
    validarEmailReacao($(this).val())
})

$('#senha').on('input', function () {
    validarSenhaReacao($(this).val())
})
