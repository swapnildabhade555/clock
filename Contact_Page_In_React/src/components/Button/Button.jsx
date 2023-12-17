import styles from './Button.module.css';
const Button = (props) => {
  const {isOutline,icon,text}=props;
  return (
    <button className={isOutline?styles.outlinebtn:styles.primarybtn}>
      {icon}
      {text}
    </button>
  )
}

export default Button
