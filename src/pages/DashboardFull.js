import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./DashboardFull.module.css";
const DashboardFull = () => {
  return (
    <div className={styles.dashboardFull}>
      <section className={styles.fixedSideBar}>
        <div className={styles.topMenuContainer}>
          <img
            className={styles.welcomeMessageIcon}
            alt=""
            src="/welcomemessage@2x.png"
          />
          <nav className={styles.menu}>
            <a className={styles.menu1}>
              <img className={styles.icon} alt="" src="/icon5.svg" />
              <div className={styles.addTask}>Dashboard</div>
            </a>
            <div className={styles.menuChild} />
            <Link className={styles.menu2} to="/profile">
              <img className={styles.icon} alt="" src="/icon1.svg" />
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
      <div className={styles.desktop3}>
        <div className={styles.desktop3Inner}>
          <div className={styles.frameParent}>
            <div className={styles.welcomeShashankParent}>
              <div className={styles.welcomeShashank}>Welcome, Shashank</div>
              <div className={styles.whatWouldYou}>
                What would you like to do today?
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
        <div className={styles.columnTitle}>
          <h4 className={styles.toDo}>Your Broadcasts</h4>
          <div className={styles.wrapper}>
            <div className={styles.div}>3</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
                    <div className={styles.highfidelityDesign}>Message 2</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 2
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <a className={styles.progressStatus}>
                  <a className={styles.progressInfo1}>
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
                    <div className={styles.highfidelityDesign}>Message 3</div>
                    <div className={styles.makeClearDesign}>
                      Company Bulk Messages 3
                    </div>
                  </div>
                  <img
                    className={styles.threeDotIcon}
                    alt=""
                    src="/threedot.svg"
                  />
                </div>
                <a className={styles.progressStatus}>
                  <a className={styles.progressInfo1}>
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
        <div className={styles.frameGroup}>
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
                <div className={styles.progressStatus4}>
                  <a className={styles.progressInfo1}>
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
                <div className={styles.progressStatus4}>
                  <a className={styles.progressInfo1}>
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
        <div className={styles.frameGroup}>
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
                          className={styles.icon}
                          alt=""
                          src="/chatteardropdots.svg"
                        />
                        <div className={styles.div1}>7</div>
                      </div>
                      <div className={styles.links}>
                        <img
                          className={styles.icon}
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
