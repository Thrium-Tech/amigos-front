const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  let body = req.body;

  console.log(JSON.stringify(body, null, 2));

  if (body.object === "whatsapp_business_account" && body.entry) {
    let entry = body.entry[0];
    if (entry.changes && entry.changes[0] && entry.changes[0].value && entry.changes[0].value.messages) {
      let message = entry.changes[0].value.messages[0];
      let metadata = entry.changes[0].value.metadata;
      let contact = entry.changes[0].value.contacts ? entry.changes[0].value.contacts[0] : null;

      let phone_number_id = metadata.phone_number_id;
      let from = message.from;
      let msg_id = message.id;
      let msg_body = message.text.body;
      let contact_name = contact ? contact.profile.name : '';

      console.log("Received message: " + msg_body);
      saveMessage(phone_number_id, from, msg_id, msg_body, contact_name);
    }
  }

  res.sendStatus(200);
});

function saveMessage(phoneNumberId, from, messageId, messageBody, contactName) {
  // Your database code here...
  console.log(`Saving message ${messageId} from ${from} with body "${messageBody}" for phone number ID ${phoneNumberId} from contact ${contactName}`);
}

app.listen(3000, () => console.log(`Server is listening on port 3000`));