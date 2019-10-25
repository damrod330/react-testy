import React, { Component } from 'react'

export default class DomEditListTest extends Component {

    constructor(props) {
        super(props)

        let newList = []
        for (let i = 0; i <= 100; i++) {
            let jsx = (<li key={i}><h3>Element listy H2 - {i}</h3></li>)
            newList.push(jsx);
        }

        this.state = {
            targets: [],
            list: newList
        }
    }

    static getDerivedStateFromProps(props, current_state) {

        if (current_state.targets !== props.targets) {
            let newList = [...current_state.list]
            props.targets.forEach(target => {
                newList[target] = <li key={target}>{props.html}</li>
            });

            return {
                targets: props.targets,
                list: newList
            }
        } else {
            return null;
        }

    }

    render() {
        // console.log(this.state.list)
        return (
            <ul id="T03">
                {this.state.list}
            </ul>
        )
    }
}
