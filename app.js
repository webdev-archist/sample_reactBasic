import React from 'react'
import ReactDOM from 'react-dom'
//
import data from './components/__data.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
//



import $ from 'jquery'
import _ from 'lodash'
//
import mybundle from './assets/js/mybundle_.js'
//



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
