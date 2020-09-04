// import javascriptCascadingSheet from "./vendor/javascriptCascadingSheet.js"
const javascriptCascadingSheet = {
    jcs: function(){
         console.log('dans /assets/js/javascriptCascadingSheet.js, in jcs fontion')
        //  alert('dans /assets/js/javascriptCascadingSheet.js, in jcs fontion')
    }
}
// const GLOABAL_SCHEMA = curl "télécharger le fichier"

class Navbar extends mySchemaObject {
    typing = {
        '': ['brand'],
        default: ['brand'],
        /******************/
    }
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            config: props.data,
            type: this.typing[props.data.type]
        }
        //Le 'schema items': OBJET QUI PREDEFINI LES DIFFERENTES REPRESENTATIONS DE SES DIFFERENT 'item'
        this.SCHEMA_ITEMS = {
            //PAR EXEMPLE ICI, L'item 'brand' PEUT FAIRE L'OBJET DE 5 REPRESENTATIONS DIFFERENTES
            brand: ['', 'brand', 'organization', 'person', 'service', 'product'],
            menu: ['', 'main_menu_'],
        }
    }
    brand = (config)=> {
        console.log("this.brand():: essayer d'intégrer une balise <picture/> plutot que <figure/>")
        // console.log(config);
        let {type, schema} = config, errormsg = '', supportedTypes = {person: {}, organization: {}, product: {}, service: {}}
        
        // RECUPERE L'OBJET SCHEMA CONCERNANT LE type DE L'ITEM (type défini dans le composant parent (Navbar))
        // SI LE type EXISTE DANS 'this.SCHEMA_ITEMS.brand',    ET S'IL N'EXISTE PAS
        // ARRAY S'IL LE TROUVE                                 ET SINON, DIFFERENT D'ARRAY...
        let schemaType = this.SCHEMA_ITEMS.brand.indexOf(type) != -1 ? this.findSchema(schema) : this.unknownItem(type, 'brand')
        if(Array.isArray(schemaType)){
            supportedTypes[type] = this[type](config)
        }else errormsg = schemaType
        return(
            <a className="navbar-brand" href={config.url} property="url">
                <div property="aggregateRating" typeof="AggregateRating">
                    <span property="ratingValue">{config.aggregateRating.ratingValue || 0}</span> stars -
                    based on <span property="reviewCount">{config.aggregateRating.reviewCount || 0}</span> reviews
                </div>
                <h1 property='slogan'>{config.slogan}</h1>
                <figure vocab="https://schema.org/" typeof="ImageObject">
                    <img src={config.logo.contentUrl} alt="" property="contentUrl" itemprop="logo"/>
                    <figcaption property="caption">{config.logo.caption}</figcaption>
                    <div class="hide">
                        <p>By <span property="author">{config.logo.author}</span>
                        Photographed in</p>
                        <span property="contentLocation">{config.logo.contentLocation}</span>
                        <p>Date uploaded:
                        <meta property="datePublished" content={config.logo.datePublished} /></p>
                        <span property="description">{config.logo.description}</span>
                    </div>
                </figure>
            </a>
        )
    }
    person = () => {
        
    }
    organization = () => {}
    product = () => {}
    service = () => {

    }



    render() {



{/** --------------------------------------------------------------------------
     --------------------------------------------------------------------------
     --------------------------------------------------------------------------
CE BOUT DE CODE SERT A FILTRER LES items ENTREES EN props
ET QUE LE SCHEMA DE CE COMPONNENT A BIEN ETE RESPECTER...
**/}

        // config: JE RECUPERE LA CONFIG '{type, schema, items}' DES props QUI ONT ETE INTEGRES PAR 'get___navbar(config)'
        const {config} = this.state 
        
        // filledItems: EN COMPARANT LE 'schema items' AVEC LES ITEMS RECU DES props, 
        // JE RECUPERE AINSI LA LISTE DES ITEMS COMPATIBLES AVEC CEUX SUPPORTES PAR CE COMPOSANT Navbar
        let filledItems = {}
        for(let itemName in this.SCHEMA_ITEMS)
            filledItems = {...filledItems, 
                [itemName]: config.items.filter(v=>v[itemName])[0][itemName]
            }

        // return'react component': GRACE A CETTE LISTE, J'APPELLE LA FONCTION (AVEC EN ARGUMENT SA CONFIGURATION)
        // CHARGEE DE TRANSFORMER LES DATA EN 'react component'
        filledItems = Object.keys(filledItems).map((key)=>{
            // console.log(key)
            filledItems[key].type == '' ? this.SCHEMA_ITEMS[key][1] : filledItems[key].type
            return this[key] ? this[key](filledItems[key]) : <p>La methode '{key}' n'existe pas => vous devez la créer dans 'Navbar'</p>
        })
{/** --------------------------------------------------------------------------------------------------------------------------------------------------- **/}
        

        console.log(filledItems)
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light" vocab="https://schema.org/" typeof="Brand">
                {filledItems}
                
                 <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="collapsibleNavId">
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                           <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                           </li>
                           <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                           </li>
                           <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                     <a className="dropdown-item" href="#">Action 1</a>
                                     <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                           </li>
                      </ul>
                      <form className="form-inline my-2 my-lg-0">
                           <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                 </div>
            </nav>
        )
    }
}


