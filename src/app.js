

//const MusicSVGs = document.querySelectorAll('.music-svg')
const slideshowImages = document.querySelectorAll('.slideshow__item')


// Starts with a random index 
let currentIndex = Math.round(Math.floor(Math.random() * slideshowImages.length))
let lastIndex = currentIndex - 1


const config = {
   slideshowInterval: 10000,
   animationDuration: '20s',
}

/**
 * Carousel / SlideShow
 */
const changeBackground = () => {
   lastIndex = currentIndex
   
   if(currentIndex < slideshowImages.length -1) currentIndex++
   else currentIndex = 0
   
   let current = slideshowImages[currentIndex]
   let prev = slideshowImages[lastIndex]
   let next = currentIndex < slideshowImages.length - 1 ? slideshowImages[currentIndex+1] : slideshowImages[0]

   let currentClasses = current.className.split(' ')
   let prevClasses = prev.className.split(' ')

   // Reset next images animation so it starts over
   next.style.animation = ''

   current.style.animation = `${currentClasses[1]} ${config.animationDuration} infinite linear alternate`
   currentClasses.push('shown')
   current.className = currentClasses.join(' ')
   prev.className = prevClasses.filter(name => name !== 'shown').join(' ')
}


export default () => {
   changeBackground()

   setInterval(() => {
      changeBackground()
   }, config.slideshowInterval)

   
}
