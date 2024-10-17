import { FaUmbrellaBeach } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";



const Countries = () => {
    const bangladesh = 'bangladesh';
    const thailand = 'thailand';
    const indonesia = 'indonesia';
    const malaysia = 'malaysia';
    const vietnam = 'vietnam';
    const cambodia = 'cambodia';

  return (
    <div>
      <section className="w-full py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4">

      <div className="flex items-center justify-center">
        <Fade direction="up">
      <span className="small-title text-xl text-green-600 flex items-center gap-2"><FaUmbrellaBeach />Journey to the <FaUmbrellaBeach /></span>
      </Fade>
      </div>
      <Fade direction="up">
      <h1 className="text-5xl font-bold mt-5 mb-16 leading-tight text-center dark:text-white">

      <Typewriter
                words={[
                  'Exploring the World Together',
                  'Unforgettable Journeys Await',
                  'Tailored Travel Experiences',
                  'Your Dream Destinations',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
      </h1>
      </Fade>
      <Fade>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-1 h-[300px] relative group">
  <img className="w-full h-full rounded-md" src="https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/destination-card-img1.jpg" alt="Malaysia" />
  
  {/* Country name, fades out on hover */}
  <span className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
    Malaysia
  </span>
  
  {/* Details content, fades in and transforms on hover */}
  <div className="absolute rounded-md inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
    <h3 className="text-xl font-semibold">Discover Malaysia</h3>
    <p className="text-base mt-2">Experience the rich culture and beautiful landscapes.</p>
    <NavLink to={`/country/${malaysia}`}>
      <button className="bg-green-600 py-2 px-5 rounded-md mt-5">View Spots</button>
    </NavLink>
  </div>
</div>


<div className="md:col-span-3 h-[300px] relative group">
  <img className="w-full h-full rounded-md" src="https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/destination-card-img2.jpg" alt="" />
  
  {/* Country name, fades out on hover */}
  <span className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
    Bangladesh
  </span>
  
  {/* Details content, fades in and transforms on hover */}
  <div className="absolute rounded-md inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 text-center">
    <h3 className="text-xl font-semibold">Discover Bangladesh</h3>
    <p className="text-base mt-2 text-center">Explore the natural beauty and vibrant culture</p>
    <NavLink to={`/country/${bangladesh}`}>
      <button className="bg-green-600 py-2 px-5 rounded-md mt-5">View Spots</button>
    </NavLink>
  </div>
</div>



<div className="md:col-span-2 h-[300px] relative group">
  <img className="w-full h-full rounded-md" src="https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/destination-card-img3.jpg" alt="" />
  
  {/* Country name, fades out on hover */}
  <span className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
    Thailand
  </span>
  
  {/* Details content, fades in and transforms on hover */}
  <div className="absolute rounded-md inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
    <h3 className="text-xl font-semibold">Discover Thailand</h3>
    <p className="text-base mt-2">Experience the vibrant culture </p>
    <NavLink to={`/country/${thailand}`}>
      <button className="bg-green-600 py-2 px-5 rounded-md mt-5">View Spots</button>
    </NavLink>
  </div>
</div>


<div className="md:col-span-3 h-[300px] relative group">
  <img className="w-full h-full rounded-md" src="https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/destination-card-img4.jpg" alt="" />
  
  {/* Country name, fades out on hover */}
  <span className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
    Indonesia
  </span>
  
  {/* Details content, fades in and transforms on hover */}
  <div className="absolute rounded-md inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
    <h3 className="text-xl font-semibold">Discover Indonesia</h3>
    <p className="text-base mt-2">Explore the stunning islands and culture</p>
    <NavLink to={`/country/${indonesia}`}>
      <button className="bg-green-600 py-2 px-5 rounded-md mt-5">View Spots</button>
    </NavLink>
  </div>
</div>

  


 <div className="md:col-span-2 h-[300px] relative group">
  <img className="w-full h-full rounded-md" src="https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/destination-card-img1.jpg" alt="" />
  
  {/* Country name, fades out on hover */}
  <span className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
    Vietnam
  </span>
  
  {/* Details content, fades in and transforms on hover */}
  <div className="absolute rounded-md inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
    <h3 className="text-xl font-semibold px-5">Discover Vietnam</h3>
    <p className="text-base mt-2 px-5">Explore the culture and beauty</p>
    <NavLink to={`/country/${bangladesh}`}><button className="bg-green-600 py-2 px-5 rounded-md mt-5">View Spots</button></NavLink>
  </div>
</div>




<div className="col-span-1 h-[300px] relative group">
  <img className="w-full h-full rounded-md" src="https://demo-egenslab.b-cdn.net/html/triprex/preview/assets/img/home1/destination-card-img5.jpg" alt="" />
  
  {/* Country name, fades out on hover */}
  <span className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl transition-opacity duration-300 group-hover:opacity-0">
    Cambodia
  </span>
  
  {/* Details content, fades in and transforms on hover */}
  <div className="absolute rounded-md inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
    <h3 className="text-xl font-semibold">Discover Cambodia</h3>
    <p className="text-base mt-2">Experience the rich history and beauty</p>
    <NavLink to={`/country/${cambodia}`}>
      <button className="bg-green-600 py-2 px-5 rounded-md mt-5">View Spots</button>
    </NavLink>
  </div>
</div>


</div>
</Fade>
      </div>

      </section>

      {/* <section className="mt-20">
      <div className="container mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh.jpg?w=1280&h=769"
                alt="Tourist Spot"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Bangladesh</h3>
                <p className="text-gray-600 mb-1">Average Cost: </p>
                <p className="text-gray-600 mb-1">Visitors Per Year: </p>
                <NavLink to={`/country/${bangladesh}`}><button>View Spots</button></NavLink>
              </div>

            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh.jpg?w=1280&h=769"
                alt="Tourist Spot"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Thailand</h3>
                <p className="text-gray-600 mb-1">Average Cost: </p>
                <p className="text-gray-600 mb-1">Visitors Per Year: </p>
                <NavLink to={`/country/${thailand}`}><button>View Spots</button></NavLink>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh.jpg?w=1280&h=769"
                alt="Tourist Spot"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Malaysia</h3>
                <p className="text-gray-600 mb-1">Average Cost: </p>
                <p className="text-gray-600 mb-1">Visitors Per Year: </p>
                <NavLink to={`/country/${malaysia}`}><button>View Spots</button></NavLink>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh.jpg?w=1280&h=769"
                alt="Tourist Spot"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Indonesia</h3>
                <p className="text-gray-600 mb-1">Average Cost: </p>
                <p className="text-gray-600 mb-1">Visitors Per Year: </p>
                <NavLink to={`/country/${indonesia}`}><button>View Spots</button></NavLink>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh.jpg?w=1280&h=769"
                alt="Tourist Spot"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Vietnam</h3>
                <p className="text-gray-600 mb-1">Average Cost: </p>
                <p className="text-gray-600 mb-1">Visitors Per Year: </p>
                <NavLink to={`/country/${vietnam}`}><button>View Spots</button></NavLink>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="w-full h-48 object-cover"
                src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh.jpg?w=1280&h=769"
                alt="Tourist Spot"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Cambodia</h3>
                <p className="text-gray-600 mb-1">Average Cost: </p>
                <p className="text-gray-600 mb-1">Visitors Per Year: </p>
                <NavLink to={`/country/${cambodia}`}><button>View Spots</button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

Countries.propTypes = {};

export default Countries;
