const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const Docker = require("dockerode");
const docker = new Docker();
const nodemailer = require("nodemailer");
app.get("/containers", (req, res) => {
  docker.listContainers({ all: true }, (err, containers) => {
    if (err) {
      console.error("Error:", err);
      return;
    }

    res.json(containers);
  });
});

app.get("/container/:id", async (req, res) => {
  const { id } = req.params;
  let state;
  docker.listContainers({ id }, (err, containers) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    state = containers[0].State;
  });
  const container = docker.getContainer(id);
  const stats = await container.stats({ stream: false });
  if (
    stats.cpu_stats.cpu_usage.total_usage / stats.cpu_stats.system_cpu_usage >
    30
  ) {
    sendEmail("New data generated!", "Details: ...");
  }
  res.json({ stats, state });
});

app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const container = docker.getContainer(id);

  container.remove((err, data) => {
    if (err) {
      console.error(`Error removing container: ${err}`);
      return;
    }

    res.json({ message: "container removed", data });
  });
});

app.get("/stop/:id", async (req, res) => {
  const { id } = req.params;
  const container = docker.getContainer(id);

  container.stop((err, data) => {
    if (err) {
      console.error(`Error sstopping container: ${err}`);
      return;
    }

    res.json({ message: "container stopped", data });
  });
});

app.get("/start/:id", async (req, res) => {
  const { id } = req.params;
  const container = docker.getContainer(id);

  container.start((err, data) => {
    if (err) {
      console.error(`Error starting container: ${err}`);
      return;
    }

    res.json({ message: "container started", data });
  });
});

// app.get("/logs/:id", async (req, res) => {
//   const { id } = req.params;
//   const container = docker.getContainer(id);

//   // Create a stream to receive the logs
//   const logStream = process.stdout;

//   const options = {
//     stderr: true,
//     stdout: true,
//     follow: true,
//   };

//   const stream = await container.logs(options);
//   container.modem.demuxStream(stream, logStream, logStream);

//   res.json({ stream: JSON.parse(stream) });

//   // res.setHeader("Content-Type", "text/event-stream");
//   // container.logs(options, (err, stream) => {
//   //   if (err) {
//   //     console.error(err);
//   //     return;
//   //   }
//   //   res.json(stream);
//   // });
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jaideep.jambhale@gmail.com", // Replace with your email address
    pass: "your_email_password", // Replace with your email password
  },
});
function sendEmail(subject, body) {
  const mailOptions = {
    from: "jaideep.jambhale@gmail.com", // Replace with your email address
    to: "yksworks113@gmail.com", // Replace with the recipient's email address
    subject: subject,
    text: body,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
