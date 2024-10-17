


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              Learn more about our tour management system and how we help travelers plan their trips seamlessly.
            </p>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul>
              <li className="mb-2">Custom Tour Packages</li>
              <li className="mb-2">Travel Insurance</li>
              <li className="mb-2">Hotel Booking</li>
              <li>Flight Reservations</li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">About</a></li>
              <li className="mb-2"><a href="#">Tours</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p>Email: support@tourmanagement.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 1234 Main St, Suite 100, City, Country</p>
          </div>
        </div>
        <div className="text-center mt-10 text-sm text-gray-400">
          © 2024 TripRex. All Rights Reserved.
        </div>
      </footer>
    );
};


Footer.propTypes = {

};


export default Footer;
