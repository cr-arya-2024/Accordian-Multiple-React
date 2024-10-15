

import './App.css'
import Accordian from './Component/Accordion'
import LightDarkMoode from './Component/DarkMode'
import ImageSlider from './Component/Image-Slider'
import LoadMore from './Component/Load-more'
import QRCode from './Component/QRCode'
import RandomColor from './Component/RandomColor'
import ScrollIndicator from './Component/Scroll-Indicator'
import StarRating from './Component/StarRating'



function App() {


  return (
    <>
     {/* <Accordian /> */}
     {/* <RandomColor /> */}
     {/* <StarRating/> */}
     {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit= {'10'}/> */}
     {/* <LoadMore /> */}
     {/* <QRCode/> */}
{/* <LightDarkMoode/> */}
    <ScrollIndicator url={'https://dummyjson.com/products?'}/>
    </>
  )
}

export default App
