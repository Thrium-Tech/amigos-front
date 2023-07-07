import { Button } from "@mui/material";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.desktop4}>
        <div className={styles.fixedSideBar}>
          <div className={styles.topMenuContainer}>
            <div className={styles.welcomeMessage}>
              <img className={styles.lightningIcon} alt="" />
            </div>
            <nav className={styles.menu}>
              <a className={styles.menu1}>
                <img className={styles.icon} alt="" />
                <div className={styles.addTask}>Dashboard</div>
              </a>
              <div className={styles.menuChild} />
              <a className={styles.menu2}>
                <img className={styles.icon} alt="" />
                <div className={styles.addTask}>Profile</div>
              </a>
              <a className={styles.menu2}>
                <img className={styles.icon} alt="" />
                <div className={styles.addTask}>Logout</div>
              </a>
            </nav>
          </div>
          <div className={styles.cta} />
        </div>
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
                <div className={styles.toDo}>{`No Messages Created `}</div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
