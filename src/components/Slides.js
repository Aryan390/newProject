import classes from './Slides.module.css'

import Slide from './Slide'
import avengers from '../assets/hd-avengers-wallpaper-ixpap.jpg'
import aladdin from '../assets/aladdin-2019-movie-4k_1558219657.jpg'
import mal from '../assets/angelina-jolie-in-maleficent-wallpaper-preview.jpg'
import shazam from '../assets/shazam-movie-poster-4k_1553074258.jpg'

const newArr = [
  {id: 1, img: avengers, title: 'Avengers'},
  {id: 2, img: aladdin, title: 'Aladdin'},
  {id: 3, img: mal, title: 'Maleficent: mistress of evil'},
  {id: 4, img: shazam, title: 'Shazam'},
]

const Slides = () => {
  return( 
    <ul className={classes.holder}>
      {
        newArr.map(item => <Slide
          key={item.id}
          img = {item.img}
          title = {item.title} 
        />)
      }
    </ul>
  )
}

export default Slides