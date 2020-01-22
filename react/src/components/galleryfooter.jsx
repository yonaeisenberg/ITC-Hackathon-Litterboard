import React from "react"
import '../css/body-page.css'

class Footer extends React.Component {
    render() {
    return (
     <div>
    
     <footer className=" footer row">
     <div className="footer-box col-sm-12 col-lg-4 col-md-4"> Copyright </div>
     <div className="footer-box col-sm-12 col-lg-4 col-md-4"> Term of Use </div>
     <div className="footer-box col-sm-12 col-lg-4 col-md-4">
     <a className="facebook-logo">
         <i className="fab fa-facebook-square"></i> </a>
     <a className="instagram-logo">
         <i className="fab fa-instagram"></i>
     </a>
     <a className="twitter-logo">
         <i className="fab fa-twitter-square"></i>
     </a>
     </div>
     </footer>
    
    
    </div>
    
    
    );
    }
    }
    export default Footer