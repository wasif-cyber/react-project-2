import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const ContactForm = () => {

const [name, setName] = useState("Anees");
const [email, setEmail] = useState("support@coding.com");
const [text, setText] = useState("Subscribe");

const onSubmit = (event) => {
  event.preventDefault();

  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);

  // console.log("name",event.target[0].value);
  // console.log("email",event.target[1]).email;
  // console.log("text",event.target[2]).value;
  
}

  return (
    <section className={styles.container}>
  <div className={styles.contact_form}>
    <div className={styles.top_btn}>
    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
    <Button 
    text="VIA CALL"
     icon={<MdPhoneInTalk  fontSize="24px"/>}/>
  </div>
  <Button
    isOutline={true}
    text="VIA EMAIL FORM"
    icon={<MdEmail  fontSize="24px"/>}/>

<form onSubmit={onSubmit}>
  <div className={styles.form_control}>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" />
  </div>
  <div className={styles.form_control}>
  <label htmlFor="email">Email</label>
  <input type="email" name="email" />
  </div>

  <div className={styles.form_control}>
  <label htmlFor="email">Text</label>
  <textarea name="text" rows="8" />
  </div>
  <div style={{display:"flex",justifyContent:"end",}}>
  <Button text="SUBMIT BUTTON"/>

  </div>
</form>
<div>
  {name + " " + email + " " + text }
</div>
    </div>
    <div className={styles.contact_image}>
      <img src="/images/clock-24-hours.png" alt="contact image" />
    </div>
  </section>

  );
};

export default ContactForm;