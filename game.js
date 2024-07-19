// Отримуємо доступ до канвасу і контексту малювання
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Позиція та розміри гравця
let player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 50,
    height: 50,
    dx: 5,
    dy: 5
};

// Малюємо гравця
function drawPlayer() {
    context.fillStyle = 'blue';
    context.fillRect(player.x, player.y, player.width, player.height);
}

// Очищуємо канвас
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Оновлюємо позицію гравця
function update() {
    clearCanvas();
    drawPlayer();
}

// Обробляємо натискання клавіш
function movePlayer(event) {
    if (event.key === 'ArrowRight' && player.x + player.width < canvas.width) {
        player.x += player.dx;
    } else if (event.key === 'ArrowLeft' && player.x > 0) {
        player.x -= player.dx;
    } else if (event.key === 'ArrowUp' && player.y > 0) {
        player.y -= player.dy;
    } else if (event.key === 'ArrowDown' && player.y + player.height < canvas.height) {
        player.y += player.dy;
    }
    update();
}

// Слухаємо події клавіатури
document.addEventListener('keydown', movePlayer);

// Початковий виклик функції оновлення
update();
