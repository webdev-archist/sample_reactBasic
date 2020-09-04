class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Hello footer component!</h1>
                <Ok />
                <section>
                    <a href="archist.me" title="Web digital marketing webmaster" property="reviewedBy" typeof="url">archist.me</a>
                    <p>Last review: <span property="lastReviewed">{this.state.data.lastReviewed}</span></p>
                </section>
            </React.Fragment>
        );
    }
}

function Ok(){
    return <p>oui</p>
}