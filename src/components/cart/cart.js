import { useSelector } from "react-redux";
import {
    CartMain,
    DroneImage, Price,
    DataInfo, DataButtonStyled, CartButton, ToCatalog, TotalPrice, BuyButton,
} from "./cart.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./actions";
import { useState, useEffect } from "react";
import first_drone from "../icons/first_drone.png";
import second_drone from "../icons/second_drone.png";
import third_drone from "../icons/third_drone.png";
import fourth_drone from "../icons/fourth_drone.png";
import fifth_drone from "../icons/fifth_drone.png";
import sixth_drone from "../icons/sixth_drone.png";
import seventh_drone from "../icons/seventh_drone.png";
import title_drone from "../icons/title_photo.png";

let cardImages = [
    first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone, 
    first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
    first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
    first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
  ]

const Cart = () => {
    const droneArray = useSelector((state) => state.droneList);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        droneArray.forEach((drone) => {
            totalPrice += Math.round(parseInt(drone.price)) * drone.count;
        });
        setTotalPrice(totalPrice);
    }, [droneArray]); 
    const dispatch = useDispatch();

    const handleIncrement = (title, category) => {
        dispatch(incrementCount({ title, category }));
    };
    
    const handleDecrement = (title, category) => {
        dispatch(decrementCount({ title, category }));
    };

    const filteredStadiums = droneArray.filter((drone) => drone.count > 0);

    return (
        <div>
            <CartMain>
                <div>
                    {filteredStadiums.map((drone, index) => (
                        <div key={index}>
                            <DataInfo>
                                <NavLink
                                    exact="true"
                                    to={`/product/${drone.id}`}
                                    style={{ textDecoration: "none", color: "black" }}
                                    onClick={(e) => {
                                        if (e.target.tagName === "BUTTON") {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <DroneImage src={cardImages[drone.id - 1]} />
                                </NavLink>
                                <p>{drone.title}</p>
                                <DataButtonStyled>
                                    <a onClick={() => handleDecrement(drone.title, drone.category)}>-</a>
                                    <p>{drone.count}</p>
                                    <a onClick={() => handleIncrement(drone.title, drone.category)}>+</a>
                                </DataButtonStyled>
                                <Price>{parseInt(drone.price)}$</Price>
                            </DataInfo>
                        </div>
                    ))}
                </div>
                {totalPrice <= 0 && (
                    <p className="Nothing">
                        Cart is empty!
                    </p>
                )}
                <CartButton>
                    {totalPrice > 0 && (
                        <TotalPrice>
                            Total amount: <p>{totalPrice}$</p>
                        </TotalPrice>
                    )}
                </CartButton>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginLeft: '-25%'}}>\
                    <ToCatalog href="/Catalog">To catalog</ToCatalog>
                    <BuyButton>Continue</BuyButton>
                </div>
            </CartMain>
        </div>

    );
};

export default Cart;