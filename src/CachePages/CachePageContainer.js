import React from 'react'
import FullheightIframe from "./FullheightIframe"
import InAppAdContainer from './InAppAdContainer'

export default function CachePageContainer() {
    const [showIframe, setshowIframe] = React.useState(false)
    function handleButtonClick() {
      setshowIframe(!showIframe)
    }
    return (
        <div>
             <button onClick ={handleButtonClick}>Show Iframe</button>
             {showIframe ?  <FullheightIframe id="1921Adidas" showIframe = {showIframe} URL="https://content.lumen-research.com/cachepages/OguryApp/1921.html" /> : "" }
            {showIframe ?  < InAppAdContainer /> : "" }
        </div>
    )
}
