function onLoad_Setup(){}

async function inviaDomanda() {
    let domanda = document.getElementById('domanda').value;

    const risposta = document.getElementById('risposta');
    risposta.innerHTML += `<div class="domanda">${domanda}</div><br>`;
    risposta.scrollTop = risposta.scrollHeight;

    document.getElementById('domanda').value = "";


    domanda = {"domanda": domanda};
    console.log(domanda);

    const options = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(domanda)
    };
    
    await fetch("https://ceaab5c5be72.ngrok-free.app/ask", options).then(
        response => response.json()
    ).then((data) => {
        console.log(data);
        risposta.innerHTML += `<div class="risposta">${data.content}</div><br>`;
        risposta.scrollTop = risposta.scrollHeight;
    }).catch(error => console.log("Si è verificato un errore!"))
}