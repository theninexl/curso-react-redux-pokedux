import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../slices/dataSlice";

export const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setFilter(e.target.value));    
  }

  return <Input.Search 
    placeholder='Buscar...' 
    style={{ marginBottom: 10 }}
    onChange={handleOnChange} />
}