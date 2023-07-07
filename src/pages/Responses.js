import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Responses.module.css";
const Responses = () => {
  return (
    <div className={styles.responses}>
      <section className={styles.fixedSideBar}>
        <div className={styles.topMenuContainer}>
          <img
            className={styles.welcomeMessageIcon}
            alt=""
            src="/welcomemessage@2x.png"
          />
          <nav className={styles.menu}>
            <Link className={styles.menu1} to="/dashboard">
              <img className={styles.icon} alt="" src="/icon3.svg" />
              <div className={styles.addTask}>Dashboard</div>
            </Link>
            <div className={styles.menuChild} />
            <Link className={styles.menu2} to="/profile">
              <img className={styles.icon} alt="" src="/icon4.svg" />
              <div className={styles.addTask}>Profile</div>
            </Link>
            <div className={styles.menu3}>
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.addTask}>Logout</div>
            </div>
          </nav>
        </div>
        <div className={styles.cta} />
      </section>
      <div className={styles.desktop3}>
        <div className={styles.desktop3Inner}>
          <div className={styles.frameParent}>
            <div className={styles.welcomeShashankParent}>
              <div className={styles.welcomeShashank}>Welcome, Shashank</div>
              <div className={styles.whatWouldYou}>
                What would you like to do today?
              </div>
            </div>
            <Button
              sx={{ width: 199 }}
              variant="contained"
              color="success"
              href="/create-new-message"
            >
              + New Message
            </Button>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.whatsappWebhook}>Whatsapp Webhook</div>
        </div>
      </div>
    </div>
  );
};

export default Responses;
