import NavigationContainer from "../components/NavigationContainer";
import WelcomeContainer from "../components/WelcomeContainer";
import styles from "./Responses.module.css";

const Responses = () => {
  return (
    <div className={styles.responses}>
      <NavigationContainer
        menuHref="/dashboard"
        icon="/icon3.svg"
        icon1="/icon4.svg"
      />
      <div className={styles.desktop3}>
        <WelcomeContainer
          whatWouldYouLikeToDoToday="What would you like to do today?"
          frame12Href="/create-new-message"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.whatsappWebhook}>Whatsapp Webhook</div>
        </div>
      </div>
    </div>
  );
};

export default Responses;
