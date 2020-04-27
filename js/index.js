var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]

var tbody = document.querySelector("table tbody");

// event type for forms: submit and reset
document.querySelector(".form").addEventListener("submit", function(event) {

    event.preventDefault();

    var tr = document.createElement("tr");

    campos.forEach( function(campo) {
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);

    });

    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    
    tbody.appendChild(tr);

    // limpando os campos após a inserção dos dados na tabela
    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;
    
    // adicionando foco no primeiro campo do usuário
    campos[0].focus();
    
});

