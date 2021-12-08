import React from 'react'
import FullheightIframe from "./FullheightIframe"

export default function CachePageContainer() {
    const [showIframe, setshowIframe] = React.useState(false)
    function handleButtonClick() {
      setshowIframe(!showIframe)
      console.log(showIframe)
    }
    return (
        <div>
             <button onClick ={handleButtonClick}>show Iframe</button>
             {showIframe ?  <FullheightIframe id="1921Adidas" showIframe = {showIframe} URL="https://content.lumen-research.com/cachepages/1921.html" /> : "" }
        </div>
    )
}
