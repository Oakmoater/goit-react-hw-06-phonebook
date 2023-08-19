import { useDispatch } from "react-redux";
import { setStatusFilter } from "redux/filterSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filterSeter = () => dispatch(setStatusFilter())

    return (
    <input type="text" onChange={filterSeter} />
    )
};

export default Filter;