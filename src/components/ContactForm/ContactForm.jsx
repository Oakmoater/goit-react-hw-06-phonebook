import { useDispatch } from "react-redux";
import { addContact } from "redux/contactsSlice";

const ContactForm = () => {
    const dispatch = useDispatch();

    const addNewContact = (name, number) => {
        dispatch(addContact(name, number));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Отримуємо дані імені та номера зі стану форми
        const name = event.target.name.value;
        const number = event.target.number.value;

        // Викликаємо функцію addNewContact з отриманими даними
        addNewContact(name, number);

        // Очистити поля після додавання контакту
        event.target.name.value = "";
        event.target.number.value = "";
    };

    return (
        <form onSubmit={handleSubmit}>
            <span>Name</span>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <span>Number</span>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <button type="submit" name="Add contact">Add contact</button>
        </form>
    )
};

export default ContactForm;
