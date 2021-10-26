const Features = () => {
    return ( 
        <div className="mainDiv ">
            <h3 className="featHead">Product and Service</h3>

            <div className="features">
                <div>
                    <i className="far fa-list-alt"></i>
                    <p clasName="medHead">Our Product</p>
                    <p className="smallText">Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                    <button className="ReadMore">Read More</button>
                </div>

                <div>
                    <i className="far fa-calendar-check"></i>
                    <p clasName="medHead">Our Service</p>
                    <p className="smallText">DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                    <button className="ReadMore">Read More</button>
                </div>

                <div>
                    <i className="fas fa-laptop-code"></i>
                    <p clasName="medHead">Our Technology</p>
                    <p className="smallText">First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                    <button className="ReadMore">Read More</button>
                </div>

            </div>
        </div>
     );
}
 
export default Features;