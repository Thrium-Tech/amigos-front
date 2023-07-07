import { Button, TextField } from "@mui/material";
import styles from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.fixedSideBar}>
        <div className={styles.topMenuContainer}>
          <img
            className={styles.welcomeMessageIcon}
            alt=""
            src="/welcomemessage@2x.png"
          />
          <nav className={styles.menu}>
            <div className={styles.menu1}>
              <img className={styles.icon} alt="" src="/icon3.svg" />
              <div className={styles.addTask}>Dashboard</div>
            </div>
            <div className={styles.menuChild} />
            <div className={styles.menu2}>
              <img className={styles.icon1} alt="" src="/icon4.svg" />
              <div className={styles.addTask1}>Profile</div>
            </div>
            <div className={styles.menu3}>
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.addTask2}>Logout</div>
            </div>
          </nav>
        </div>
        <div className={styles.cta} />
      </div>
      <div className={styles.desktop3}>
        <div className={styles.desktop3Inner}>
          <div className={styles.frameParent}>
            <div className={styles.welcomeShashankParent}>
              <div className={styles.welcomeShashank}>Welcome, Shashank</div>
              <div className={styles.manageYourProfile}>
                Manage Your Profile and Settings
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
