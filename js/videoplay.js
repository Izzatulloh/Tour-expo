const Video = document.querySelector('.laptop_video')
const btn = document.querySelector('.laptop_button')


Video.addEventListener('click', ()=> {
    btn.classList.add('d-none')

})
btn.addEventListener('click', ()=> {
    document.querySelector('video').play()
    btn.classList.add('d-none')
})
