import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StartButton } from "./StartButton";
import { setFavorite } from "../slices/dataSlice";


export const PokemonCard = ({ id, name, image, abilities, favorite }) => {
  const dispatch = useDispatch();
  const handleonClick = () => {
    dispatch(setFavorite({pokemonId: id}))
  }
  
  return (
    <Card
      title={`${id} ${name}`}
      cover={<img src={image} 
      alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleonClick}/>} >
        <Meta
         description={renderAbilities(abilities)}/>
      </Card>
  );
}

const renderAbilities = (abilities) => {
    return abilities.map(ability => ability).join(', ');
}