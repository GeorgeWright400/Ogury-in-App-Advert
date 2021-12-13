import React, { Component } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import Draggable from 'react-draggable';


export default class InAppAdContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScreen: false,
            muted: true,
            isClosable: false,
            timeRemaining: null,
            loaderWidth: 0,
            deleted: false,
            controlledPosition: { x: 0, y: 0 },
            savedControlledPosition: { x: 0, y: 0 },
            screenHeightWithAddressBar: 0,
            fullScreenHeightWithAddressBar: 0,
            showContinueButton: false,

        }
        this.draggingContainer = React.createRef();
        this.video = React.createRef();
    }
    componentDidMount() {
        this.setState({ fullScreenHeightWithAddressBar: window.innerHeight })
    }


    switchVideo = () => {
        const dragger = this.draggingContainer.current;
        if (this.state.fullScreen) {
            this.setState({ controlledPosition: this.state.savedControlledPosition });
        }
        else {
            this.setState({ savedControlledPosition: { x: dragger.state.x, y: dragger.state.y } });
            this.setState({ controlledPosition: { x: 0, y: 0 } });
            this.setState({ showContinueButton: false });
        }
        this.setState({ "fullScreen": !this.state.fullScreen });
        if (!!this.video.current) {
            let LRCustomEvent = new CustomEvent("LRCustomViewability");
            setTimeout(() => {
                this.video.current.dispatchEvent(LRCustomEvent);
            }, 1000);
        }
    }

    onControlledDrag = (e, position) => {
        const { x, y } = position;
        this.setState({ controlledPosition: { x, y } });
    };

    switchMute = () => {
        this.setState({ "muted": !this.state.muted })
    }

    updateVideoProgress = (e) => {

        if (Math.round(e.target.currentTime) >= 5) {
            this.setState({ "isClosable": true })
        }
        if (Math.round(e.target.currentTime) >= 8) {
            if (this.state.fullScreen) {
                this.setState({ showContinueButton: true })
            }
            else {
                this.setState({ showContinueButton: false })
            }
        }
        const timeRemaining = Math.round(e.target.duration) - Math.round(e.target.currentTime);
        this.setState({ "timeRemaining": parseInt(timeRemaining) })

        let loaderWidth = (Math.round(e.target.currentTime + 1) / Math.round(e.target.duration)) * 100;
        if (loaderWidth < 100) {
            this.setState({ "loaderWidth": loaderWidth })
        }
        else {
            this.setState({ "loaderWidth": 100 })
        }
        if (this.state.fullScreenHeightWithAddressBar !== window.innerHeight) {
            this.setState({ fullScreenHeightWithAddressBar: window.innerHeight })
        }

    }

    deleteVideo = () => {
        this.setState({ "deleted": true })
    }

    render() {
        if (this.state.deleted) {
            return ""
        }
        return (
            <div style={{zIndex:2147483647, position: "relative"}} >
                <Draggable onDrag={this.onControlledDrag} ref={this.draggingContainer} position={this.state.controlledPosition} on bounds="body" disabled={this.state.fullScreen} cancel=".noDrag" >

                    {!this.state.deleted ? <div style={{ position: "fixed", bottom: this.state.fullScreen ? 0 : 8, right: 0, zIndex: 4 }}>
                        <div id="ultimateContainer" style={{ display: "flex", justifyContent: "space-evenly", width: this.state.fullScreen ? "100vw" : 200, height: this.state.fullScreen ? this.state.fullScreenHeightWithAddressBar : 113, position: "fixed", bottom: this.state.fullScreen ? 0 : 66, right: this.state.fullScreen ? 0 : 16, flexDirection: "column", transition: "width 500ms, height 300ms", transitionTimingFunction: "ease-out" }}>
                            <div style={{ height: "100%", backgroundPositionX: "center", backgroundPositionY: "bottom", backgroundSize: "cover", width: "100vw", backgroundImage: `URL('${this.props.topImage}')`, display: this.state.fullScreen ? "block" : "none", }}>

                            </div>

                            <div
                                style={{ position: "absolute", left: 4, top: 4, background: "rgb(0 0 0 / 50%)", borderRadius: 4, paddingRight: 4, overflow: "hidden", zIndex: 8, display: this.state.fullScreen ? "none" : "flex", gap: 4, alignItems: "center", }}>
                                <img alt="vdv" id="adLogo" src={this.props.adLogo} style={{ height: 20, }} />
                                <p style={{ fontFamily: "'Roboto', sans-serif", color: "white", fontSize: 12, lineHeight: "12px", margin: "0px 2px" }}>{this.props.companyName}</p>
                            </div>
                            <div className="noDrag"
                                style={{ display: this.state.fullScreen ? "none" : "flex", position: "absolute", right: 4, top: 4, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: "3px 2px", zIndex: 8, }}>
                                {this.state.isClosable ?
                                    <CloseIcon onClick={this.deleteVideo} style={{ color: "white", padding: "0px", cursor: "pointer", fontSize: 16 }} />
                                    :
                                    <div id="smallLoading" style={{ display: "block" }} className="loader"></div>
                                }
                            </div>
                            <div className="noDrag"
                                style={{ position: "absolute", display: this.state.fullScreen ? "none" : "grid", right: 4, bottom: 6, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: "1px", zIndex: 8, }}>
                                <AspectRatioIcon onClick={this.switchVideo} style={{ cursor: "pointer", height: 18, color: "white" }} />
                            </div>
                            <div className="noDrag"
                                style={{ width: "fit-content", display: this.state.fullScreen ? "none" : "flex", position: "absolute", left: 4, bottom: 6, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 4, zIndex: 8, justifyContent: "center" }}>
                                <img alt="vdv" className="muteButtons smallIcons" style={{ cursor: "pointer", height: 12, }} onClick={this.switchMute}
                                    src={this.state.muted ? "https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/volume-off-indicator.png" : "https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/volume.png"} />
                            </div>

                            <div
                                style={{ display: this.state.fullScreen ? "none" : "flex", width: "fit-content", position: "absolute", right: 30, top: 4, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: "0px 3px", zIndex: 8, justifyContent: "center" }}>
                                <img alt="vdv" style={{ cursor: "pointer", height: 15, padding: "3px 0px" }} className="smallIcons"
                                    src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/info.png" />

                            </div>
                            <div
                                style={{ width: "fit-content", display: this.state.fullScreen ? "block" : "none", position: "absolute", right: 46, top: 8, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 8, zIndex: 8 }}>
                                <p id="timeLeft" style={{ fontFamily: "'Roboto', sans-serif", color: "white", fontSize: 14, lineHeight: "14px", whiteSpace: "nowrap", margin: 2 }}> Your content will resume in {this.state.timeRemaining} seconds</p>
                            </div>
                            <div
                                style={{ display: this.state.fullScreen ? "block" : "none", position: "absolute", right: 8, top: 8, background: "rgba(0, 0, 0, 0.5)", borderRadius: 4, padding: 6, zIndex: 8, }}>
                                <i onClick={this.switchVideo} style={{ color: "white", padding: "0px 2px", cursor: "pointer", fontSize: 18, }}
                                    className="fas fa-compress"></i>
                            </div>
                            <div onClick={this.deleteVideo}
                                style={{ cursor: "pointer", display: this.state.showContinueButton ? "block" : "none", position: "absolute", right: 10, bottom: 12, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 8, zIndex: 8, }}>
                                <p style={{ fontFamily: "'Roboto', sans-serif", color: "white", fontSize: 14, lineHeight: "14px", margin: 2 }}>Continue</p>
                            </div>
                            <div
                                style={{ cursor: "pointer", display: this.state.fullScreen ? "flex" : "none", position: "absolute", left: 10, bottom: 12, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: 8, zIndex: 8, justifyContent: "center" }}>
                                <img alt="vdv" style={{ cursor: "pointer", height: 17, }}
                                    src="https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/info.png" />
                            </div>
                            <div
                                style={{ cursor: "pointer", display: this.state.fullScreen ? "block" : "none", position: "absolute", left: 8, top: 8, background: "rgb(0 0 0 / 50%)", borderRadius: 4, padding: "6px 8px", zIndex: 8, }}>
                                <img alt="vdv" className="muteButtons" style={{ cursor: "pointer", height: 15, }} onClick={this.switchMute}
                                    src={this.state.muted ? "https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/volume-off-indicator.png" : "https://content.lumen-research.com/cache_page_data/OguryMicrosoftAds/volume.png"} />
                            </div>
                            <video
                                ref={this.video}
                                onEnded={this.deleteVideo} 
                                onTimeUpdate={this.updateVideoProgress} src={this.props.videoSrc} style={{ width: "100%", height: "auto" }} nocontrols autoPlay playsInline
                                muted={this.state.muted} >
                            </video>
                            <div style={{ height: "100%", backgroundSize: "cover", backgroundPositionX: "center", backgroundPositionY: "top", width: "100vw", backgroundImage: `URL('${this.props.bottomImage}')`, display: this.state.fullScreen ? "block" : "none", }}>

                            </div>
                            <div style={{ width: "100%", backgroundColor: "transparent", position: "absolute", bottom: 0, }} id="myProgress">
                                <div id="myBar" style={{ width: `${this.state.loaderWidth}%`, height: 3, backgroundColor: "red", transition: "width 1000ms", transitionTimingFunction: "linear" }}></div>
                            </div>
                        </div >
                    </div >
                        : ""}
                </Draggable>
            </div >

        )
    }
}
