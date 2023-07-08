import styles from "./SideBarContainer.module.css";
const SideBarContainer = ({
  productIds,
  productIdsArray,
  productIdsString,
}) => {
  return (
    <div className={styles.fixedSideBar}>
      <div className={styles.topMenuContainer}>
        <img
          className={styles.welcomeMessageIcon}
          alt=""
          src="/welcomemessage@2x.png"
        />
        <nav className={styles.menu}>
          <div className={styles.menu1}>
            <img className={styles.icon} alt="" src={productIds} />
            <div className={styles.addTask}>Dashboard</div>
          </div>
          <div className={styles.menuChild} />
          <div className={styles.menu2}>
            <img className={styles.icon1} alt="" src={productIdsArray} />
            <div className={styles.addTask1}>Profile</div>
          </div>
          <div className={styles.menu3}>
            <img className={styles.icon} alt="" src={productIdsString} />
            <div className={styles.addTask2}>Logout</div>
          </div>
        </nav>
      </div>
      <div className={styles.cta} />
    </div>
  );
};

export default SideBarContainer;
