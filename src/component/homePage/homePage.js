import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import Button from "../tempalates/button";
import "./homePage.css"
import Technology from './images/CreateYourPlatform.png'
import Worksmart from './images/WorkSmarterWithPartners.png'
import Build from './images/BuildGreaterTrust.png'



const Page = () => {

  
  return (
    <>
    <section className="sect1">
      <div className="tune1">
        <h1>TUNE Partner Marketing Platform</h1>
        <p>TUNE makes the industry’s most flexible SaaS platform for managing marketing partnerships across mobile and web. On one platform, you can maximize ROI from onboarding through payout with your most important partners — affiliates, networks, influencers, agencies, and any other business development relationships</p>
      </div>
      <div className="flex-box">
          <div className="advert">
            <h1>For Advertisers</h1>
            <p>Complete partner management. Proactive fraud prevention. Comprehensive payment processing. All the tools you need to build better relationships.</p>
            <Button form/>
          </div>
          <div className="network">
            <h1>For Networks</h1>
            <p>Infinite scalability. Advanced automation. Real-time data streaming. Industry-leading support. A powerful platform to build your affiliate network on.</p>
            <Button form />
          </div>
      </div>
      

    </section>
    <section className="sect2">
      <div id="flexible">
        <div className="flexInfo">
          <span>FLEXIBLE TECHNOLOGY</span>
          <h2>Build a Branded Partner Experience</h2>
          <p>Unlike the competition, TUNE is a fully customizable SaaS platform. That means we give you the industry’s most powerful and unique set of tools to integrate, manage, and compensate your marketing partnerships, plus the flexibility to differentiate your business.</p>
          <ul>
            <li>White labeling, personalized dashboards and interfaces, saved reports, and more keep you true to your brand</li>
            <li>API-based foundation with over 650 endpoints for unparalleled custom functionality</li>
            <li>Professional services team available for custom solutions development, technical consulting, and more</li>
          </ul>
        </div>
        <img src={Technology} alt="technology" width={550}/>
        
      </div>
      <div id="intelligent">
      <img src={Worksmart} alt="workSmart" width={550}/>
        <div className="inteInfo">
          <span>INTELLIGENT TOOLS</span>
          <h2>Work Smarter With Every Partner</h2>
          <p>Time is money. Let us save you both with a robust suite of optimization and reporting features that empower you to work more efficiently with more partners and across more channels than ever before.</p>
          <ul>
            <li>Advanced automation tools streamline workflows and minimize risks</li>
            <li>Native postback capabilities ensure accurate tracking across mobile and web</li>
            <li>Real-time reporting and data streaming power better decision-makingS</li>
          </ul>
        </div>
        
      </div>
      <div id="secure">
        <div className="secureInfo">
          <span>SECURE CONTROLS</span>
          <h2>Build Greater Trust With Partners</h2>
          <p>TUNE maintains high standards in safeguarding the data of our customers and their end users. We strive to build and uphold trust as a company by creating policies and products that help our customers build trust with theirs. These include:</p>
          <ul>
            <li><small>SOC 2 Type II</small> and <small>SOC 1 Type II</small> certification</li>
            <li><small>General Data Protection Regulation</small> compliance with ePrivacy certification</li>
            <li>Proactive fraud prevention</li>
            <li>Verifiable global payments and transactions</li>
            <li>Cloud-based system infrastructure with <small>99.9% uptime</small></li>
            <li>Global support team with 98% customer service satisfaction rating</li>
          </ul>
        </div>
        <img src={Build} alt="build" width={550}/>
      </div>
    </section>

    <section className="sect3">
      <h2>Realize Your Full Partner Potential</h2>
      <Button form/>
    </section>
   
    </>
   );

}







const HomePage  = pageWithNav(Page);

export default HomePage;
