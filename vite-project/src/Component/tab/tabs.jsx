import { useState } from "react"
import'./tabs.css'
export default function Tabs({ tabsContent  }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex)
        
    }
    return <div className="wrapper">
        <div className="heading">{
            tabsContent.map((tabItem, index) =>
                <div  onClick={() => handleOnClick(index)} key={tabItem.label}>
                    <span  className="label">{tabItem.label}</span>
                </div>
               )
        }
        </div>
        <div   className="content">
            {
              tabsContent[currentTabIndex] &&   tabsContent[currentTabIndex].conent
            }
        </div>
    </div>

}