import React from 'react'
import ReactDOM from 'react-dom'
//
import data from './Components/__data.js'
import Header from './Components/Header.js'
import Nav from './Components/Nav.js'
import Main from './Components/Main.js'
import Aside from './Components/Aside.js'
import Footer from './Components/Footer.js'
//


import $ from 'jquery'
import _ from 'lodash'
//
// import mybundle from './../js/mybundle_.js' <<== NOT ALLOWED
//



alert('echo "/reactApp/index.js"')
console.log("..or you can write it in script.js..\n---------------------------------------------------\n\n\n\n")
const config = {
     path: "http://127.0.0.1:5500/",
}

const Test = () => (
<p>
    "..I am a react component test..")
</p>)
// ReactDOM.render(<Test />, test)
console.log(data);
ReactDOM.render(<Header data={data.header} />, document.getElementById("header"))
ReactDOM.render(<Nav data={data.nav} />, document.getElementById("nav"))
ReactDOM.render(<Main data={data.main} />, document.getElementById("main"))
ReactDOM.render(<Aside data={data.aside} />, document.getElementById("aside"))
ReactDOM.render(<Footer data={data.footer} />, document.getElementById("footer"))
