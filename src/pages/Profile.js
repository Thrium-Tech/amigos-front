import { TextField, Button } from "@mui/material";
// import SideBarContainer from "../components/SideBarContainer";
import WelcomeContainer from "../components/WelcomeContainer";
import NavigationContainer from "../components/NavigationContainer";
import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <NavigationContainer
        menuHref="/dashboard"
        icon="/icon3.svg"
        icon1="/icon4.svg"
      />
      <div className={styles.desktop3}>
        <WelcomeContainer
          whatWouldYouLikeToDoToday="Manage Your Profile and Settings"
          frame12Href="/create-new-message"
          propPadding="var(--padding-21xl) var(--padding-45xl) var(--padding-7xl)"
        />
        <div className={styles.logInWrapper}>
          <div className={styles.logIn}>
            <div className={styles.fields}>
              <div className={styles.inputField}>
                <div className={styles.label}>
                  <div className={styles.label1}>Name</div>
                  <div className={styles.labelCaption}>Label Caption</div>
                </div>
                <TextField
                  className={styles.input}
                  color="success"
                  variant="outlined"
                  type="text"
                  label="Label"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className={styles.inputField}>
                <div className={styles.label}>
                  <div className={styles.label1}>Phone</div>
                  <div className={styles.labelCaption} />
                </div>
                <TextField
                  className={styles.input}
                  color="success"
                  variant="outlined"
                  type="text"
                  label="Label"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className={styles.password}>
                <div className={styles.inputField}>
                  <div className={styles.label}>
                    <div className={styles.label1}>Password</div>
                    <div className={styles.labelCaption}>Label Caption</div>
                  </div>
                  <TextField
                    className={styles.input}
                    color="success"
                    variant="outlined"
                    type="text"
                    label="Label"
                    placeholder="Placeholder"
                    size="medium"
                    margin="none"
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button sx={{ width: 224 }} variant="contained" color="success">
                Update Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
