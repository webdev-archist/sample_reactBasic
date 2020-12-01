let data, stats, defaults, commonAttributes
// config = {
//     href: 'http://www.e-jlpt.net',
//     host: 'http://e-jlpt.net',
//     hostname: 'http://e-jlpt.net',
//     protocol: 'http',
//     pathname: true,
//     hash: false,
//     port: false,
//     search: false,
// }
stats = {}//IL FAUT FAIRE UNE REQUETE POUR RECUPERER LES DONNES STATISTIQUE (sqlite3, GAds, GA, GTAG, ..)

commonAttributes = {
    className: "a css class name",
    dataSet: "an 'data-' html attribute",
    jcs: "a javascript-cascading-sheet ruleset" || [document.querySelector]
}
defaults = {
    aggregateRating: {ratingValue: 0, reviewCount: 0}
}
export default data = {
    'header': {
        'customSetting': [
            {'navbar': {schema: '',
                type: '',
                items: [
                    {brand: {schema: 'http://schema.org/Brand',
                        type: 'brand',
                        slogan: 'ExampleSlogan', 
                        aggregateRating: stats.aggregateRating || defaults.aggregateRating, 
                        logo: {caption: '', contentUrl: '', author: '', contentLocation: '', datePublished: '', description: '', contentUrl: ''},
                        url: 'http://e-jlpt.net', name: 'El Japonais Libre Pour Tous', identifier: 'e-jlpt', 
                        description: 'Apprendre à apprendre le japonais, intéressant non !? Autodidaxie, conseil&astuces, pièges du japonais, épreuves du JLPT '+(new Date().getFullYear())+', vous saurez tout ici',
                        alternateName: '',
                    }},
                    {menu: {schema: '',
                        type: '',
                    }},
                ]
            }},
            {'breadcrumb': {schema: '',
                type: '',
                items: [], 
                className: "testBreadcrumb",
                jcs: "& a{click: alert('jcs ok'),log('jcs ok');mouseover: style(&, {bg:black,color:white}) }"
            }},
            // {'card': 'body'}
        ],
        'BreadcrumbList': {
            model: {
                "position": 0,
                "name": "Books",
                "item": "https://example.com/books"
            },
            ...commonAttributes
        },
        'Brand': {
            model: {
                "position": 0,
                "name": "Books",
                "item": "https://example.com/books"
            },
            ...commonAttributes
        },
        'card': {
            'body': {
                body: 'a body text'
            },
            'title_text_link': {
                
            }
        }
    },
    'main': {
        'customSetting': [
            {'significantLink': {schema: '',
                type: '',
                cssSelector: '#significantLink'
            }}
        ]
    },
    'footer': {
        'customSetting': [
        ]
    },
    'webpageLastInfos': { schema: 'https://schema.org/WebPage',
        type: '',
        items: [
            {lastReviewed: stats.lastReviewed},
            {reviewedBy: stats.reviewedBy},
            {relatedLink: stats.relatedLink},
            {'speakable': {typeof: 'SpeakableSpecification', cssSelector:''}},
        ]
    }
}
