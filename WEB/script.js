let itemParaExcluir = null;
let tipoExclusao = "";

function novoQuarto() {
    window.location.href = "cadastro-quarto.html";
}

function voltar() {
    window.location.href = "index.html";
}

function abrirReservas(numero, tipo) {
    window.location.href =
        `reservas.html?numero=${numero}&tipo=${tipo}`;
}

function novaReserva() {

    const params =
        new URLSearchParams(window.location.search);

    const numero =
        params.get("numero");

    window.location.href =
        `cadastro-reserva.html?numero=${numero}`;
}

function voltarReservas() {
    history.back();
}

function salvarQuarto() {

    const numero =
        document.getElementById("numero").value;

    const tipo =
        document.getElementById("tipo").value;

    if (!numero || !tipo) {
        alert("Preencha todos os campos.");
        return;
    }

    const quartos =
        JSON.parse(localStorage.getItem("quartos")) || [];

    quartos.push({
        numero,
        tipo
    });

    localStorage.setItem(
        "quartos",
        JSON.stringify(quartos)
    );

    alert("Quarto cadastrado com sucesso!");

    window.location.href = "index.html";
}

function salvarReserva() {

    const hospede =
        document.getElementById("hospede").value;

    const entrada =
        document.getElementById("entrada").value;

    const saida =
        document.getElementById("saida").value;

    const params =
        new URLSearchParams(window.location.search);

    const numero =
        params.get("numero");

    const reservas =
        JSON.parse(localStorage.getItem("reservas")) || [];

    reservas.push({
        hospede,
        entrada,
        saida,
        numero
    });

    localStorage.setItem(
        "reservas",
        JSON.stringify(reservas)
    );

    alert("Reserva cadastrada com sucesso!");

    history.back();
}

function excluirQuarto(numero) {

    itemParaExcluir = numero;
    tipoExclusao = "quarto";

    document.getElementById("tituloModal")
        .innerText = "Excluir Quarto";

    document.getElementById("textoModal")
        .innerText =
        `Deseja realmente excluir o quarto ${numero}?`;

    document.getElementById("modal")
        .style.display = "flex";
}

function excluirReserva(id) {

    itemParaExcluir = id;
    tipoExclusao = "reserva";

    document.getElementById("tituloModal")
        .innerText = "Excluir Reserva";

    document.getElementById("textoModal")
        .innerText =
        "Deseja realmente excluir esta reserva?";

    document.getElementById("modal")
        .style.display = "flex";
}

function fecharModal() {

    document.getElementById("modal")
        .style.display = "none";
}

function confirmarExclusao() {

    if (tipoExclusao === "quarto") {

        let quartos =
            JSON.parse(localStorage.getItem("quartos")) || [];

        quartos = quartos.filter(
            q => q.numero != itemParaExcluir
        );

        localStorage.setItem(
            "quartos",
            JSON.stringify(quartos)
        );

        location.reload();
    }

    if (tipoExclusao === "reserva") {

        let reservas =
            JSON.parse(localStorage.getItem("reservas")) || [];

        reservas.splice(itemParaExcluir, 1);

        localStorage.setItem(
            "reservas",
            JSON.stringify(reservas)
        );

        location.reload();
    }

    fecharModal();
}

window.onload = () => {

    const titulo =
        document.getElementById("tituloQuarto");

    if (titulo) {

        const params =
            new URLSearchParams(window.location.search);

        const numero =
            params.get("numero");

        const tipo =
            params.get("tipo");

        titulo.innerText =
            `Reservas do Quarto ${numero} - ${tipo}`;
    }

    const tabelaQuartos =
        document.getElementById("tabelaQuartos");

    if (tabelaQuartos) {

        const quartos =
            JSON.parse(localStorage.getItem("quartos")) || [];

        quartos.forEach(quarto => {

            tabelaQuartos.innerHTML += `
            
                <tr>

                    <td>${quarto.numero}</td>

                    <td>${quarto.tipo}</td>

                    <td>

                        <button
                        onclick="abrirReservas('${quarto.numero}','${quarto.tipo}')">
                            Ver Reservas
                        </button>

                        <button
                        class="danger"
                        onclick="excluirQuarto('${quarto.numero}')">
                            Excluir
                        </button>

                    </td>

                </tr>

            `;
        });
    }

    const listaReservas =
        document.getElementById("listaReservas");

    if (listaReservas) {

        const params =
            new URLSearchParams(window.location.search);

        const numero =
            params.get("numero");

        const reservas =
            JSON.parse(localStorage.getItem("reservas")) || [];

        reservas
            .filter(r => r.numero == numero)
            .forEach((r, index) => {

                listaReservas.innerHTML += `
                
                    <tr>

                        <td>${index + 1}</td>

                        <td>${r.hospede}</td>

                        <td>${r.entrada}</td>

                        <td>${r.saida}</td>

                        <td>

                            <button
                            class="danger"
                            onclick="excluirReserva(${index})">
                                Excluir
                            </button>

                        </td>

                    </tr>

                `;
            });
    }
};