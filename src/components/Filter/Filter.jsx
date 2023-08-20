import { useDispatch } from "react-redux";
import { setStatusFilter } from "redux/filterSlice";

const Filter = () => {
    const dispatch = useDispatch();
    
    const filterSeter = (event) => {
        const inputValue = event.target.value;
        dispatch(setStatusFilter(inputValue)); // Передача значення фільтру у дію
        console.log(dispatch(setStatusFilter(inputValue)));
    };

    return (
    <input type="text" onChange={filterSeter} />
    )
};

export default Filter;