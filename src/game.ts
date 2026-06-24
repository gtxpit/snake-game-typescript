import { drawGame } from './main.ts'
import { gameInterval } from './main.ts'
import { btnPlayGame, gameContainer } from './main.ts'

export let snake = [
    [5, 5],
    [4, 5],
    [3, 5]
]

export let score: number = 0
export let direction: string = 'right'
export let food: [number, number] = [8, 5]

export function setDirection(newDir: string) {
    if (
        (direction === 'up' && newDir === 'down') ||
        (direction === 'down' && newDir === 'up') ||
        (direction === 'left' && newDir === 'right') ||
        (direction === 'right' && newDir === 'left')
    ) {
        return
    }
    direction = newDir
}

function gameOver(): void {
    clearInterval(gameInterval)
    alert('Вы проиграли((')
    // сброс в первоначальное состояние
    snake = [
        [5, 5],
        [4, 5],
        [3, 5]
    ]
    direction = 'right'
    score = 0
    food = [8, 5]

    gameContainer.style.display = 'none'
    btnPlayGame.style.display = 'inline-block'
}

export function moveSnake() {
    let x = snake[0][0]
    let y = snake[0][1]
    let newHead: [number, number] = [x, y]
    
    if (direction === 'right') newHead = [x + 1, y]
    else if (direction === 'left') newHead = [x - 1, y]
    else if (direction === 'up') newHead = [x, y - 1]
    else if (direction === 'down') newHead = [x, y + 1]

    if (newHead[0] < 0 || newHead[0] >= 20 || newHead[1] < 0 || newHead[1] >= 20) {
        gameOver()
        return
    }

    for (let i = 0; i < snake.length; i++) {
        if (snake[i][0] === newHead[0] && snake[i][1] === newHead[1]) {
            gameOver()
            return
        }
    }

    snake.unshift(newHead)

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
        score++
        food = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]
    } else {
        snake.pop()
    }

    drawGame()
}