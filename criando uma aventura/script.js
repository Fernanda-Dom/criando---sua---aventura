<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aventura Interativa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="game-container">
        <h1>Aventura na Floresta</h1>
        <div id="story">
            <p>Você acorda em uma floresta misteriosa. O que você vai fazer?</p>
        </div>
        <div id="choices">
            <button onclick="choose('explorar')">Explorar a floresta</button>
            <button onclick="choose('caminho')">Seguir a trilha</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#game-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 80%;
}

button:hover {
    background-color: #45a049;
}
let storyText = document.getElementById('story');
let choices = document.getElementById('choices');

function choose(option) {
    if (option === 'explorar') {
        storyText.innerHTML = '<p>Você decide explorar a floresta. Após alguns minutos, encontra uma caverna misteriosa.</p>';
        choices.innerHTML = `]
        
        <button onclick="choose('entrarCaverna')">Entrar na caverna</button>
            <button onclick="choose('voltar')">Voltar para a clareira</button>
        `;
    } else if (option === 'caminho') {
        storyText.innerHTML = '<p>Você segue pelo caminho e encontra um rio caudaloso. O que vai fazer?</p>';
        choices.innerHTML = `]
            <button onclick="choose('atravessarRio')">Atravessar o rio</button>
            <button onclick="choose('explorarCaverna')">Voltar e explorar a caverna</button>
        `;
    } else if (option === 'entrarCaverna') {
        storyText.innerHTML = '<p>Você entra na caverna e encontra um tesouro escondido! Parabéns, você ganhou!</p>';
        choices.innerHTML = `<button onclick="restartGame()">Jogar novamente</button>`;
    } else if (option === 'voltar') {
        storyText.innerHTML = '<p>Você decide voltar para a clareira. Agora, o que vai fazer?</p>';
        choices.innerHTML = `]
            <button onclick="choose('explorar')">Explorar a floresta</button>
            <button onclick="choose('caminho')">Seguir o caminho</button>
        `;
    } else if (option === 'atravessarRio') {
        storyText.innerHTML = '<p>Você tenta atravessar o rio, mas a correnteza é forte demais. Você se afasta e busca um lugar mais seguro.</p>';
         choices.innerHTML = `]
            <button onclick="choose('voltar')">Voltar</button>
            <button onclick="choose('explorar')">Explorar a floresta</button>
        `;
    }
}

function restartGame() {
    storyText.innerHTML = '<p>Você acorda em uma floresta misteriosa. O que você vai fazer?</p>';
    
        <button onclick="choose('explorar')">Explorar a floresta</button>
        <button onclick="choose('caminho')">Seguir o caminho</button>
    `;
}
