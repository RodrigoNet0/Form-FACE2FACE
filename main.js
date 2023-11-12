function submitForm() {
    let form = document.getElementById("myForm");
    let formData = new FormData(form);

    // Exemplo de exibição dos dados no console (você pode enviá-los para um servidor aqui)
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
}
