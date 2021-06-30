import React, { Component } from 'react'

export default class Glass extends Component {


    render() {
        return (
            <div className="glass col col-6 col-sm-4 col-md-3 col-xl-2">
                <img src={this.props.url} alt="ahihi" ></img>
            </div>
        )
    }
}
