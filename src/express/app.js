const request = require("request"),
  express = require("express"),
  body_parser = require("body-parser"),
  axios = require("axios").default,
  cors= require("cors"),
  app = express().use(body_parser.json()); // creates express http server
  app.use(cors());
  Message = require('../db/db.js');

//mongo 


// // Sets server port and logs message on success
app.listen(process.env.PORT || 3001, () => console.log("webhook is listening"));

//Accepts POST requests at /webhook endpoint
app.post("/webhook", (req, res) => {
  // Parse the request body from the POST
  let body = req.body;

  // Check the Incoming webhook message
  console.log(JSON.stringify(req.body, null, 2));

  // Verify the event is a WhatsApp message
  if (req.body.object === "page" && req.body.entry) {
    const entry = req.body.entry[0];

    // Check if the entry has any message events
    if (
      entry.changes &&
      entry.changes[0] &&
      entry.changes[0].value &&
      entry.changes[0].value.messages &&
      entry.changes[0].value.messages[0]
    ) {
      const message = entry.changes[0].value.messages[0];
      const phone_number_id = entry.changes[0].value.metadata.phone_number_id;
      const from = message.from;
      const msg_body = message.text.body;

      console.log("Received message: " + msg_body);
      saveMessage(body.phone_number, 'recieved', 'text', body.template_name);
    }
  }

  res.sendStatus(200);
});

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests 
app.get("/webhook", (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
  **/
  const verify_token = 'TOKEN1234';

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

function saveMessage(phoneNumber, direction, type, content) {
  const message = new Message({
    phoneNumber,
    direction,
    type,
    content
  });

  message.save()
    .then((savedMessage) => {
      console.log('Message saved successfully:', savedMessage);
    })
    .catch(err => {
      console.error(err);
    });
}




app.post('/sendmessage', (req, res) => {
  // get the request body as a JSON object
  let body = req.body;

  console.log(body);
  // validate the required fields
  if (!body.access_token || !body.whatsapp_number_id || !body.version_number || !body.phone_number || !body.template_name) {
    return res.status(400).send('Missing required fields');
  }

  // construct the data object for the axios request
  let data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": body.phone_number,
    "type": "template",
    "template": {
      "name": body.template_name,
      "language": {
        "code": "en_US"
      }
    }
  });

  // construct the url for the axios request
  let url = `https://graph.facebook.com/${body.version_number}/${body.whatsapp_number_id}/messages`;

  // construct the config object for the axios request
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${body.access_token}`
    },
    data : data
  };

  // make the axios request and handle the response
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    res.status(200).send('Message sent successfully');
    saveMessage(body.phone_number, 'sent', 'text', body.template_name);

  })
  .catch((error) => {
    console.log(error);
    res.status(500).send('Message failed to send');
  });
});

app.post('/sendtextmessage', (req, res) => {
  // get the request body as a JSON object
  let body = req.body;

  console.log(body);
  // validate the required fields
  if (!body.access_token || !body.whatsapp_number_id || !body.version_number || !body.phone_number || !body.message) {
    return res.status(400).send('Missing required fields');
  }

  // construct the data object for the axios request
  let data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": body.phone_number,
    "type": "text",
    "text": {
      "body":body.message
    }
  });

  // construct the url for the axios request
  let url = `https://graph.facebook.com/${body.version_number}/${body.whatsapp_number_id}/messages`;

  // construct the config object for the axios request
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${body.access_token}`
    },
    data : data
  };

  // make the axios request and handle the response
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    res.status(200).send('Message sent successfully');
    saveMessage(body.phone_number, 'sent', 'text', body.message);

  })
  .catch((error) => {
    console.log(error);
    res.status(500).send('Message failed to send');
  });
});


app.get("/phonenumbers", async (req, res) => {
  try {
    // Query the database for all unique phone numbers
    const phoneNumbers = await Message.distinct("phoneNumber");
    console.log(phoneNumbers);
    res.status(200).json(phoneNumbers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching phone numbers' });
  }
});

app.get("/messages", async (req, res) => {
  try {
    const phoneNumber = req.query.phoneNumber;
    
    // Create a query object
    const query = phoneNumber ? { phoneNumber } : {};

    // Query the database for messages based on the provided criteria
    const messages = await Message.find(query);

    console.log(messages);
    res.status(200).json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching messages' });
  }
});
