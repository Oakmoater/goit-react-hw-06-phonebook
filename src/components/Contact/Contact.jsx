import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
    <li key={contact.id}>
        <span>{contact.name}: {contact.number}</span>
        <button type="button" id={id} onClick={handleDelete}>Delete</button> 
    </li>
    )
};

export default Contact;