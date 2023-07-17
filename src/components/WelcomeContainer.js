import { useMemo } from "react";
import { Button } from "@mui/material";
import styles from "./WelcomeContainer.module.css";
const WelcomeContainer = ({
  whatWouldYouLikeToDoToday,
  frame12Href,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.desktop3Inner} style={frameDivStyle}>
      <div className={styles.frameParent}>
        <div className={styles.welcomeShashankParent}>
          <div className={styles.welcomeShashank}>Welcome, {JSON.parse(localStorage.getItem('name'))}</div>
          <div className={styles.whatWouldYou}>{whatWouldYouLikeToDoToday}</div>
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
  );
};

export default WelcomeContainer;
