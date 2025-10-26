import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center"
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome Home</h1>
          <p className="text-xl md:text-2xl opacity-90">Scroll down to see the navigation change</p>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We create amazing experiences with beautiful designs and smooth interactions.
          </p>
        </div>
      </section>

      <section
        id="services"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
      >
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Let's create something amazing together.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
