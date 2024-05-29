import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import ExpertDoctors from '../DoctorCard/ExpertDoctors';
import InfoCards from '../InfoSection/InfoCards ';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Service />
      <InfoCards />
      <Testimonials />
      <ExpertDoctors />
      <ContactForm />
    </div>
  );
};

export default Home;
