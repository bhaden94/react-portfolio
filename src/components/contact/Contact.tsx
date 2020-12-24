import { ContactObj, ContactObject } from '../../infoObjects/ContactObj'

function Contact() {

    const contact: ContactObj = ContactObject()

    return (
        <div>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">github</a><br />
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a><br />
            <a href={contact.email} target="_blank" rel="noopener noreferrer">email</a>
        </div>
    );
}

export default Contact;
