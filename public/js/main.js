const downloaderContainer = document.getElementById('downloader-yt') // Container Primario
const viewContent = document.getElementById('view-content') // Container Secundario
const formDownloader = document.getElementById('form-downloader') // Formulário presente no container primario
const qualityDownloader = formDownloader.quality // Chamando o quality que está dentro do formulário que foi chamado na linha de cima
const buttonSubmitForm = formDownloader.submit_downloader  // Chamando o botão que está dentro do formulário que foi chamado duas linhas a cima

// Ouvindo o clique do botão downloader
buttonSubmitForm.addEventListener('click', event => {

    event.preventDefault() // Cancelando submit

    const errorSubmit = document.querySelector('.on-error-submit')
    var url = formDownloader.link.value
    var isStateValue

    function checkYoutubeUrl(url) {
        var checkUrl = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        return (url.match(checkUrl)) ? RegExp.$1 : false;
    }
    
    if (url != '' && url.length >= 17) {

        var idVideo = checkYoutubeUrl(url);

        if (idVideo) {
            isStateValue = false
        } else {
            errorSubmit.innerHTML = 'O Link fornecido está inválido! Verifique e tente novamente.'
            isStateValue = true
        }

    } else {
        errorSubmit.innerHTML = 'O campo tem que ser preencido e conter mais de 17 caracteres!'
        isStateValue = true
    }
        
    if (!isStateValue) {

        buttonSubmitForm.classList.add('on-loading')
        buttonSubmitForm.addEventListener('animationend', event => {

            if (event.animationName === 'loading-button') {
                buttonSubmitForm.classList.remove('on-loading')

                downloaderContainer.style.display = 'none'
                viewContent.style.display = 'block'
                document.querySelector('audio').play()

                viewContent.innerHTML = `
                <!-- Show Video -->
                <div class="show-video">
                    <h1>O vídeo está pronto para <br> Download</h1>
    
                    <iframe height="200" src="https://www.youtube-nocookie.com/embed/${idVideo}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
    
                    <button class="on-download on-loading" id="button-download">Fazer Download em qualidade: ${qualityDownloader.value}</button>
                    <button class="cancel-download" onclick="closeWindows()">Fechar</button>
                </div>
                <!--  End Show Video -->
                `

                const buttonDownload = document.getElementById('button-download')

                buttonDownload.addEventListener('click', () => {
                    location.href = `http://localhost:5000/download?ID=${idVideo}`
                })
            }
        })

    }

})

function closeWindows() {
    downloaderContainer.style.display = 'block'
    viewContent.style.display = 'none'
    viewContent.innerHTML = ''
}
