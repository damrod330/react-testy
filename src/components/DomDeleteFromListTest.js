import React, { Component } from 'react'

export default class DomDeleteFromListTest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            targets: [],
            list: []
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.targets !== props.targets) {
            
            let newList = []
            for (let i = 0; i <= 10; i++) {
                let jsx = (<li key={i}>Prosty element listy {i}</li>)
                newList.push(jsx);
            }

            props.targets.forEach(target => {
                newList.splice(target, 1)
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
        return (
            <ul>
                {this.state.list}
            </ul>
        )
    }
}
