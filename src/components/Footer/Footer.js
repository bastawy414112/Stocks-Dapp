import React from "react";
import Classes from './Footer.css';



const footer = (props) => {

      
    return (
        <footer className={Classes.footer} style = {props.style}>
            <div className={Classes.container}>
                <div className={Classes.row}>
                    <div className={Classes.footer_col}>
                        <h4>Company</h4>
                            <ul className={Classes.unordered}>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                    </div>
                
                    
                </div>

            </div>
        </footer>
    )

  

}
    


export default footer;
