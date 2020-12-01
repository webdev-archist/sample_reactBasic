import React from 'react'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }
    render() { 
        return (
            <h3>the nav!</h3>
        )
    }
}