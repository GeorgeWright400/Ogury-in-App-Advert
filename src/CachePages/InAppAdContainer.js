import React, { Component } from 'react'

export default class InAppAdContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullScreen: false,
            muted: true,
            screenHeightWithAddressBar: 0
        }
        this.checkForAddressBar = this.checkForAddressBar.bind("this");
        this.switchVideo = this.switchVideo.bind("this");
        this.handleTimeUpdate = this.handleTimeUpdate.bind("this");
        this.closePlayer = this.closePlayer.bind("this");
        this.switchMuted = this.switchMuted.bind("this");

        this.ultimateContainer = React.createRef()
        this.innerContainer = React.createRef()
        this.AdvertVid = React.createRef()
    }

    componentDidMount() {
        // window.addEventListener("scroll", this.checkForAddressBar);

        // document.addEventListener("LRIsReady", () => {
        //     document.getElementById("OguryVideo").currentTime = 0;
        // })
        // document.getElementById('OguryVideo').addEventListener("timeupdate", handleTimeUpdate);
    }




    checkForAddressBar() {
        // if (fullScreen && screenHeightWithAddressBar !== window.innerHeight) {
        //     screenHeightWithAddressBar = window.innerHeight
        //     document.getElementById("container").style.height = window.innerHeight;
        // }
    }

    switchVideo() {
        // const video = document.getElementById("OguryVideo");
        // const container = document.getElementById("container");
        // let LRCustomEvent = new CustomEvent("LRCustomViewability");
        // if (!fullScreen) {
        //     container.style.width = "100vw";
        //     container.style.height = window.innerHeight;
        //     container.style.right = "0px";
        //     container.style.bottom = "0px";

        //     let smallVideoItems = document.getElementsByClassName("showOnSmall");
        //     let largeVideoItems = document.getElementsByClassName("showOnLarge");
        //     for (i = 0; i < smallVideoItems.length; i++) {
        //         smallVideoItems[i].style.display = "none"
        //     }
        //     for (i = 0; i < largeVideoItems.length; i++) {
        //         largeVideoItems[i].style.display = "block"
        //     }
        //     fullScreen = true
        // } else {
        //     container.style.width = "200px";
        //     container.style.height = "113px";
        //     container.style.right = "16px";
        //     container.style.bottom = "66px";
        //     fullScreen = false
        //     let smallVideoItems = document.getElementsByClassName("showOnSmall");
        //     let largeVideoItems = document.getElementsByClassName("showOnLarge");
        //     for (i = 0; i < smallVideoItems.length; i++) {
        //         smallVideoItems[i].style.display = "flex"
        //     }
        //     for (i = 0; i < largeVideoItems.length; i++) {
        //         largeVideoItems[i].style.display = "none"
        //     }
        // }
        // setTimeout(() => {
        //     video.dispatchEvent(LRCustomEvent);
        // }, 1000);
    }



    handleTimeUpdate() {
        // const smallVideo = document.getElementById('OguryVideo');
        // if (Math.round(smallVideo.currentTime) >= 5) {
        //     document.getElementById("closeSmall").style.display = "block";
        //     document.getElementById("smallLoading").style.display = "none";
        // }
        // const timeLeftText = document.getElementById('timeLeft');
        // const timeRemaining = Math.round(smallVideo.duration) - Math.round(smallVideo.currentTime);
        // timeLeftText.innerHTML = "Your content will resume in " + timeRemaining

        // let elem = document.getElementById("myBar");
        // let loaderWidth = (Math.round(smallVideo.currentTime + 1) / Math.round(smallVideo.duration)) * 100;
        // if (loaderWidth > 100) {
        //     elem.style.width = "100%";
        // }
        // else {
        //     elem.style.width = loaderWidth + "%";
        // }
    }
    closePlayer() {
        // document.getElementById("ultimateContainer").style.display = "none"
    }

    switchMuted() {
        // const video = document.getElementById("OguryVideo");
        // let muteButtons = document.getElementsByClassName("muteButtons");
        // if (muted) {
        //     video.muted = !video.muted;
        //     for (i = 0; i < muteButtons.length; i++) {
        //         muteButtons[i].src = "https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/volume.png"
        //     }
        //     muted = false
        // }
        // else {
        //     video.muted = !video.muted;
        //     for (i = 0; i < muteButtons.length; i++) {
        //         muteButtons[i].src = "https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/volume-off-indicator.png"
        //     }
        //     muted = true
        // }
    }
    render() {
        return (
            <div>
                <div id="ultimateContainer" style={{ position: "fixed", bottom: 8, right: 16, zIndex: 4 }}>
                    <div id="container"
                        style={{ display: "flex", width: 200, height: 113, position: "fixed", bottom: 66, right: 16, flexDirection: "column", transition: "width 500ms, height 300ms", transitionTimingFunction: "ease-out" }}>
                        <img id="topImage" src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/01_Top.jpeg" className="showOnLarge" style={{ flexGrow: 1, display: "none" }} />
                        <div className="showOnSmall"
                            style={{ position: "absolute", left: 4, top: 4, background: "rgb(0 0 0 / 50%)", borderRadius: 4, paddingRight: 4, overflow: "hidden", zIndex: 8, display: "flex", gap: 4, alignItems: "center", }}>
                            <img id="adLogo" src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/MircrosoftLogo.png" style={{ height: 20, }} />
                            <p style={{ fontFamily: "'Roboto', sans-serif", color: "white", fontSize: 12, lineHeight: "12px", margin: "0px 2px" }}>Microsoft</p>
                        </div>
                        <div className="showOnSmall"
                            style={{ display: "flex", position: "absolute", right: 4, top: 4, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 2, zIndex: 8, }}>
                            <i id="closeSmall" onClick={this.closePlayer()} style={{ color: "white", display: "none", padding: "0px 2px", cursor: "pointer", }}
                                className="fas fa-times"></i>
                            <div id="smallLoading" style={{ display: "block", }} className="loader"></div>
                        </div>
                        <div className="showOnSmall"
                            style={{ position: "absolute", display: "grid", right: 4, bottom: 4, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: "2px 4px", zIndex: 8, }}>
                            <img onClick={this.switchVideo()} style={{ cursor: "pointer", height: 18 }}
                                src="https://content.lumen-research.com/cache_page_data/OguryAdidasAd/enlarge+(1).png" />
                        </div>
                        <div className="showOnSmall"
                            style={{ width: "fit-content", position: "absolute", left: 4, bottom: 6, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 4, zIndex: 8, }}>
                            <img className="muteButtons smallIcons" onClick={this.switchMuted()} style={{ cursor: "pointer", height: 12, }}
                                src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/volume-off-indicator.png" />
                        </div>

                        <div className="showOnSmall"
                            style={{ width: "fit-content", position: "absolute", right: 8, top: 4, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: "0px 3px", zIndex: 8, }}>
                            <img style={{ cursor: "pointer", height: 14, }} className="smallIcons"
                                src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/info.png" />

                        </div>
                        <div className="showOnLarge"
                            style={{ width: "fit-content", display: "none", position: "absolute", right: 46, top: 8, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 8, zIndex: 8, }}>
                            <p id="timeLeft" style={{ fontFamily: "'Roboto', sans-serif", color: "white", fontSize: 14, lineHeight: "14px" }}></p>
                        </div>
                        <div className="showOnLarge"
                            style={{ display: "none", position: "absolute", right: 8, top: 8, background: "rgb(0 0 0 / 50 %)", borderRadius: 4, padding: 6, zIndex: 8, }}>
                            <i onClick={this.switchVideo()} style={{ color: "white", padding: "0px 2px", cursor: "pointer", fontSize: 18, }}
                                className="fas fa-compress"></i>
                        </div>
                        <div className="showOnLarge"
                            style={{ cursor: "pointer", display: "none", position: "absolute", right: 10, bottom: 16, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 12, zIndex: 8, }}>
                            <p style={{ fontFamily: "'Roboto', sans-serif", color: "white", fontSize: 14, lineHeight: "14px" }}>Continue</p>
                        </div>
                        <div className="showOnLarge"
                            style={{ cursor: "pointer", display: "none", position: "absolute", left: 10, bottom: 16, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 8, zIndex: 8, }}>
                            <img style={{ cursor: "pointer", height: 17, }}
                                src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/info.png" />
                        </div>
                        <div className="showOnLarge"
                            style={{ cursor: "pointer", display: "none", position: "absolute", left: 8, top: 8, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 8, zIndex: 8, }}>
                            <img className="muteButtons" onClick={this.switchMuted()} style={{ cursor: "pointer", height: 15, }}
                                src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/volume-off-indicator.png" />
                        </div>
                        <video onEnded={this.closePlayer()} id="OguryVideo" src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/MSFT_Thumbnail.mp4" style={{ width: "100%", height: "auto" }} nocontrols autoPlay playsInline
                            muted>
                        </video>
                        <img id="bottomImage" src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/02_Bottom.jpeg" className="showOnLarge" style={{ flexGrow: 1, display: "none" }} />
                        <div style={{ width: "100%", backgroundColor: "transparent", position: "absolute", bottom: 0, }} id="myProgress">
                            <div id="myBar" style={{ width: "1%", height: 3, backgroundColor: "red", transition: "width 1000ms", transitionTimingFunction: "linear" }}></div>
                        </div>
                    </div >
                </div >
            </div >
        )
    }
}
