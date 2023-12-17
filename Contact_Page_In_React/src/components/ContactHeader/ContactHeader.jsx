import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
            Dolorem obcaecati tenetur eius sequi assumenda ab iure <br/> dolores possimus voluptatem blanditiis!</p>
      
    </div>
  )
}

export default ContactHeader;
