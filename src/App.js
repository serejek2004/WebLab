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
import title_drone from "./components/icons/title_photo.png"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemNavigation from './components/itemCard/ItemNavigation';

const dronesCard = [
  {
      id: 1,
      title: "ALTIUS-600",
      description: "ALTIUS-600 UAV is one meter long with a wingspan of 2.54 m. The drone weighs 12.25 kg, including the payload, which can be up to 3 kg. It is primarily intended for aerial surveillance and reconnaissance.",
      image: first_drone,
  },
  {
      id: 2,
      title: "Swithblade",
      description: "The AeroVironment Switchblade is a miniature loitering munition designed by AeroVironment and used by several branches of the United States military." +  
                  "Small enough to fit in a backpack, the Switchblade launches from a tube, flies to the target area, and crashes into its target while detonating its explosive warhead.",
      image: second_drone,
  },
  {
      id: 3,
      title: "MQ-9 Reaper",
      description: "The MQ-9 Reaper is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                  "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
      image: third_drone,
  },
  {
      id: 4,
      title: "ALTIUS-600",
      description: "ALTIUS-600 UAV is one meter long with a wingspan of 2.54 m. The drone weighs 12.25 kg, including the payload, which can be up to 3 kg. It is primarily intended for aerial surveillance and reconnaissance.",
      image: fourth_drone,
  },
  {
      id: 5,
      title: "Swithblade",
      description: "The AeroVironment Switchblade is a miniature loitering munition designed by AeroVironment and used by several branches of the United States military." +  
                  "Small enough to fit in a backpack, the Switchblade launches from a tube, flies to the target area, and crashes into its target while detonating its explosive warhead.",
      image: sixth_drone,
  },
  {
      id: 6,
      title: "MQ-9 Reaper",
      description: "The MQ-9 Reaper is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                  "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
      image: fifth_drone,
  },
  {
      id: 7,
      title: "Bayraktar",
      description: "The Bayraktar is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                  "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
      image: seventh_drone,
  },
];

const dronesToSell = [
  {
    id: 1,
    title: "ALTIUS-600",
    category: "Battle",
    price: "100000$",
    description: "ALTIUS-600 UAV is one meter long with a wingspan of 2.54 m. The drone weighs 12.25 kg, including the payload, which can be up to 3 kg. It is primarily intended for aerial surveillance and reconnaissance.",
    image: first_drone,
  },
  {
    id: 2,
    title: "Swithblade",
    category: "Battle",
    price: "175000$",
    description: "The AeroVironment Switchblade is a miniature loitering munition designed by AeroVironment and used by several branches of the United States military." +  
                "Small enough to fit in a backpack, the Switchblade launches from a tube, flies to the target area, and crashes into its target while detonating its explosive warhead.",
    image: second_drone,
  },
  {
    id: 3,
    title: "MQ-9 Reaper",
    category: "Battle",
    price: "215000$",
    description: "The MQ-9 Reaper is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
    image: third_drone,
  },
  {
    id: 4,
    title: "ALTIUS-600",
    category: "Inspection",
    price: "7500$",
    description: "ALTIUS-600 UAV is one meter long with a wingspan of 2.54 m. The drone weighs 12.25 kg, including the payload, which can be up to 3 kg. It is primarily intended for aerial surveillance and reconnaissance.",
    image: fourth_drone,
  },
  {
    id: 5,
    title: "Swithblade",
    category: "Battle",
    price: "155000$",
    description: "The AeroVironment Switchblade is a miniature loitering munition designed by AeroVironment and used by several branches of the United States military." +  
                "Small enough to fit in a backpack, the Switchblade launches from a tube, flies to the target area, and crashes into its target while detonating its explosive warhead.",
    image: sixth_drone,
  },
  {
    id: 6,
    title: "MQ-9 Reaper",
    category: "Battle",
    price: "190000$",
    description: "The MQ-9 Reaper is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
    image: fifth_drone,
  },
  {
    id: 7,
    title: "Bayraktar",
    category: "Battle",
    price: "290000$",
    description: "The Bayraktar is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
    image: seventh_drone,
  },
  {
    id: 8,
    title: "Bayraktar",
    category: "Inspection",
    price: "2000$",
    description: "The Bayraktar is an armed, multi-mission, medium-altitude, long-endurance remotely piloted aircraft that is employed" +  
                "primarily against dynamic execution targets and secondarily as an intelligence collection asset.",
    image: title_drone,
  },
];

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
          <Routes>
            <Route path="/" element={<Home cards={dronesCard} />} />
            <Route path="/catalog" element={<Catalog products={dronesToSell}/>} />
            <Route path="/product/:productId" element={<ItemNavigation products={dronesToSell}/>} />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
