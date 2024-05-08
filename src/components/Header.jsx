import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <h1>ContactApp</h1>
      <p>
        <a href="google.com">Google</a> |   training
      </p>
    </div>
  );
};

export default Header;

