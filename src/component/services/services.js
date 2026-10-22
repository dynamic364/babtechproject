import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper"
import image from "../../assets/images/music.jpg"
import Button from "../tempalates/button"
import './services.css'; 

const Component = (props)=>{
    console.log(props.value)
    return (
        <section className="sec">
             <h1>WELCOME TO <span className="yellow">TUNE MUSIC.</span></h1>
            <div className="main-part">
              <div className="text">
            <h3><span className="yellow">Discover the latest music collection</span></h3>
            <p>A new music service with official Albums,<br></br> Singles, Videos, Remixex and Live performances!</p>
            <p>We've created a world-wide studio and music platform<br></br>  to help artist and anyone in displaying their musical career, <br></br> you can easily create an account and subcribe with us to get this benefits<br></br>  and to enter your musical details. Also, we support our customers<br></br>  by selling new musical instruments or helping our customers promote and <br></br> advertise their sales of musical instruments displayed on our website.  </p>

            <Button buttonText="Subcribe with us" />
        </div>
        <div className="image">
            <img src={image} alt="Image"/>
        </div>
        </div>

        <div className="last">
            <div className="line">
                <div className="text-line"></div>
              <h1 className="title" >Our Subcriptions Offers</h1>
            <div  className="text-line"></div>
            </div>

        <div className="card-container">
            <div className="card">
                   <div className="text-1">
                <h3>7 Days free trial</h3>
                <p> <span className="yellow-1">$200 afterwards</span></p>
                <p>Allows you create a space for exploring <br></br>your musical talents for 7 days free</p>
            </div>
            </div>
             <div className="card">
                   <div className="text-1">
                <h3>4 Months</h3>
                <p> <span className="yellow-1">$400 </span></p>
                <p>Allows you create a space for exploring<br></br> your musical talents for 4 months</p>
            </div>
            </div>
             <div className="card">
                   <div className="text-1">
                <h3>6 Months</h3>
                <p> <span className="yellow-1">$800 </span></p>
                <p>Allows you create a space for exploring<br></br> your musical talents for 6 months</p>
            </div>
            </div>
            <div className="card">
                   <div className="text-1">
                <h3>1 Year</h3>
                <p><span className="yellow-1">$1200 </span></p>
                <p>Allows you create a space for exploring<br></br> your musical talents for 1 year</p>
            </div>
            </div>

        </div>
        </div>
        </section>
    )
    
}
const Services = pageWithNav(Component)
export default Services