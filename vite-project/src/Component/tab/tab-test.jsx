import Accordian from "../Accordion";
import RandomColor from "../RandomColor";
import StarRating from "../StarRating";
import Tabs from "./tabs";

export default function TabTest() {
    const tabs = [{
        label: 'tab1',
        conent: <Accordian/>
    }, {
        label: 'tab2',
        conent: <StarRating/>
    }, {
        label: 'tab3',
        conent:<RandomColor/>
    }]
const handleChange=(currentTabIndex)=>{
console.log(currentTabIndex);


}
    return <Tabs  tabsContent={tabs} onChange={handleChange}/>
}