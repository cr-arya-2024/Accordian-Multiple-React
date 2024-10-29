

import './App.css'
import Accordian from './Component/Accordion'
import SearchAutocomplete from './Component/Auto-search-complete'
import LightDarkMoode from './Component/DarkMode'
import FeatureFlags from './Component/Feature'
import FeatureFlageGlobal from './Component/Feature/context'
import GitHubFinder from './Component/Github-finder'
import ImageSlider from './Component/Image-Slider'
import LoadMore from './Component/Load-more'
import ModalTest from './Component/PopUp/index1'
import QRCode from './Component/QRCode'
import RandomColor from './Component/RandomColor'
import ScrollIndicator from './Component/Scroll-Indicator'
import StarRating from './Component/StarRating'
import TabTest from './Component/tab/tab-test'
import Tabs from './Component/tab/tabs'
import Test from './CustomHooks/useClick/test'
import UseFetchHookTEst from './CustomHooks/useFetch-CostomHook/test'
import Test2 from './CustomHooks/useResize/test'
import TicTAcToe from './TIcTacToe'





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
      {/* <ScrollIndicator url={'https://dummyjson.com/products?'}/> */}
      {/* <TabTest/> */}
      {/* <ModalTest/> */}
      {/* <GitHubFinder/> */}
      {/* <SearchAutocomplete/> */}
      {/* <TicTAcToe/> */}
      {/* <FeatureFlageGlobal>
        <FeatureFlags />
      </FeatureFlageGlobal> */}
      {/* <UseFetchHookTEst/> */}
      <Test/>
      {/* <Test2/> */}
    </>
  )
}

export default App
