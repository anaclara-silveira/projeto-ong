document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".formulario");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede envio automático

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const cep = document.getElementById("cep").value.trim();

        // funcoes gerais//
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const regexTelefone = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/; // ← corrigido
        const regexCEP = /^\d{5}-\d{3}$/;

        if (!nome || !email || !cpf || !telefone || !cep) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!regexCPF.test(cpf)) {
            alert("CPF inválido. Use o formato 000.000.000-00.");
            return;
        }

        if (!regexTelefone.test(telefone)) {
            alert("Telefone inválido. Use o formato (00) 00000-0000.");
            return;
        }

        if (!regexCEP.test(cep)) {
            alert("CEP inválido. Use o formato 00000-000.");
            return;
        }

        alert("Cadastro enviado com sucesso!");
        form.reset();
    });
});
