const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex flex-wrap justify-between gap-6">
          <div className="footer-section flex-1 min-w-[150px]">
            <h3 className="text-xl font-semibold mb-2">SOLUTIONS</h3>
            <ul>
              <li className="mb-1">For Advertisers</li>
              <li className="mb-1">For Networks</li>
              <li className="mb-1">Direct-to-Consumer</li>
              <li className="mb-1">Financial Services</li>
              <li className="mb-1">Subscription Services</li>
            </ul>
          </div>
          <div className="footer-section flex-1 min-w-[150px]">
            <h3 className="text-xl font-semibold mb-2">WHY TUNE</h3>
            <ul>
              <li className="mb-1">Platform</li>
              <li className="mb-1">Partners</li>
              <li className="mb-1">Customers</li>
              <li className="mb-1">Services</li>
            </ul>
          </div>
          <div className="footer-section flex-1 min-w-[150px]">
            <h3 className="text-xl font-semibold mb-2">PRICING</h3>
            <ul>
              <li className="mb-1">For Advertisers</li>
              <li className="mb-1">For Networks</li>
            </ul>
          </div>
          <div className="footer-section flex-1 min-w-[150px]">
            <h3 className="text-xl font-semibold mb-2">LEARN</h3>
            <ul>
              <li className="mb-1">Resources</li>
              <li className="mb-1">Events</li>
              <li className="mb-1">Blog</li>
            </ul>
          </div>
          <div className="footer-section flex-1 min-w-[150px]">
            <h3 className="text-xl font-semibold mb-2">SUPPORT</h3>
            <ul>
              <li className="mb-1">Help Site</li>
              <li className="mb-1">Developer Site</li>
              <li className="mb-1">Training</li>
              <li className="mb-1">Contact Support</li>
            </ul>
          </div>
          <div className="footer-section flex-1 min-w-[150px]">
            <h3 className="text-xl font-semibold mb-2">ABOUT</h3>
            <ul>
              <li className="mb-1">About TUNE</li>
              <li className="mb-1">Careers</li>
              <li className="mb-1">Advocacy Program</li>
              <li className="mb-1">Contact Us</li>
            </ul>
          </div>
          <div className="footer-section flex-1 min-w-[150px]">
            <h3 className="text-xl font-semibold mb-2">LEGAL</h3>
            <ul>
              <li className="mb-1">Privacy Policy</li>
              <li className="mb-1">Notice for CA Residents</li>
              <li className="mb-1">Personal Data Request Form</li>
              <li className="mb-1">Data Processing Agreement</li>
              <li className="mb-1">Partner Terms</li>
              <li className="mb-1">Terms & Conditions</li>
              <li className="mb-1">Terms of Use</li>
              <li className="mb-1">TUNE Marketing Console</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            REQUEST A DEMO
          </button>
          <p className="mt-4">© 2024 TUNE, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
