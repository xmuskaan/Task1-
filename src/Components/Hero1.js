import Dev from "../Images/Dev.png";

const Hero1 = () => {
    return ( 
        <div className="mainDiv Hero1">
            <div className="text">
                <h2>Making the most of the ever-growing <span className="colorChange">Information Technology</span></h2>
                <p className="smallText">Managed by a team of professional experts with extensive experience and impressive track records</p>
                <button className="ReadMore">Read More</button>
            </div>

            <div className="picture">
                <img src={Dev} alt="not yet found"/>
            </div>
        </div>
     );
}
 
export default Hero1;
