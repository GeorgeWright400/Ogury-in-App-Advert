import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class FullheightIframe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iFrameHeight: '100px',
            showIframe: this.props.showIframe
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.showIframe !== this.props.showIframe) {
          this.setState({showIframe: this.props.showIframe})
        }
        if (prevState.showIframe !== this.state.showIframe) {
            const obj = ReactDOM.findDOMNode(this);
            this.setState({
                "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
            });
      }}

    render() {
        return (
            <iframe 
                style={{ width:'100%',  overflow:'visible', display: this.state.showIframe ? "block": "none"}}
                onLoad={() => {
                    const obj = ReactDOM.findDOMNode(this);
                    this.setState({
                        "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
                    });
                }}
                title = {this.props.id}
                ref="iframe"
                src={this.props.URL}
                width="100%"
                height={this.state.iFrameHeight}
                scrolling="no"
                frameBorder="0"
                id={this.props.id}
            />
        );
    }
}
