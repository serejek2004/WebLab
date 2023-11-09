import React from "react";
import { HomeStyle, HeadingWrapper, HeadingContentWrapper, CardWrapper} from "./home.styled";
import ViewButton from "./ViewButton/viewbutton";
import title_photo from "../icons/title_photo.png";
import first_drone from "../icons/first_drone.png";
import second_drone from "../icons/second_drone.png";
import third_drone from "../icons/third_drone.png";
import CardItem from "../card/item";


const dataCard = [
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
];

const Home = () => {
    return (
        <HomeStyle>
            <HeadingWrapper>
                <img src={title_photo} alt="wtf" className="headingPhoto" />
                <HeadingContentWrapper>
                    <h1>
                        Choose your best drone to fry russian!
                    </h1>
                    <p>
                        Buying a drone is a unique way to destroy russians. It can be a birthday or New Year's gift. Give your loved ones the best emotions from destroying orcs.
                    </p>
                </HeadingContentWrapper>
            </HeadingWrapper>
            <CardWrapper>
                {dataCard.map(({ title, description, image}, idx) => (
                    <CardItem
                        title={title}
                        description={description}
                        imageSrc={image}
                        id={idx}
                    />
                ))}
            </CardWrapper>
            
            <ViewButton/>
        </HomeStyle>
    );
}

export default Home;