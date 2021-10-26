import footerimg from "../Images/Footer.png"; 
import logo from "../Images/Logo.png";

const Footer = () => {
    return ( 
    <div className="mainDiv">

        <div className="foot1">
        <div>
            <img className="logo"src={logo} alt="logo"/>
            <p><b>PT Dwidasa Samsara Indonesia</b></p>
            <p>Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323</p>
        </div>

        <div className="div2f">
            <p><b>Contact</b></p>
            <p>Phone : +62.21.5314.1135 Fax : +62.21.5314.1135  Email : community@dwidasa.com</p>
        </div>

        <div>
            <img className="footerimg" src={footerimg}/>
        </div>
        </div>

        <div className="foot2">
            <p>Copyright &copy; 2015 - Dwidasa Samsara Indonesia</p>
        </div>

    </div> );
}
 
export default Footer;