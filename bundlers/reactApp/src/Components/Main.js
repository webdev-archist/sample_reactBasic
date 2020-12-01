import React from 'react'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }
    render() { 
        return (
            <h1>Hello main component!</h1>
        )
    }
}