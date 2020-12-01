import Components from './__Components'

export default class Header extends Components {
    constructor(props) {
        super(props);
        var customSett = [
            {"navbar": {
                logo: {title: 'Japonais-Libre-Pour-Touuus!', img: 'assets/img/castle.jpg'},
            }},
            {"breadcrumb": "overview"},
        ]
        // console.log(props.data.sett.map((v)=>{return props.data[Object.keys(v)[0]][v[Object.keys(v)[0]]]}));
        this.state = {
            props
        }
        this.parentState.props = props
    }
}