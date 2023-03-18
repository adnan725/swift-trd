import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul>
          <li>About</li>
          <li>Products</li>
          <li>Policy</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
