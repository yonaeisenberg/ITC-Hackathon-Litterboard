import React from "react"
import '../css/body-page.css'


class Content extends React.Component {
    render() {
     return (
 <div>
    
 <section className="content container">

 <div style={{height:'30vh', padding:'10vh', verticalAlign: 'bottom',textAlign: 'center'}}>
   
 <h1>
     Gallery

 </h1>

 </div>


 <article className="row shadow p-3 mb-5 bg-light">
 <div className="cell text col-sm-12 col-lg-6 col-md-6">The coffee is delivered
 directly from our artisan roastereries to you. <br />Ensured freshness.</div>
 <div className="cell image1 col-sm-12 col-lg-6 col-md-6"></div>
 </article>


 <article className="row shadow p-3 mb-5 bg-light">
 <div className="cell text col-sm-12 col-lg-6 col-md-6"> Check coffee off your weekly shopping list. We strongly
 believe in a seamless coffee experience from purchase to serving.</div>

 <div className="cell image image2 col-sm-12 col-lg-6 col-md-6"></div>
 </article>


 <article className="row shadow p-3 mb-5 bg-light">
 <div className="cell text col-sm-12 col-lg-6 col-md-6">We rotate coffee based on origin. Become a coffee
 connoisseur with an impressive palette and master the flavor wheel in no time.</div>
 <div className="cell image image3 col-sm-12 col-lg-6 col-md-6"></div>
 </article>
 </section >



 </div>
);
}
}

export default Content

