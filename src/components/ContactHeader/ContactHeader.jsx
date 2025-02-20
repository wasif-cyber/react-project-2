import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT FORM</h1>
      <p>GET IN TOUCH! WE’RE ALWAYS HAPPY TO HEAR FROM YOU. WHETHER YOU HAVE QUESTIONS, FEEDBACK, OR SIMPLY WANT TO CHAT, YOU CAN REACH US THROUGH THE CONTACT FORM BELOW, OR CONNECT WITH US VIA PHONE, EMAIL, OR ON SOCIAL MEDIA.</p>
    </div>
  );
}

export default ContactHeader;