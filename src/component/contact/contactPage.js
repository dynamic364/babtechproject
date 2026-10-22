import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import Button from "../tempalates/button";
import "./contact.css"

const Component = () => {
    return(
        <div>
 <div className="main">
        <h2>Let's start a conversation</h2>
        <div className="main-child">
        <div className="text-div">
            <div className="text-one">
              <h3>Ask how we can help you:</h3>
              <div className="txtt">
                <h4>See our platform in action</h4>
                <p>Request a personalized demo of TUNE’s partner marketing platform.</p>
              </div>
              <div className="txtt">
                <h4>Master performance marketing</h4>
                <p>From <span className="poli">TUNE Academy courses</span> to industry <span className="poli">research</span> and <span className="poli">insights</span>, learn how to grow your business through performance-based partnerships.</p>
              </div>
              <div className="txtt">
                <h4>Explore life at TUNE</h4>
                <p>Search <span className="poli">open positions</span> , read about company culture and values, and explore our charitable initiatives.</p>
              </div>
              
            </div>
            <div className="text-two">
              <h3>Points of Contact</h3>
              <div className="txtt">
                <h4>U.S. | TUNE</h4>
                <p>11350 McCormick Rd, EP III, Suite 200,
                    Hunt Valley, MD 21031
                    </p>
              </div>
              <div className="txtt">
                <h4>Billing Inquiries</h4>
                <p> (855) 979-7887</p>
              </div>
              <div className="txtt">
                <h4>Information and Sales</h4>
                <a href="email.com">partnermarketing@tune.com</a>
              </div>
              <div className="txtt">
                <h4>Support</h4>
                <a href="email.com">support@tune.com</a>
              </div>
              <div className="txtt">
                <h4>Verification of Employment</h4>
                <a href="email.com">voe@constellationhbs.com</a>
              </div>
              
            </div>
            <div className="text-three">
              <h2>Additional Office Locations</h2>
              <div className="txttt">
                <h4>Germany</h4>
                <p>Torstr. 231, Vorderhaus, 1. OG, 10115 Berlin</p>
              </div>
            </div>
        </div>
        <div class="container">
    <h5>Please note: all fields are required.</h5>
    <form id="myForm">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required/>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required/>
      </div>
      <div class="form-group">
        <label for="companyName">Company Name:</label>
        <input type="text" id="companyName" name="companyName" required/>
      </div>
      <div class="form-group">
        <label for="companyEmail">Company Email:</label>
        <input type="email" id="companyEmail" name="companyEmail" required/>
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="jobTitle" required/>
      </div>
      <div class="form-group">
        <label for="country">Country:</label>
        <select id="country" name="country" required>
          <option value="">Select:</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </select>
      </div>
      <div class="form-group">
        <label for="country">Business type:</label>
        <select id="country" name="country" required>
          <option value="">Select:</option>
        </select>
      </div>
      <div class="form-group">
        <label for="comments">Comments</label>
        <input type="email" id="companyEmail" name="companyEmail" required/>
      </div>
      <div className="checkbox">
        <span className="checkb">
        <input type="checkbox" name="" id="" className="chek"/>
        <p>
          I'd like to receive more information about TUNE; I understand and agree to the <span className="poli">privacy policy.</span>
          </p>
        </span>
        <p>This site is protected by reCAPTCHA and the Google <span className="poli">Privacy Policy</span> and <span className="poli">Terms of Service</span> apply. </p>
        

      </div>
      <Button form />
    </form>
  </div>
        </div>
     
      </div>        </div>
    );

}

const ContactPage = pageWithNav(Component);

export default ContactPage;