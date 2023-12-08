import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

export const PokemonCard = ({ id, name, image, abilities }) => {
  
  return (
    <Card
      title={`${id} ${name}`}
      cover={<img src={image} 
      alt={name} />}
      extra={<StarOutlined/>} >
        <Meta
         description={renderAbilities(abilities)}/>
      </Card>
  );
}

const renderAbilities = (abilities) => {
    return abilities.map(ability => ability).join(', ');
}