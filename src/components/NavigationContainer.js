import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationContainer.module.css";
const NavigationContainer = ({
  menuHref,
  icon,
  icon1,
  welcomeMessageCursor,
  menuCursor,
  iconCursor,
}) => {
  const topMenuContainerStyle = useMemo(() => {
    return {
      cursor: welcomeMessageCursor,
    };
  }, [welcomeMessageCursor]);

  const menuStyle = useMemo(() => {
    return {
      cursor: menuCursor,
    };
  }, [menuCursor]);

  const menu1Style = useMemo(() => {
    return {
      cursor: iconCursor,
    };
  }, [iconCursor]);

  return (
    <section className={styles.fixedSideBar}>
      <div className={styles.topMenuContainer} style={topMenuContainerStyle}>
        <img
          className={styles.welcomeMessageIcon}
          alt=""
          src="/welcomemessage@2x.png"
        />
        <nav className={styles.menu} style={menuStyle}>
          <Link className={styles.menu1} to="/dashboard-empty-main" style={menu1Style}>
            <img className={styles.icon} alt="" src={icon} />
            <div className={styles.addTask}>Dashboard</div>
          </Link>
          <div className={styles.menuChild} />
          <Link className={styles.menu2} to="/profile">
            <img className={styles.icon} alt="" src={icon1} />
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
  );
};

export default NavigationContainer;
