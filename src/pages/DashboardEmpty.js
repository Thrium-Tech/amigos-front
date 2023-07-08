import WelcomeContainer from "../components/WelcomeContainer";
import styles from "./DashboardEmpty.module.css";
const DashboardEmpty = () => {
  return (
    <div className={styles.dashboardEmptyMain}>
      <nav className={styles.fixedSideBar}>
        <a className={styles.topMenuContainer}>
          <img className={styles.welcomeMessageIcon} alt="" />
          <nav className={styles.menu}>
            <a className={styles.menu1}>
              <img className={styles.icon} alt="" src="/icon5.svg" />
              <div className={styles.addTask}>Dashboard</div> 
            </a>
            <div className={styles.menuChild} />
            <a className={styles.menu2} href="/Profile">
              <img className={styles.icon} alt="" src="/icon1.svg" />
              <div className={styles.addTask}>Profile</div>
            </a>
            <a className={styles.menu2}>
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.addTask}>Logout</div>
            </a>
          </nav>
        </a>
        <div className={styles.welcomeMessageIcon} />
      </nav>
      <div className={styles.desktop3}>
        <WelcomeContainer
          whatWouldYouLikeToDoToday="What would you like to do today?"
          propPadding="var(--padding-21xl) var(--padding-45xl) var(--padding-5xl)"
        />
        <div className={styles.desktop3Inner}>
          <div className={styles.columnTitleWrapper}>
            <div className={styles.columnTitle}>
              <h6 className={styles.toDo}>{`No Messages Created `}</h6>
              <div className={styles.wrapper}>
                <div className={styles.div}>3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEmpty;
