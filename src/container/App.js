import EarlyAccess from '../components/EarlyAccess';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import StayProductive from '../components/StayProductive';
import Testimonial from '../components/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Features />
      <StayProductive />
      <Testimonial />
      <EarlyAccess />
      <Footer />
    </>
  );
}

export default App;
