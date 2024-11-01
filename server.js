const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

app.post("/mail-request", async (req, res) => {
  //   console.log(req.body);
  const TransportHer = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "drdwyn1@gmail.com",
      pass: "rzelwbvlrsdtkfoh",
    },
  });
  const TransportMe = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "drdwyn1@gmail.com",
      pass: "rzelwbvlrsdtkfoh",
    },
  });
  const forHer = {
    from: "One and Only Adi! Sir drdwyn1@gmail.com",
    to: "arsrivastawa2710@gmail.com",
    html: "Dear <b>Queen👑</b>,<br/> <br/>Thinking of you today as tera b'day h jaaneman💕... Or soch soch kr pagal ho rkhe h ki kb mil rhi ho... 🥹<br/><br/>Happy Birthday to the most special person in my life! 🌹✨ I hope your day is filled with as much joy and warmth as you've brought into my life. You're a wonderful soul, and I feel lucky to have someone as amazing as you to care about. May this year bring you closer to your dreams, and may all your days be as bright and beautiful as you are.<br/><br/>Wishing you nothing but happiness today and always<br/><br/>By the way whenever we meet, let's go somewhere you say baaki hm to soch hi rhe h🤞<br/><br/>Calmless, impatient still loving & caring<br/>∆ <| ! tya Srivastava<br/><br/>ENCLOSURE: Lots of love and wishes for the day...",
    subject: "Emergency Alert: A Gorgeous Soul Turns a Year Older!",
  };
  const forMe = {
    from: "drdwyn1@gmail.com",
    to: "arsrivastawa2710@gmail.com",
    text: "It has been delivered! Let's see what happens next!",
    subject: "It has been delivered!",
  };
  TransportMe.sendMail(forMe, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  TransportHer.sendMail(forHer, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Email sent");
});

app.post("/final-mail", async (req, res) => {
  const Transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "drdwyn1@gmail.com",
      pass: "rzelwbvlrsdtkfoh",
    },
  });
  const forHer = {
    from: "Adi! Sir drdwyn1@gmail.com",
    to: "arsrivastawa2710@gmail.com",
    html: "Dear <b>Princess</b>,<br/> <br/>Thank you for your lovely response! <br/>Meanwhile, take a peek at this website and see how you've brightened my heart, like sunshine on a cloudy day.<br/><br/> Also, a request to princess that please open this in your laptop❤️<br/><br/> <a href='https://www.adi-sir.com/'> Click Here </a>",
    subject: "Hey There",
  };
  const forMe = {
    from: "drdwyn1@gmail.com",
    to: "arsrivastawa2710@gmail.com",
    text: "Sending Email using Node.js",
    subject: "That was easy!",
  };
  Transport.sendMail(forHer, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Email sent");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
