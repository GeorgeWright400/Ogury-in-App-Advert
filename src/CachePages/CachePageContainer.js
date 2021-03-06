import React, {useEffect} from 'react'
import FullheightIframe from "./FullheightIframe"
import InAppAdContainer from './InAppAdContainer'

export default function CachePageContainer() {
    const [showIframe, setshowIframe] = React.useState(0)
    const [cachePageA, setcachePageA] = React.useState("https://content.lumen-research.com/cachepages/1921.html")
    const [cachePageB, setcachePageB] = React.useState("https://content.lumen-research.com/cachepages/1927.html")

    const [videoSrc, setvideoSrc] = React.useState("https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/MSFT_Thumbnail.mp4")
    const [topImage, settopImage] = React.useState("https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/01_Top.jpeg")
    const [bottomImage, setbottomImage] = React.useState("https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/02_Bottom.jpeg")
    const [adLogo, setadLogo] = React.useState("https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/MircrosoftLogo.png")
    const [companyName, setcompanyName] = React.useState("Microsoft")
    const [loaded, setLoaded] = React.useState(false)
    const [playVideo, setplayVideo] = React.useState(false)

    function handleButtonClick() {
        if (showIframe < 1) {
            setplayVideo(false)
            setshowIframe(showIframe +1)
        }
    }

    document.addEventListener("LRIsReady", () => {
        setLoaded(true);
        setplayVideo(true)
        window.LRRegisterCustomEndHandler(() => {
            let nextButton = document.getElementById('next-button');
            let nextSpinner = document.getElementById('next-spinner');
            handleButtonClick();
            nextButton.style.display = 'none';
            nextSpinner.style.display = 'block';
            window.postMessage(
                {
                  type: 'LS_EXT_NAVIGATE',
                  url: window.location.href,
                },
                window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''),
              );
            window.LRRegisterCustomEndHandler(window.LRhandleStepEnd)
            setTimeout(() => {
                nextButton.style.display = 'block';
                nextSpinner.style.display = 'none';
            }, window.FROM_SERVER.nextButtonTime || 5000);
        })
    })

    useEffect(() => {
        let parameter = new URLSearchParams(window.location.search)
        let URLCachePageId = parseInt(parameter.get("cache_page_id"))
        if (URLCachePageId === 1921) {
            setcachePageA("https://content.lumen-research.com/cachepages/1921.html")
            setcachePageB("https://content.lumen-research.com/cachepages/1927.html")
        
            setvideoSrc("https://content.lumen-research.com/cache_page_data/OguryAdidasAd/Adidas_Thumbnail.mp4")
            settopImage("https://content.lumen-research.com/cache_page_data/OguryAdidasAd/Top+Adidas+Skin.jpeg")
            setbottomImage("https://content.lumen-research.com/cache_page_data/OguryAdidasAd/Bottom+Adidas+Skin.jpeg")
            setadLogo("https://content.lumen-research.com/cache_page_data/OguryAdidasAd/Top+Adidas+Skin.jpeg")
            setcompanyName("Adidas")
            if (!parameter.get("session_id")) {
                setLoaded(true)
            }
        }
        else if (URLCachePageId === 1925) {
            setcachePageA("https://content.lumen-research.com/cachepages/1925.html")
            setcachePageB("https://content.lumen-research.com/cachepages/1927.html")
        
            setvideoSrc("https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/MSFT_Thumbnail.mp4")
            settopImage("https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/01_Top.jpeg")
            setbottomImage("https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/02_Bottom.jpeg")
            setadLogo("https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/MircrosoftLogo.png")
            setcompanyName("Microsoft")
            if (!parameter.get("session_id")) {
                setLoaded(true)
            }
        }
        else {
            if (!parameter.get("session_id")) {
                setLoaded(true)
            }
        }
        return () => {
            setLoaded(false)
        }
    }, [])
    return (
        <div>
             {showIframe === 0 ?  <FullheightIframe id="test" showIframe URL={cachePageA} /> : "" }
             {showIframe === 1 ?  <FullheightIframe id="clutter" showIframe URL={cachePageB} /> : "" }
            {loaded ?  < InAppAdContainer playVideo = {playVideo} videoSrc = {videoSrc} topImage = {topImage} bottomImage = {bottomImage} adLogo = {adLogo} companyName = {companyName} /> : "" }
            {/* <button style={{zIndex: 3, position: "fixed", bottom: 20 }} onClick ={handleButtonClick}>Show Next Page</button> */}
        </div>
    )
}
