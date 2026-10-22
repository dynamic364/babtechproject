import HomePage from "./component/homePage/homePage";
import ContactPage from "./component/contact/contactPage";
import Services from "./component/services/services";
import SupportPage from "./component/supportNav/supportNav";
import Pricing from "./component/pricing/pricing";
import About from "./component/about/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MyRoute = () => {
    return(
        <Router>
            <Routes>
                <Route path= "/" Component={HomePage} />
                <Route path= "/contact" Component={ContactPage} />
                <Route path= "/services" Component={Services} />
                <Route path="/support" Component={SupportPage} />
                <Route path="/pricing" Component={Pricing} />
                <Route path="/about" Component={About} />
            </Routes>
        </Router>
    )
}

export default MyRoute;
