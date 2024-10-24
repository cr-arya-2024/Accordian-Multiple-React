import { useContext } from "react"
import TicTAcToe from "../../TIcTacToe"
import Accordian from "../Accordion"
import LightDarkMoode from "../DarkMode"
import RandomColor from "../RandomColor"
import { FeatureFlagsContext } from "./context"
import QrCode from "../QRCode"
import LightDarkMode from "../DarkMode"

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext)
    const componentToRender = [
        {
            key: 'showLightAndDarkMode',
            compnent: <LightDarkMoode/>
        },
        {
            key: 'showAccordian',
            compnent: <Accordian />
        },
        {
            key: 'showRandomColorGenerator',
            compnent: <RandomColor />
        },
        {
            key: 'showTicTacBoard',
            compnent: <TicTAcToe />
        },
        {
            key: 'showTreeView',
            compnent: <QrCode/>
        },
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    if (loading) {
        return <h1>loading data plz wait</h1>
    }

    return <div>
        <h1>Feature Flags</h1>
        {
            componentToRender.map((componentItem) =>  checkEnabledFlags(componentItem.key) ? componentItem.compnent : null)
        }
    </div>
}