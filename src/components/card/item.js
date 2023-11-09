import { Card } from "antd";

const { Meta } = Card;

const CardItem = ({ title = '', description, imageSrc, }) => (

    <Card
        style={{ width: 300, marginRight: "60px", marginLeft: "60px" }}
        cover={
            <img style={{height: "auto" }} alt="example" src={imageSrc} />
        }
    >
        <Meta title={title} description={description} />
    </Card>
);

export default CardItem