import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Catalog from './components/catalog/catalog';
import Footer from './components/footer/footer';
import first_drone from "./components/icons/first_drone.png";
import second_drone from "./components/icons/second_drone.png";
import third_drone from "./components/icons/third_drone.png";
import fourth_drone from "./components/icons/fourth_drone.png";
import fifth_drone from "./components/icons/fifth_drone.png";
import sixth_drone from "./components/icons/sixth_drone.png";
import seventh_drone from "./components/icons/seventh_drone.png";
import title_drone from "./components/icons/title_photo.png";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemNavigation from './components/itemCard/ItemNavigation';

const dronesCard = [
  {
      title: "ALTIUS-600",
      description: "ALTIUS-600 UAV is one meter long with a wingspan of 2.54 m. The drone weighs 12.25 kg, including the payload, which can be up to 3 kg. It is primarily intended for aerial surveillance and reconnaissance.",
      image: first_drone,
  },
  {
      title: "Swithblade",
      description: "The AeroVironment Switchblade is a miniature loitering munition designed by AeroVironment and used by several branches of the United States military." +  
                  "Small enough to fit in a backpack, the Switchblade launches from a tube, flies to the target area, and crashes into its target while detonating its explosive warhead.",
      image: second_drone,
  },
  {
      title: "MQ-9 Reaper",
      description: "The MQ-9 Reaper is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                  "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
      image: third_drone,
  },
  {
      title: "ALTIUS-600",
      description: "ALTIUS-600 UAV is one meter long with a wingspan of 2.54 m. The drone weighs 12.25 kg, including the payload, which can be up to 3 kg. It is primarily intended for aerial surveillance and reconnaissance.",
      image: fourth_drone,
  },
  {
      title: "Swithblade",
      description: "The AeroVironment Switchblade is a miniature loitering munition designed by AeroVironment and used by several branches of the United States military." +  
                  "Small enough to fit in a backpack, the Switchblade launches from a tube, flies to the target area, and crashes into its target while detonating its explosive warhead.",
      image: sixth_drone,
  },
  {
      title: "MQ-9 Reaper",
      description: "The MQ-9 Reaper is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                  "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
      image: fifth_drone,
  },
  {
      title: "Bayraktar",
      description: "The Bayraktar is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                  "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
      image: seventh_drone,
  },
];

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
          <Routes>
            <Route path="/" element={<Home cards={dronesCard} />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:productId" element={<ItemNavigation />} />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
