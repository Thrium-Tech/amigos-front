const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

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
  })
  .catch((error) => {
    console.log(error);
    res.status(500).send('Message failed to send');
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
