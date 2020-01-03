const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.joints.id",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@joints.id",
    pass: "NNVuE$QZ2ezsw]h^"
  }
});

exports.helloWorld = functions.https.onRequest(async (request, response) => {
  let message = {
    from: "noreply@joints.id",
    to: "test-3j9jl@mail-tester.com",
    subject: "Hello",
    text: "Hello World\nToday is a good day.\n\nRegards,\nJohn Cena",
    html:
      "<h1>Hello World<br>Today is a good day.<br><br>Regards,<br>John Cena</h1>"
  };

  let result = await transporter.sendMail(message);

  response.send(result);
});
