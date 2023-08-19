import { useSelector } from "react-redux";
import Contact from '../Contact/Contact'
import { getContacts, getFilter } from "redux/selectors";


const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = contacts.filter(contact =>
        contact.name.includes(filter)
    )

    return (
        <ul className="contact-list">
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    )

};

export default ContactList;
