import React from 'react'
import mySchemaObject from "../vendor/mySchemaObject.js"

console.log("àààààààààààààààà");

export default class Navbar extends mySchemaObject {
     typing = {
         '': ['brand'],
         default: ['brand'],
         /******************/
     }
     constructor(props){
 console.log("ùùùùùùùùùùùùùùùùùùù");
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
     brand = (config, i)=> {
          console.log("deeeeeeeeux");
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
             <a key={i} className="navbar-brand" href={config.url} property="url">
                 <div property="aggregateRating" typeof="AggregateRating">
                     <span property="ratingValue">{config.aggregateRating.ratingValue || 0}</span> stars -
                     based on <span property="reviewCount">{config.aggregateRating.reviewCount || 0}</span> reviews
                 </div>
                 <h1 property='slogan'>{config.slogan}</h1>
                 <figure vocab="https://schema.org/" typeof="ImageObject">
                     <img src={config.logo.contentUrl} alt="" property="contentUrl" itemProp="logo"/>
                     <figcaption property="caption">{config.logo.caption}</figcaption>
                     <div className="hide">
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
         filledItems = Object.keys(filledItems).map((key, i)=>{
             // console.log(key)
             filledItems[key].type == '' ? this.SCHEMA_ITEMS[key][1] : filledItems[key].type
             console.log("unnnnnn");
             return this[key] ? this[key](filledItems[key], i) : <p key={i}>La methode '{key}' n'existe pas => vous devez la créer dans 'Navbar'</p>
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