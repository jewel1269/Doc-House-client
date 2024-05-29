import image from '../../assets/Banner/pexels-rethaferguson-3825414.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import treeth1 from '../../assets/treeth/pexels-polina-zimmerman-3958092.jpg';
import treeth2 from '../../assets/treeth/pexels-shvetsa-5069425.jpg';
import treeth3 from '../../assets/treeth/pexels-weverton-oliveira-927931218-20217786.jpg';

const Service = () => {
  return (
    <div className="flex  lg:mt-14 justify-center ">
      <div>
        <img
          className="lg:h-[700px]  rounded-lg shadow-lg shadow-gray-400 lg:w-[550px]"
          src={image}
          alt=""
        />
      </div>
      <div className="ml-5  text-start">
        <div>
          <h1 className="text-4xl uppercase mb-4 font-bold">Our Services</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{' '}
            <br />
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{' '}
            <br />
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae{' '}
            <br />
            dicta sunt explicabo.
          </p>
        </div>
        <div className="mt-3">
          <Tabs>
            <TabList>
              <Tab>Cavity Protection</Tab>
              <Tab>Cosmetic Dentisty</Tab>
              <Tab>Oral Surgery</Tab>
            </TabList>

            <TabPanel>
              <img
                className="lg:h-[270px] mt-2 lg:w-[350px] lg:ml-28"
                src={treeth1}
                alt=""
              />
            </TabPanel>

            <TabPanel>
              <img
                className="lg:h-[270px] mt-2 lg:w-[350px] lg:ml-28"
                src={treeth2}
                alt=""
              />
            </TabPanel>

            <TabPanel>
              <img
                className="lg:h-[270px] mt-2 lg:w-[350px] lg:ml-28"
                src={treeth3}
                alt=""
              />
            </TabPanel>
          </Tabs>
        </div>
        <h1 className="text-start text-3xl mb-4 uppercase font-bold">
          Electro Gastrology Therapy
        </h1>
        <p className="text-start">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae{' '}
          <br />
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta{' '}
          <br />
          sunt explicabo. Sed ut perspiciatis unde omnis iste natus error{' '}
        </p>

        <button className="btn mt-3 btn-sm btn-warning btn-outline hover:btn-success">
          More Details
        </button>
      </div>
    </div>
  );
};

export default Service;
