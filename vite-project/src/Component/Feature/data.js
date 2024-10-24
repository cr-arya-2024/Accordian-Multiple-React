const dummyApiResponse={
    showLightAndDarkMode:true,
    showTicTacBoard:true,
    showRandomColorGenerator:true,
    showAccordian:false,
    showTreeView:true
}
function featureFalgdataServiceCall(){
    return new Promise((resolve,reject)=>{
        if(dummyApiResponse){ setTimeout(() => {
            resolve(dummyApiResponse)
        },500);}
        else reject('some Error occured ')
    })
}
export default featureFalgdataServiceCall;