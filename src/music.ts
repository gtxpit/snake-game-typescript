const tracks = [
    { name: ' ♬ TRACK 1', src: '/music/track1.mp3' },
    { name: ' ♬ TRACK 2', src: '/music/track2.mp3' },
    { name: ' ♬ TRACK 3', src: '/music/track3.mp3' }
]

let index: number = 0

const audio = document.getElementById('bgm') as HTMLAudioElement
const trackName = document.getElementById('track-name') as HTMLSpanElement
const btnPrev = document.getElementById('btn-prev') as HTMLButtonElement
const btnPlay = document.getElementById('btn-play') as HTMLButtonElement
const btnNext = document.getElementById('btn-next') as HTMLButtonElement

audio.addEventListener('ended', nextTrack)

function loadTrack(index: number): void {
    const track = tracks[index]
    audio.src = track.src
    trackName.textContent = track.name;
    audio.play()
    btnPlay.textContent = 'Включить'
}

function nextTrack(): void {
    index++
    if (index >= tracks.length) {
        index = 0
    }
    loadTrack(index)
}

function prevTrack(): void {
    index--
    if (index < 0) {
        index = tracks.length - 1
    }
    loadTrack(index)
}

function togglePlay(): void {
    if (audio.paused) {
        audio.play();
        btnPlay.textContent = 'Пауза'
    } else {
        audio.pause();
        btnPlay.textContent = 'Играть'
    }
}


const volumeSlider = document.getElementById('volume-slider') as HTMLInputElement
volumeSlider.addEventListener('input', () => {
    const volume = parseInt(volumeSlider.value) / 100
    audio.volume = volume
})

btnNext.addEventListener('click', nextTrack)
btnPrev.addEventListener('click', prevTrack)
btnPlay.addEventListener('click', togglePlay)

loadTrack(index)