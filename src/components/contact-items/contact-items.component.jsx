import ContactItem from "../contact-item/contact-item.component";

import "./contact-items.styles.scss";

const contacts = [
  {
    linkClassName: "contact-item--instagram",
    linkTo: "https://www.instagram.com/jagerthejager/",
    fontAwesomeIconClass: "fa-brands fa-instagram",
    contactText: "Instagram của xốp nè hiehie",
  },
  {
    linkClassName: "contact-item--facebook",
    linkTo: "https://www.facebook.com/profile.php?id=100092571115747/",
    fontAwesomeIconClass: "fa-brands fa-facebook-f",
    contactText: "Facebook fanpage nè hiehie",
  },
  {
    linkClassName: "contact-item--facebook",
    linkTo: "https://www.facebook.com/jagerthejagerxop/",
    fontAwesomeIconClass: "fa-brands fa-facebook-f",
    contactText: "Cũng là Facebook fanpage nhưng là cái phụ hiehie",
  },
  {
    linkClassName: "contact-item--tiktok",
    linkTo: "https://www.tiktok.com/@odayiembanthuochoconhuou/",
    fontAwesomeIconClass: "fa-brands fa-tiktok",
    contactText: "Tiktok của xốp - Nơi những điều vô tri lên ngôi",
  },
  {
    linkClassName: "contact-item--phone",
    linkTo: "",
    fontAwesomeIconClass: "fa-solid fa-phone",
    contactText: "0927183879 - Ân",
  },
];
const ContactItems = () => {
  return (<div className="contact-items-container">
    {contacts.map((contact) => {
        return <ContactItem contact={contact}/>
    })}
  </div>);
};

export default ContactItems;