class Components extends React.Component {
     constructor(props) {
         super(props);
         // console.log(props.data.customSetting.map((v)=>{return props.data[Object.keys(v)[0]][v[Object.keys(v)[0]]]}));
         this.state = { 
             data: props.data,
             // customSetting: props.data.customSetting.map((v)=>{return props.data[Object.keys(v)[0]][v[Object.keys(v)[0]]]}) 
             //     || 
             //     customcustomSetting.map((v)=>{return props.data[Object.keys(v)[0]][v[Object.keys(v)[0]]]})
             customSetting: props.data.customSetting || this.customcustomSetting || "the variable this.customcustomSetting as not been initialized !"
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
     get___breadcrumb = (config)=>{
         if(!config.items)throw "get___navbar: xxx 'config.items' doesnot exist"
         let {schema, type, jcs, className} = config
         if(jcs)jcs.jcs()
         let model = this.parentState.data[config.schema.match(/-|default/) ? "BreadcrumbList" : config.schema]
         return (
             <nav aria-label="breadcrumb">
                 <ol className={"breadcrumb" + config.className || ""} vocab="https://schema.org/" configof="BreadcrumbList">
                     <li className={"breadcrumb-item" + (type.length == 0 ? " active" : "")} property="itemListElement" typeof="ListItem">
                         <a href="#" property="item" typeof="WebPage">
                             <span property="name">Home</span>
                         </a>
                     </li>
                     {console.log('IL FAUT CREER UN PROCEDER POUR INJECTER LES DATA DE LA PAGE COURANTES POUR LE BREADCRUMB')}
                     {config.items.map((item)=>{
                        for(a in model) 
                            if(!item[a]) return <p>Le component '{config.schema}' ne comporte pas les attributes requis: {model}</p>
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
    get___navbar = (config)=>{
        if(!config.items)throw "get___navbar: xxx 'config.items' doesnot exist"
        let {schema, type, items, jcs, className} = config

        return <Navbar data={{type, schema, items}} />
    } 
 
    render() { 
    //  console.log(this.parentState);
        // this.parentState.customSetting.forEach((component)=>{
        //     console.log("get___"+Object.keys(component)[0]);
        //     console.log(this["get___"+Object.keys(component)[0]](component[Object.keys(component)[0]]))
        // })
        return ( 
            this.parentState.customSetting.map((component)=>{
                let component_name = Object.keys(component)[0]
                return this["get___"+component_name](component[component_name])
            })
        );
    }
}