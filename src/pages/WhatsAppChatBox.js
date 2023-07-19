import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import WelcomeContainer from "../components/WelcomeContainer";
import styles from "./WhatsAppChatBox.module.css";

const WhatsAppChatBox = () => {
  const [numbers, setNumbers] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null); // Store socket in state

  // Create socket connection
  useEffect(() => {
    const newSocket = io('http://localhost:3002'); 
    setSocket(newSocket);

    return () => newSocket.close(); // Clean up socket connection
  }, []);

  const userNumber = JSON.parse(localStorage.getItem('number'));

  useEffect(() => {
    // Fetch numbers
    const fetchNumbers = async () => {
      const response = await axios.get(`http://localhost:3001/phonenumbers?user=${userNumber}`);
      setNumbers(response.data);
    }
    fetchNumbers();
  }, []);
  
  useEffect(() => {
    // Fetch all messages for the selected number
    if (selectedNumber) {
      const fetchMessages = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/messages?user=${userNumber}&phoneNumber=${selectedNumber}`);
          const allChats = response.data;
          const last9Chats = allChats.slice(-9);
          setChats(last9Chats);
        } catch (error) {
          console.error(error);
          // Handle error
        }
      };
      fetchMessages();
    }
  }, [selectedNumber]);

  useEffect(() => {
    if (!socket) return; // If the socket is not connected, do nothing

    // Handle newMessage event
    socket.on('newMessage', (newMessage) => {
      setChats((chats) => {
        let newChats = [...chats, newMessage];
        if(newChats.length > 9) {
          newChats.shift(); // Remove the oldest message if the total number of messages exceeds 9
        }
        return newChats;
      });
      console.log(newMessage)
    });
  }, [socket]); // Only re-run the effect if the socket changes


  
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      let data = JSON.stringify({
        "access_token": JSON.parse(localStorage.getItem('password')),
        "whatsapp_number_id": JSON.parse(localStorage.getItem('number')),
        "version_number": "v17.0",
        "phone_number": selectedNumber,
        "message": message
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        // url: 'https://whatcrm.org/sendmessage',
        url: 'http://localhost:3001/sendtextmessage',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
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
