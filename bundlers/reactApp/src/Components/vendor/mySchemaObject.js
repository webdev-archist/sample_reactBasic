import React from 'react'
import schemaorg from "./schema.org"
// import React, { Component } from 'react'
export default class mySchemaObject extends React.Component {
     constructor(p){
          super(p)
alert('mySchemaObject')
          console.log('mySchemaObject')
          console.log(schemaorg);
     }
     unknownItem = (type, itemname) => (
         <p className="schemaorgError">Le type ('{type}') de votre item '{itemname}', ne correspond à aucun schema de l'objet <a href="https://schema.org/version/latest/schemaorg-current-http.jsonld">schemaorg</a>.
         <br/>Veuillez choisir svp entre un de ces {this.SCHEMA_ITEMS[itemname].length} noms d'item: {this.SCHEMA_ITEMS[itemname]}</p>
     )
     findSchema = (url) => {
          console.log("findSchema: " + url);
     }
}
