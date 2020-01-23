import React from "react"
import '../css/body-page.css'


class Content extends React.Component {
    render() {
     return (
 <div>
    
 <section className="content container">

 <div style={{height:'30vh', padding:'10vh', verticalAlign: 'bottom',textAlign: 'center'}}>
   
 <h1>
     About us

 </h1>

 </div>


<article className="row shadow p-3 mb-5 bg-light" style= {{borderRadius:'25px'}}>
<div className="cell text col-sm-12 col-lg-6 col-md-6">​
5.3 million tons of waste is generated in Israel each year.
30% of the waste generated annually is biodegradable. 
Waste production in Israel grows at a rate of 2% per year.
About 75% of the total waste produced in Israel is buried in
landfills; only about 25% is recycled.</div>
<div className="cell image1 col-sm-12 col-lg-6 col-md-6"></div>
</article>


<article className="reverse row shadow p-3 mb-5 bg-light" style= {{borderRadius:'25px'}}>
<div className="cell text col-sm-12 col-lg-6 col-md-6"> 
Litterboard is taking action in  shaping Israeli <br/> waste management towards reducing the amount <br/>of trash landfilled, greatly increased recycling and joint efforts </div>

<div className="cell image image2 col-sm-12 col-lg-6 col-md-6"></div>
</article>


<article className="row shadow p-3 mb-5 bg-light" style= {{borderRadius:'25px'}}>
<div className="cell text col-sm-12 col-lg-6 col-md-6">
A literal TON of trash removed per event. Litterboard is leading by 
example and inspiring others. All the thanks go to our awesome participants 
and incredible collaborators.
Spend an incredible time together and make the world go round.</div>
<div className="cell image image3 col-sm-12 col-lg-6 col-md-6"></div>
</article>
</section >



 </div>
);
}
}

export default Content

