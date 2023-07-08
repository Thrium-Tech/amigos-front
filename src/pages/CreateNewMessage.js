import { TextField, Button, Icon } from "@mui/material";
// import SideBarContainer from "../components/SideBarContainer";
import NavigationContainer from "../components/NavigationContainer";
import styles from "./CreateNewMessage.module.css";
const CreateNewMessage = () => {
  return (
    <div className={styles.createNewMessage}>
      <NavigationContainer
        menuHref="/dashboard"
        icon="/icon3.svg"
        icon1="/icon4.svg"
      />
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
    </div>
  );
};

export default CreateNewMessage;
