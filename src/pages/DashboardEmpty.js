import { Button } from "@mui/material";
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
            <a className={styles.menu2}>
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
        <div className={styles.desktop3Inner}>
          <div className={styles.frameParent}>
            <div className={styles.welcomeShashankParent}>
              <div className={styles.welcomeShashank}>Welcome, Shashank</div>
              <div className={styles.whatWouldYou}>
                What would you like to do today?
              </div>
            </div>
            <Button sx={{ width: 199 }} variant="contained" color="success">
              + New Message
            </Button>
          </div>
        </div>
        <div className={styles.desktop3Child}>
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
