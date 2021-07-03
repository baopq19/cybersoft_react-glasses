import React, { Component } from 'react'
import Glass from './Glass';

export default class Glasses extends Component {
    render() {
        const imgPath = "./images/"; 
        const listGlasses = [
            {id: 1, name: "v1.png"},
            {id: 2, name: "v2.png"},
            {id: 3, name: "v3.png"},
            {id: 4, name: "v4.png"},
            {id: 5, name: "v5.png"},
            {id: 6, name: "v6.png"},
            {id: 7, name: "v7.png"},
            {id: 8, name: "v8.png"},
            {id: 9, name: "v9.png"}
        ];

        return (
            <div className="container">
                <div className="row glasses">
                    {
                        listGlasses.map(item => <Glass key={item.id} url={imgPath + item.name}/>)
                    }
                </div>
            </div>
        )
    }
}
