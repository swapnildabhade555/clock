import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
const ContactForm = () => {
  return (
  <section className={styles.container}>
    <div className={styles.contactform}>
      <div className={styles.topbtn}>
      <Button text="Via Support Chat" 
        icon={<MdMessage fontSize="24px"/>}
      />
      <Button text="Via Call" 
        icon={<IoCall fontSize="24px"/>}
      />
      </div>
      <Button 
        isOutline={true}
       text="Via Email Form" 
        icon={<IoMdMail fontSize="24px"/>}
      />
      <form>
        <div className={styles.formcontroller}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
        </div>
        <div className={styles.formcontroller}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
        </div>
        <div className={styles.formcontroller}>
          <label htmlFor="text">Text</label>
          <textarea name="text" color='5' rows='5'/>
        </div>
        <div style={{display:'flex',justifyContent:"end"}}>
          <Button text="Submit"/>
        </div>
      </form>
      </div>
      

      <div className={styles.contactimg}>
        <img src='images/contact.svg' alt='contact'/>
      </div>
    </section>
  )
}

export default ContactForm;
