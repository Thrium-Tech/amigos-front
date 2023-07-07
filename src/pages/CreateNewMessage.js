import { TextField, Button, Icon } from "@mui/material";
import styles from "./CreateNewMessage.module.css";
const CreateNewMessage = () => {
  return (
    <div className={styles.createNewMessage}>
      <div className={styles.fixedSideBar}>
        <div className={styles.topMenuContainer}>
          <img
            className={styles.welcomeMessageIcon}
            alt=""
            src="/welcomemessage@2x.png"
          />
          <nav className={styles.menu}>
            <div className={styles.menu1}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.addTask}>Dashboard</div>
            </div>
            <div className={styles.menuChild} />
            <div className={styles.menu2}>
              <img className={styles.icon1} alt="" src="/icon1.svg" />
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
          <div className={styles.frameWrapper}>
            <div className={styles.welcomeShashankParent}>
              <div className={styles.welcomeShashank}>Welcome, Shashank</div>
              <div className={styles.manageYourProfile}>
                Manage Your Profile and Settings
              </div>
            </div>
          </div>
        </div>
        <div className={styles.logInWrapper}>
          <form className={styles.logIn}>
            <div className={styles.label}>
              <div className={styles.importContactList}>
                Import Contact List:
              </div>
              <div className={styles.labelCaption} />
            </div>
            <TextField
              sx={{ width: 423 }}
              color="success"
              variant="outlined"
              multiline
              label={`Enter Text here



`}
              placeholder="Textarea placeholder"
              margin="none"
            />
            <Button sx={{ width: 400 }} variant="outlined" color="success">
              Browse Templates
            </Button>
            <div className={styles.label}>
              <div className={styles.importContactList}>Your Message:</div>
              <div className={styles.labelCaption} />
            </div>
            <TextField
              sx={{ width: 423 }}
              color="success"
              variant="outlined"
              multiline
              label={`Enter Text here



`}
              placeholder="Textarea placeholder"
              margin="none"
            />
            <Button sx={{ width: 271 }} variant="outlined" color="success">
              Add New Field
            </Button>
            <div className={styles.buttons}>
              <Button sx={{ width: 224 }} variant="contained" color="success">
                Update Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.textArea}>
        <div className={styles.div}>Label</div>
        <div className={styles.textBlock}>
          <div className={styles.hintText}>
            <p className={styles.blankLine}>Hint text</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
          <div className={styles.value}>0 / 225</div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewMessage;
