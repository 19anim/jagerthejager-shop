import ContactItem from "../contact-item/contact-item.component";

import "./contact-items.styles.scss";

const contacts = [
  {
    id: 1,
    linkTo: "https://www.instagram.com/jagerthejager/",
    fontAwesomeIconClass: "fa-brands fa-instagram",
    contactText: "Instagram của xốp nè hiehie",
  },
  {
    id: 2,
    linkTo: "https://www.facebook.com/profile.php?id=100092571115747/",
    fontAwesomeIconClass: "fa-brands fa-facebook-f",
    contactText: "Facebook fanpage nè hiehie",
  },
  {
    id: 3,
    linkTo: "https://www.facebook.com/jagerthejagerxop/",
    fontAwesomeIconClass: "fa-brands fa-facebook-f",
    contactText: "Cũng là Facebook fanpage nhưng là cái phụ hiehie",
  },
  {
    id: 4,
    linkTo: "https://www.tiktok.com/@odayiembanthuochoconhuou/",
    fontAwesomeIconClass: "fa-brands fa-tiktok",
    contactText: "Tiktok của xốp - Nơi những điều vô tri lên ngôi",
  },
  {
    id: 5,
    linkTo: "",
    fontAwesomeIconClass: "fa-solid fa-phone",
    contactText: "0927183879 - Ân",
  },
];
const ContactItems = () => {
  return (
    <div className="contact-items-container">
      {contacts.map((contact) => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export default ContactItems;
