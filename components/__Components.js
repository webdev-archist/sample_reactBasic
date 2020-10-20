import React from "react"
import Navbar from "./bootstrap/Navbar.js"
// import javascriptCascadingSheet from "./vendor/javascriptCascadingSheet.js"
const javascriptCascadingSheet = {
    jcs: function(){
         console.log('dans /assets/js/javascriptCascadingSheet.js, in jcs fontion')
        //  alert('dans /assets/js/javascriptCascadingSheet.js, in jcs fontion')
    }
}
// const GLOABAL_SCHEMA = curl "télécharger le fichier"






export default class Components extends React.Component {
     constructor(props) {
        super(props);
        // console.log(props.data.customSetting.map((v)=>{return props.data[Object.keys(v)[0]][v[Object.keys(v)[0]]]}));
         this.state = { 
             data: props.data,
             // customSetting: props.data.customSetting.map((v)=>{return props.data[Object.keys(v)[0]][v[Object.keys(v)[0]]]}) 
             //     || 
             //     customSetting.map((v)=>{return props.data[Object.keys(v)[0]][v[Object.keys(v)[0]]]})
             customSetting: props.data.customSetting || this.customSetting || "the variable this.customSetting as not been initialized !"
         }
         this.parentState = this.state
         String.prototype.jcs = javascriptCascadingSheet.jcs
     }
 
     get___card = (type)=>{
         console.log(this.props.data.card)
         if(!Array.isArray(type))throw "get___BreadcrumbList: xxx argument is not an array"
         return (
             <div className="card" style={{width: "18rem"}}>
                 <div className="card-body">
                     { type === "body" && this.props.data.card[type].body }
                     <h5 className="card-title">Card title</h5>
                     <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" className="card-link">Card link</a>
                     <a href="#" className="card-link">Another link</a>
                 </div>
             </div>
         )
     }
     get___breadcrumb = (config, i)=>{
         if(!config.items)throw "get___navbar: xxx 'config.items' doesnot exist"
         let {schema, type, jcs, className} = config
         if(jcs)jcs.jcs()
         let model = this.parentState.data[config.schema.match(/-|default/) ? "BreadcrumbList" : config.schema]
         return (
             <nav key={i} aria-label="breadcrumb">
                 <ol className={"breadcrumb" + config.className || ""} vocab="https://schema.org/" configof="BreadcrumbList">
                     <li className={"breadcrumb-item" + (type.length == 0 ? " active" : "")} property="itemListElement" typeof="ListItem">
                         <a href="#" property="item" typeof="WebPage">
                             <span property="name">Home</span>
                         </a>
                     </li>
                     {console.log('IL FAUT CREER UN PROCEDER POUR INJECTER LES DATA DE LA PAGE COURANTES POUR LE BREADCRUMB')}
                     {config.items.map((item, i)=>{
                        for(a in model) 
                            if(!item[a]) return <p key={i}>Le component '{config.schema}' ne comporte pas les attributes requis: {model}</p>
                        return(
                            <li key={item.position} className={"breadcrumb-item" + (config.length-1 == i ? "" : " active")} aria-current="page">
                                <a href={item.item} property="item" typeof="WebPage">
                                    <span property="name">{item.name}</span>
                                </a>
                            </li>
                        )
                     })}
                 </ol>
             </nav>
         )
     }
    get___navbar = (config, i)=>{
        console.log(i);
        if(!config.items)throw "get___navbar: xxx 'config.items' doesnot exist"
        let {schema, type, items, jcs, className} = config
        console.log("ééééééééééééé");

        return <Navbar key={i} data={{type, schema, items}} />
    } 
 
    render() { 
        // console.log('oo');
        // console.log(this.parentState.customSetting)

        
        //  console.log(this.parentState);
        // this.parentState.customSetting.forEach((component)=>{
        //     console.log("get___"+Object.keys(component)[0]);
        //     console.log(this["get___"+Object.keys(component)[0]](component[Object.keys(component)[0]]))
        // })
        return ( 
            this.parentState.customSetting.map((component, i)=>{
                let component_name = Object.keys(component)[0]
                console.log("ttttttttttttttttt");
                return this["get___"+component_name](component[component_name], i)
            })
        );
    }
}