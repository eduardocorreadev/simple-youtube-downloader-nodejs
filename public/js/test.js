const urlYoutube = [
    'youtube.com',
    'www.youtube.com',
    'youtu.be'
]

for (var i = 0; i < urlYoutube.length; i++) {

    if (urlTester[1] === urlYoutube[i]) {
        urlTester[1] === urlYoutube[2] && urlTester[2] != 'watch' ? idVideo = urlTester[2] : idVideo = urlTester[4] // Compartilhamento - Url Area          

        if (idVideo != undefined) {
            console.log(idVideo)
            isStateValue = false
            errorSubmit.innerHTML = ''

        } else {
            errorSubmit.innerHTML = 'Não foi encontrado o id do vídeo no link!'
            isStateValue = true

        }

        break

    } else {
        errorSubmit.innerHTML = 'O link fornecido não é do Youtube!'
        isStateValue = true
    }

}

