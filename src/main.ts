import './music.ts'
import { moveSnake, snake, food,setDirection} from './game.js'

const btnEndGame = document.getElementById('btnEndGame') as HTMLButtonElement
export const btnPlayGame = document.getElementById('btn-play-game') as HTMLButtonElement
export const gameContainer = document.getElementById('game-container') as HTMLDivElement
const canvasGame = document.getElementById('gameCanvas') as HTMLCanvasElement
const paint = canvasGame.getContext('2d')

export let gameInterval: number | undefined = undefined;

btnPlayGame.addEventListener('click', () => {
    console.log('кнопка нажата')
    if (gameInterval) clearInterval(gameInterval)
     gameInterval = setInterval(moveSnake, 170)
    gameContainer.style.display = 'flex'
    btnPlayGame.style.display = 'none'
    drawGame()
})


export function drawGame(): void {
    if (!paint) return
    const cellSize = 20
    const gridSize = 20

    paint.fillStyle = '#1a2e1a'
    paint.fillRect(0, 0, 400, 400)

    paint.strokeStyle = '#2a4a2a'
    paint.lineWidth = 1
    for (let i = 0; i <= gridSize; i++) {
        paint.beginPath()
        paint.moveTo(i * cellSize, 0)
        paint.lineTo(i * cellSize, 400)
        paint.stroke()
        paint.beginPath()
        paint.moveTo(0, i * cellSize)
        paint.lineTo(400, i * cellSize)
        paint.stroke()
    }

    paint.fillStyle = '#00ff00'
    snake.forEach((segment) => {
        paint.fillRect(segment[0] * cellSize, segment[1] * cellSize, cellSize, cellSize)
    })

    paint.fillStyle = '#ff0000'
    paint.fillRect(food[0] * cellSize, food[1] * cellSize, cellSize, cellSize)
}

btnEndGame.addEventListener('click', () => {
    gameContainer.style.display = 'none'
    btnPlayGame.style.display = 'inline-block'
    if (gameInterval) clearInterval(gameInterval)
    drawGame()
})


document.addEventListener('keydown', (e) => {
    const key = e.key;
    e.preventDefault();

    if (key === 'ArrowUp') { setDirection('up') }
    else if (key === 'ArrowDown') { setDirection('down') }
    else if (key === 'ArrowLeft') { setDirection('left') }
    else if (key === 'ArrowRight') { setDirection('right') }
})