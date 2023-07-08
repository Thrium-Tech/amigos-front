import NavigationContainer from "../components/NavigationContainer";
import WelcomeContainer from "../components/WelcomeContainer";
import MessageDiv from "../components/MessageDiv";
import styles from "./DashboardFull.module.css";
const DashboardFull = () => {
  return (
    <div className={styles.dashboardFull}>
      <NavigationContainer
        icon="/icon5.svg"
        icon1="/icon1.svg"
        welcomeMessageCursor="unset"
        menuCursor="pointer"
        iconCursor="unset"
      />
      <div className={styles.desktop3}>
        <WelcomeContainer
          whatWouldYouLikeToDoToday="What would you like to do today?"
          frame12Href="/create-new-message"
          propPadding="var(--padding-21xl) var(--padding-45xl) var(--padding-5xl)"
        />
        <div className={styles.columnTitle}>
          <h4 className={styles.toDo}>Your Broadcasts</h4>
          <div className={styles.wrapper}>
            <div className={styles.div}>3</div>
          </div>
        </div>
        <div className={styles.frameParent}>
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
                    <div className={styles.highfidelityDesign}>Message 1</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 1
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <a className={styles.progressStatus}>
                  <div className={styles.progressInfo}>
                    <a className={styles.title}>
                      <img className={styles.listIcon} alt="" src="/list.svg" />
                      <div
                        className={styles.progress}
                      >{`View Responses ->`}</div>
                    </a>
                    <div className={styles.completedValue}>2/10</div>
                  </div>
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
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.chatteardropdotsIcon}
                          alt=""
                          src="/linksimplehorizontal.svg"
                        />
                        <div className={styles.div2}>2</div>
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
          <MessageDiv
            highfidelityDesign="Message 2"
            makeClearDesignAndColor="Company Bulk Messages 2"
            list="/list.svg"
          />
          <MessageDiv
            highfidelityDesign="Message 3"
            makeClearDesignAndColor="Company Bulk Messages 3"
            list="/list1.svg"
          />
        </div>
        <div className={styles.frameParent}>
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
                    <div className={styles.highfidelityDesign}>Message 4</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 4
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <a className={styles.progressStatus}>
                  <div className={styles.progressInfo}>
                    <div className={styles.title1}>
                      <img className={styles.listIcon} alt="" src="/list.svg" />
                      <div
                        className={styles.progress}
                      >{`View Responses ->`}</div>
                    </div>
                    <div className={styles.completedValue}>2/10</div>
                  </div>
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
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.chatteardropdotsIcon}
                          alt=""
                          src="/linksimplehorizontal.svg"
                        />
                        <div className={styles.div2}>2</div>
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
                    <div className={styles.highfidelityDesign}>Message 5</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 5
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <div className={styles.progressStatus2}>
                  <a className={styles.progressInfo2}>
                    <div className={styles.title1}>
                      <img className={styles.listIcon} alt="" src="/list.svg" />
                      <div
                        className={styles.progress}
                      >{`View Responses ->`}</div>
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
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.chatteardropdotsIcon}
                          alt=""
                          src="/linksimplehorizontal.svg"
                        />
                        <div className={styles.div2}>2</div>
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
                </div>
              </div>
            </div>
          </div>
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
                    <div className={styles.highfidelityDesign}>Message 6</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 6
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <div className={styles.progressStatus2}>
                  <a className={styles.progressInfo2}>
                    <div className={styles.title1}>
                      <img
                        className={styles.listIcon}
                        alt=""
                        src="/list1.svg"
                      />
                      <div
                        className={styles.progress}
                      >{`View Responses ->`}</div>
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
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.chatteardropdotsIcon}
                          alt=""
                          src="/linksimplehorizontal.svg"
                        />
                        <div className={styles.div2}>2</div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
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
                    <div className={styles.highfidelityDesign}>Message 7</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 7
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <a className={styles.progressStatus}>
                  <div className={styles.progressInfo}>
                    <div className={styles.title1}>
                      <img className={styles.listIcon} alt="" src="/list.svg" />
                      <div
                        className={styles.progress}
                      >{`View Responses ->`}</div>
                    </div>
                    <div className={styles.completedValue}>2/10</div>
                  </div>
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
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.chatteardropdotsIcon}
                          alt=""
                          src="/linksimplehorizontal.svg"
                        />
                        <div className={styles.div2}>2</div>
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
                    <div className={styles.highfidelityDesign}>Message 8</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 8
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <a className={styles.progressStatus}>
                  <div className={styles.progressInfo}>
                    <div className={styles.title1}>
                      <img className={styles.listIcon} alt="" src="/list.svg" />
                      <div
                        className={styles.progress}
                      >{`View Responses ->`}</div>
                    </div>
                    <div className={styles.completedValue}>2/10</div>
                  </div>
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
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.chatteardropdotsIcon}
                          alt=""
                          src="/linksimplehorizontal.svg"
                        />
                        <div className={styles.div2}>2</div>
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
                    <div className={styles.highfidelityDesign}>Message 9</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 9
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <a className={styles.progressStatus}>
                  <div className={styles.progressInfo}>
                    <div className={styles.title1}>
                      <img
                        className={styles.listIcon}
                        alt=""
                        src="/list1.svg"
                      />
                      <div
                        className={styles.progress}
                      >{`View Responses ->`}</div>
                    </div>
                    <div className={styles.completedValue}>2/10</div>
                  </div>
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
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.chatteardropdotsIcon}
                          alt=""
                          src="/linksimplehorizontal.svg"
                        />
                        <div className={styles.div2}>2</div>
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
        </div>
      </div>
    </div>
  );
};

export default DashboardFull;
