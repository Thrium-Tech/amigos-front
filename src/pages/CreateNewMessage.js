import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import styles from './CreateNewMessage.module.css';
import NavigationContainer from '../components/NavigationContainer';
import axios from 'axios';

const CreateNewMessage = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [templateName, setTemplateName] = useState('');

  const handlePhoneNumbersChange = (event) => {
    setPhoneNumbers(event.target.value.split(','));
  };

  const handleTemplateNameChange = (event) => {
    setTemplateName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Phone Numbers:', phoneNumbers);
    console.log('template name:', templateName);

    phoneNumbers.forEach((phoneNumber) => {
      let data = JSON.stringify({
        "access_token": JSON.parse(localStorage.getItem('password')),
        "whatsapp_number_id": JSON.parse(localStorage.getItem('number')),
        "version_number": "v17.0",
        "phone_number": phoneNumber.trim(), // Trim any whitespace
        "template_name": templateName
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        // url: 'https://whatcrm.org/sendmessage',
        url: 'http://localhost:3001/sendmessage',
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
    });
  };

  return (
    <div className={styles.createNewMessage}>
      <NavigationContainer menuHref="/dashboard" icon="/icon3.svg" icon1="/icon4.svg" />
      <div className={styles.desktop3}>
        <div className={styles.desktop3Inner}>
          <div className={styles.frameWrapper}>
            <div className={styles.welcomeShashankParent}>
              <div className={styles.welcomeShashank}>
                Welcome, {JSON.parse(localStorage.getItem('name'))}
              </div>
              <div className={styles.manageYourProfile}>Create Bulk Messages To Send Users</div>
            </div>
          </div>
        </div>
        <div className={styles.logInWrapper}>
          <form className={styles.logIn} onSubmit={handleFormSubmit}>
            <div className={styles.label}>
              <div className={styles.importContactList}>Import Contact List:</div>
              <div className={styles.labelCaption} />
            </div>
            <TextField
              sx={{ width: 423 }}
              color="success"
              variant="outlined"
              multiline
              label="Enter Text here"
              placeholder="Textarea placeholder"
              margin="none"
              onChange={handlePhoneNumbersChange}
            />
            <div className={styles.label}>
              <div className={styles.importContactList}>Your template_Name:</div>
              <div className={styles.labelCaption} />
            </div>
            <TextField
              sx={{ width: 423 }}
              color="success"
              variant="outlined"
              multiline
              label="Enter Text here"
              placeholder="Textarea placeholder"
              margin="none"
              onChange={handleTemplateNameChange}
            />
            <div className={styles.buttons}>
              <Button sx={{ width: 224 }} variant="contained" color="success" type="submit">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewMessage;
