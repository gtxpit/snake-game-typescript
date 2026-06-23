import './music.ts';
const btnPlayGame = document.getElementById('btn-play-game') as HTMLButtonElement
const gameContainer = document.getElementById('game-container') as HTMLDivElement

btnPlayGame.addEventListener('click', () => {
    gameContainer.style.display = 'flex'
    btnPlayGame.style.display = 'none'
    drawGame()
})

const canvasGame = document.getElementById('gameCanvas') as HTMLCanvasElement
const paint = canvasGame.getContext('2d')


function drawGame(): void {
    if (!paint) return
    paint.fillStyle = '#00ff00';   // зелёный
    paint.fillRect(10, 10, 20, 20);
    
    const cellSize = 20
    const gridSize = 20

    paint.strokeStyle = '#2a4a2a'
    paint.lineWidth = 1

    for(let i = 0; i <= gridSize; i++){
        paint.beginPath()
        
    }
}