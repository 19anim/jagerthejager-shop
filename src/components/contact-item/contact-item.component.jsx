import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact-item.styles.scss";
import { Fragment } from "react";

const ContactItem = ({ contact }) => {
  const { linkClassName, linkTo, fontAwesomeIconClass, contactText } = contact;
  if(linkTo){
    return (
      <div className="contact-item">
        <Link
          className={`contact-item-wrapper ${linkClassName}`}
          to={linkTo}
          target="_blank"
        >
          <div className="contact-item-outer">
            <FontAwesomeIcon icon={fontAwesomeIconClass} />
          </div>
          <span>{contactText}</span>
        </Link>
      </div>
    );
  }
  else{
    return (
      <div className="contact-item">
        <div
          className={`contact-item-wrapper ${linkClassName}`}
        >
          <div className="contact-item-outer">
            <FontAwesomeIcon icon={fontAwesomeIconClass} />
          </div>
          <span>{contactText}</span>
        </div>
      </div>
    );
  }
};

export default ContactItem;
