

//const MusicSVGs = document.querySelectorAll('.music-svg')
const slideshowImages = document.querySelectorAll('.slideshow__item')


let currentIndex = 0
let lastIndex = 0

const config = {
   slideshowInterval: 20000,
   animationDuration: '30s',
}

const changeBackground = () => {
   lastIndex = currentIndex
   
   if(currentIndex < slideshowImages.length -1) currentIndex++
   else currentIndex = 0
   
   let current = slideshowImages[currentIndex]
   let prev = slideshowImages[lastIndex]

   let currentClasses = current.className.split(' ')
   let prevClasses = prev.className.split(' ')

   current.style.animation = `${currentClasses[1]} ${config.animationDuration} infinite linear alternate`
   currentClasses.push('shown')
   current.className = currentClasses.join(' ')
   prev.className = prevClasses.filter(name => name !== 'shown').join(' ')
}


export default () => {
   console.log('Working')

   changeBackground()

   setInterval(() => {
      changeBackground()
   }, config.slideshowInterval)

   
}
