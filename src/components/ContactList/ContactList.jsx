import { useSelector } from "react-redux";
import Contact from '../Contact/Contact'
import { getContacts, getFilter } from "redux/selectors";

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const contactsFilter = useSelector(getFilter);

    console.log("contacts:", contacts);
    console.log("contactsFilter:", contactsFilter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.includes(contactsFilter)
    )

    // const filteredContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    // )

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
