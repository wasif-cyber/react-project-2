import styles from "./Navigation.module.css";

const Navigation =() => {

  // console.log(styles);
return (

  <nav className={`${styles.navigation} container`}>
    <div className="logo">
      <img src="/images/coding-logo.png" alt="do some coding logo" />
    </div>

<ul>
  <li>Home</li>
  <li>About Us</li>
  <li>Contact Us</li>
</ul>


  </nav>

);
};

export default Navigation;