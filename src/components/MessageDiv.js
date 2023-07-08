import styles from "./MessageDiv.module.css";
const MessageDiv = ({ highfidelityDesign, makeClearDesignAndColor, list }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.taskCardWrapper}>
        <div className={styles.taskCard}>
          <img
            className={styles.cardImageIcon}
            alt=""
            src="/-cardimage@2x.png"
          />
          <div className={styles.cardContent}>
            <div className={styles.titleHolder}>
              <div className={styles.highfidelityDesign}>
                {highfidelityDesign}
              </div>
              <div className={styles.makeClearDesign}>
                {makeClearDesignAndColor}
              </div>
            </div>
            <img className={styles.threeDotIcon} alt="" src="/threedot.svg" />
          </div>
          <a className={styles.progressStatus}>
            <a className={styles.progressInfo}>
              <div className={styles.title}>
                <img className={styles.listIcon} alt="" src={list} />
                <div className={styles.progress}>{`View Responses ->`}</div>
              </div>
              <div className={styles.completedValue}>2/10</div>
            </a>
            <div className={styles.slider}>
              <div className={styles.slider1}>
                <div className={styles.intial} />
                <div className={styles.intial} />
              </div>
            </div>
            <div className={styles.collaboration}>
              <div className={styles.commentsLinks}>
                <div className={styles.comments}>
                  <img
                    className={styles.chatteardropdotsIcon}
                    alt=""
                    src="/chatteardropdots.svg"
                  />
                  <div className={styles.div}>7</div>
                </div>
                <div className={styles.links}>
                  <img
                    className={styles.chatteardropdotsIcon}
                    alt=""
                    src="/linksimplehorizontal.svg"
                  />
                  <div className={styles.div1}>2</div>
                </div>
              </div>
              <div className={styles.profileStack}>
                <div className={styles.profile03}>
                  <img
                    className={styles.image8Icon}
                    alt=""
                    src="/image-8@2x.png"
                  />
                </div>
                <div className={styles.profile02}>
                  <img
                    className={styles.image8Icon}
                    alt=""
                    src="/image-8@2x.png"
                  />
                </div>
                <div className={styles.profile02}>
                  <img
                    className={styles.image8Icon}
                    alt=""
                    src="/image-8@2x.png"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MessageDiv;
