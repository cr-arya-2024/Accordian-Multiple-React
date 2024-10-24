import { createContext, useEffect, useState } from "react";
import featureFalgdataServiceCall from "../data";

export const FeatureFlagsContext=createContext(null)


export default function FeatureFlageGlobal({children}){

const[loading,setLoading]=useState(false)
const[enabledFlags,setEnabledFlags]=useState({})

async function fetchFeatureFlags(){
    try{
        setLoading(true)
const response=await featureFalgdataServiceCall()
console.log(response);
setEnabledFlags(response)
setLoading(false)
    }
    catch(error){
        setLoading(false)
        console.log(error);
throw new Error(error)


    }
}


useEffect(()=>{
fetchFeatureFlags()
},[])

    return <FeatureFlagsContext.Provider value={{loading,enabledFlags}}>
        {children}
    </FeatureFlagsContext.Provider>
}
