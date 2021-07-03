import React, { Component } from 'react'
import Model from './Model'

export default class Glass extends Component {
    test() {
        console.log(this.props.src);
    }

    render() {
        return (
            <div className="glass col col-6 col-sm-4 col-md-3 col-xl-2">
                <img src={this.props.url} alt="ahihi" onClick={this.test}></img>
            </div>
        )
    }
}
