import WelcomeContainer from "../components/WelcomeContainer";
import styles from "./DashboardEmpty.module.css";
const WhatsAppChatBox = () => {
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
            <a className={styles.menu2} href="/livechat">
              <img className={styles.icon} alt="" src="/icon1.svg" />
              <div className={styles.addTask}>LiveChat</div>
            </a>
            <a className={styles.menu2} href="/">
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
      </div>
    </div>
  );
};

export default WhatsAppChatBox;
