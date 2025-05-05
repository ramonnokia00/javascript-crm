function mostrarOverlay() {
    let overlayElement = document.querySelector('#overlay');
    let gavetaElement = document.querySelector("#gaveta");

    if (overlayElement.classList.contains('invisible')) {
        overlayElement.classList.remove("invisible", "opacity-0");
        gavetaElement.classList.remove("-right-full");
        gavetaElement.classList.add("right-0")
    }
    else {
        overlayElement.classList.add('invisible' , 'opacity-0');
        gavetaElement.classList.add("-right-full");
        gavetaElement.classList.remove("right-0")
    }
}
function mostrarNovocadastro() {
    let cadastroElement = document.querySelector('#novocadastro');
    let caixaElement = document.querySelector('#gavetacadastro');
    

    if (cadastroElement.classList.contains('invisible')) {
        cadastroElement.classList.remove('invisible', 'opacity-0');

        if (caixaElement.classList.contains('invisible')) {
            caixaElement.classList.remove('-left-full', 'invisible', 'opacity-0');
        } else {
            caixaElement.classList.add('invisible');
        }
    } else {
        cadastroElement.classList.add('invisible', 'opacity-0');
        caixaElement.classList.add('invisible', '-left-full');
    }
    
}
