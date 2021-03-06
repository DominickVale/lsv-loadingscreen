import config from './config'
import progressBar from './progressBar'

const muteButton = document.querySelector('.music__button')
const slideshowImages = document.querySelectorAll('.slideshow__item')
const tips = document.querySelector('.tips')
const audio = document.querySelector('audio')

// Starts with a random index 
let currentSlideIndex = Math.round(Math.floor(Math.random() * slideshowImages.length))
let lastSlideIndex = currentSlideIndex - 1
let tipsCounter = 0

let musicMuted = false


/**
 * Carousel / SlideShow
 */
const changeBackground = () => {
   lastSlideIndex = currentSlideIndex
   
   if(currentSlideIndex < slideshowImages.length -1) currentSlideIndex++
   else currentSlideIndex = 0
   
   let current = slideshowImages[currentSlideIndex]
   let prev = slideshowImages[lastSlideIndex]
   let next = currentSlideIndex < slideshowImages.length - 1 ? slideshowImages[currentSlideIndex+1] : slideshowImages[0]

   let currentClasses = current.className.split(' ')
   let prevClasses = prev.className.split(' ')

   // Reset next images animation so it starts over
   next.style.animation = ''

   current.style.animation = `${currentClasses[1]} ${config.animationDuration} infinite linear alternate`
   currentClasses.push('shown')
   current.className = currentClasses.join(' ')
   prev.className = prevClasses.filter(name => name !== 'shown').join(' ')
}


const changeTips = () => {
   tips.innerHTML = config.tips[tipsCounter]

   if(tipsCounter < config.tips.length -1) tipsCounter++
      else tipsCounter = 0
}


const muteButtonHandler = evt => {

   let mutedIcon = `
   <svg width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g class="music__icon--muted" opacity="0.2">
         <path d="M1 17.1426V11.4856H6.65704L15.1426 3V31.2852L6.65704 22.7996H1V17.1426Z" stroke="#E5EAFE" stroke-width="2" stroke-miterlimit="10"/>
         <path d="M18.9141 12.8999L27.3996 21.3855" stroke="#E5EAFE" stroke-width="2" stroke-miterlimit="10"/>
         <path d="M18.9141 21.3855L27.3996 12.8999" stroke="#E5EAFE" stroke-width="2" stroke-miterlimit="10"/>
      </g>
   </svg>
   `
   const volumeIcon = `
   <svg width="28" height="33" viewbox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.4">
         <path class="music-svg" d="M1 16.4481V11.0689H6.37924L14.4481 3V29.8962L6.37924 21.8273H1V16.4481Z" stroke="#E5EAFE" stroke-width="2" stroke-miterlimit="10"/>
         <path class="music-svg" d="M18.0352 20.9307C20.5105 20.9307 22.5179 18.9234 22.5179 16.448C22.5179 13.9727 20.5105 11.9653 18.0352 11.9653" stroke="#E5EAFE" stroke-width="2" stroke-miterlimit="10"/>
         <path class="music-svg" d="M18.0352 7.48291C22.9867 7.48291 27.0006 11.4967 27.0006 16.4483C27.0006 21.3999 22.9867 25.4137 18.0352 25.4137" stroke="#E5EAFE" stroke-width="2" stroke-miterlimit="10"/>
      </g>
   </svg>
   `

   evt.currentTarget.innerHTML = musicMuted ? volumeIcon : mutedIcon
   audio.muted = !audio.muted
   musicMuted = !musicMuted
}

const setCursor = () => {
   document.body.addEventListener('mousemove', evt => {
   let cursor = document.querySelector('.cursor__main')
   const cursorOffset = config.cursorOffset
   cursor.style.transform = `translate(${evt.clientX-cursorOffset}px, ${evt.clientY-cursorOffset}px)`
   })
}
export default () => {
   progressBar()
   changeBackground()
   changeTips()
   setCursor()

   audio.volume = config.audioVolume
   muteButton.addEventListener('click', muteButtonHandler)
   setInterval(() => {
      changeBackground()
      changeTips()
   }, config.slideshowInterval)
}

/**
 * todo:
 * finish progress bar
 * polish layout
 */
