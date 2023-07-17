import React, { useState, useEffect } from 'react';
import WelcomeContainer from "../components/WelcomeContainer";
import styles from "./WhatsAppChatBox.module.css";

const WhatsAppChatBox = () => {
  const [numbers, setNumbers] = useState(["1234567890", "0987654321"]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedNumber) {
      setChats([
        { direction: "sent", content: "Hello" },
        { direction: "received", content: "Hi there!" },
        { direction: "sent", content: "How are you?" },
        { direction: "received", content: "I'm good. Thanks for asking!" }
      ]);
    }
  }, [selectedNumber]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChats([...chats, { direction: "sent", content: message.trim() }]);
      setMessage("");
    }
  };

  return (
    <div className={styles.dashboardEmptyMain}>
      <nav className={styles.fixedSideBar}>
        <a className={styles.topMenuContainer}>
          <img className={styles.welcomeMessageIcon} alt="" />
          <nav className={styles.menu}>
            <a className={styles.menu1}>
              <img className={styles.icon} alt="" src="/icon5.svg" />
              <div className={styles.addTask}>Dashboard</div>
            </a>
            <div className={styles.menuChild} />
            <a className={styles.menu2} href="/livechat">
              <img className={styles.icon} alt="" src="/icon1.svg" />
              <div className={styles.addTask}>LiveChat</div>
            </a>
            <a className={styles.menu2} href="/">
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.addTask}>Logout</div>
            </a>
          </nav>
        </a>
        <div className={styles.welcomeMessageIcon} />
      </nav>
      <div className={styles.desktop3}>
        <WelcomeContainer
          whatWouldYouLikeToDoToday="What would you like to do today?"
          propPadding="var(--padding-21xl) var(--padding-45xl) var(--padding-5xl)"
        />

        {/* Chat section starts here */}
        <div className={styles.chatSection}>
          <div className={styles.chatOptions}>
            <select
              className={styles.selectNumber}
              onChange={(event) => setSelectedNumber(event.target.value)}
              value={selectedNumber || ""}
            >
              <option>Select a number</option>
              {numbers.map((number, index) => (
                <option key={index} value={number}>
                  {number}
                </option>
              ))}
            </select>

            <div className={styles.chatTextBox}>
              <input
                className={styles.messageInput}
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <button className={styles.sendButton} onClick={handleSendMessage}>Send</button>
            </div>
          </div>

          <div className={styles.chatMessages}>
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`${styles.chatMessage} ${
                  chat.direction === "sent" ? styles.sentMessage : styles.receivedMessage
                }`}
              >
                <p>
                  <strong>{chat.direction === 'sent' ? 'You' : 'Them'}:</strong> {chat.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Chat section ends here */}
      </div>
    </div>
  );
};

export default WhatsAppChatBox;
