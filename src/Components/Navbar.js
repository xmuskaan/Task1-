import { useState } from 'react';
const Navbar = () => {
    const [Click, setClick] = useState(false);
    
    const handleClick= () => setClick(!Click);
    const closeMobileMenu= () => setClick(false)

    return ( 
    <nav className="NavBar">
        <div className="container">
            <div className="navCon">
                <h3 className="Title"> DSI </h3>
                <div className="openHamMenu" onClick={handleClick}>
                    <i className={Click ? "fa fa-times" : "fas fa-gem"} />  
                </div>
                    <div className={Click? "NavList active" : "NavList"}>
                        <span className="Services navLinks" to="/"onClick={closeMobileMenu}>Services</span>
                        <span className="Products navLinks" to="/about"onClick={closeMobileMenu}>Product</span>
                        <span className="Technology navLinks" to="/products"onClick={closeMobileMenu}>Technology</span>
                        <span className="About navLinks" to="/products"onClick={closeMobileMenu}>About<i class="fas fa-angle-down"/></span>
                        <span className="Client navLinks" to="/contactus"onClick={closeMobileMenu}>Client<i class="fas fa-angle-down"/></span>
                        <span className="Partner navLinks" to="/contactus"onClick={closeMobileMenu}>Partner</span>
                </div>   
                <div className="navIcons">
                    <i className="">Home</i>
                    <i className="">Message</i>
                    <i className="">Connect</i>
                </div>             
            </div>
        </div>
    </nav>
);
}
 
export default Navbar;