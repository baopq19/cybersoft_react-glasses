import React, { Component } from 'react'

export default class Model extends Component {
    render() {
        return (
            <div className="container">
                <div className="row model">
                    <div className="col col-12 col-md-6">
                        <div className="model-imgs">
                            <img className="model-bg" src="./images/model.jpg"></img>

                        </div>
                    </div>
                    <div className="col col-12 col-md-6">
                        <div className="model-imgs try-model">
                            <img className="model-bg" src="./images/model.jpg"></img>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
