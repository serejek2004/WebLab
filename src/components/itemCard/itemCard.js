import React, { useState } from "react";
import { ItemContainer, HeadContainer, Image, InputLabels, TitleObj, InputField, FootContainer, ColaborateRectangles } from "./itemCard.styled";
import first_drone from "../icons/first_drone.png";
import second_drone from "../icons/second_drone.png";
import third_drone from "../icons/third_drone.png";
import fourth_drone from "../icons/fourth_drone.png";
import fifth_drone from "../icons/fifth_drone.png";
import sixth_drone from "../icons/sixth_drone.png";
import seventh_drone from "../icons/seventh_drone.png";
import title_drone from "../icons/title_photo.png";
import { useDispatch } from 'react-redux';
import { Button, Modal, Space, InputNumber } from "antd";
import { NavLink } from "react-router-dom";

let cardImages = [
    first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone, 
    first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
    first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
    first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
  ]

const ItemCard = ({ product }) => {
    const [isModal, setIsModal] = useState(false);
    const [value, setValue] = useState('1');
    const dispatch = useDispatch();

    const addDrone = () => {
        dispatch({
            type: "ADD_DRONE",
            payLoad: {
                id: product.id,
                img: cardImages[product.id],
                category: product.category,
                title: product.title,
                price: product.price,
                count: parseInt(value),
            },
        });
        showConfirmModal();
    };

    const showConfirmModal = () => {
        setIsModal(true);
    };

    const handleOk = () => {
        setIsModal(false);
    };

    const handleCancel = () => {
        setIsModal(false);
    };
    return (
        <ItemContainer>
            <HeadContainer>
                <Image src={cardImages[product.id-1]}></Image>
                <TitleObj>
                    <a>
                        {product.category}
                    </a>
                    <h1>
                        {product.title}
                    </h1>
                    <p>
                        {product.description}
                    </p>
                    <InputLabels>
                        <h4>Counting fields</h4>
                        <InputField type="text" placeholder="1237..."/>
                    </InputLabels>
                </TitleObj>
            </HeadContainer>
            <FootContainer>
                <h2>Price: {product.price}</h2>
                <ColaborateRectangles>
                    <a href='/catalog'> 
                        Go back
                    </a>
                    <a onClick={addDrone}> 
                        Add to cart
                    </a>
                </ColaborateRectangles>
            </FootContainer>
            <Modal
                title="Cart"
                open={isModal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <NavLink key="back" to="/cart">
                        <Button onClick={handleOk}>To Cart</Button>
                    </NavLink>,
                    <Button key="continue" type="primary" onClick={handleCancel} style={{ marginLeft: "20px" }}>
                        Continue
                    </Button>
                ]}
            >
                <p>{product.title} has been added to your cart.</p>
            </Modal>
        </ItemContainer>
    );
};

export default ItemCard;
