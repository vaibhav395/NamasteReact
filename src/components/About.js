const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About CraveBite</h1>
      <div className="max-w-md bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform hover:scale-105">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
        CraveBite is a sleek and intuitive front-end food ordering web application, integrated with Swiggy's Live API to offer a smooth and efficient dining experience. With CraveBite, users can explore a vast selection of restaurants, browse detailed menus, search for top-rated spots, and easily add their favorite items to the cart—all in one place.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Vaibhav Thareja</h2>
        <p className="text-gray-700 mb-6">
          Hi! I'm Vaibhav Thareja, a passionate developer interested in building innovative web applications. I graduated with a B.Tech in Computer Science and Engineering from Graphic Era Hill University and have hands-on experience in various technologies.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Values We Stand By</h2>
        <ul className="list-disc list-inside text-left text-gray-700 mb-6">
          <li>Integrity: Being honest and transparent in my work.</li>
          <li>Innovation: Continuously seeking new ways to improve.</li>
          <li>Collaboration: Working together to achieve common goals.</li>
          <li>Customer-Centric: Focusing on the needs and feedback of users.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-gray-700 mb-2">
          I love connecting with people! Feel free to reach out to me through my social media or email.
        </p>
        <p className="text-gray-700 mb-6">
          Email: <a href="mailto:tharejavaibhav@gmail.com" className="text-blue-600 hover:underline">tharejavaibhav@gmail.com</a>
        </p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800">Follow Me:</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a 
              href="https://www.linkedin.com/in/vaibhav-thareja-685133217/" 
              className="text-blue-600 hover:underline transition duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/vaibhav395" 
              className="text-gray-800 hover:underline transition duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.instagram.com/vaibhav_thareja_05/" 
              className="text-pink-600 hover:underline transition duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
