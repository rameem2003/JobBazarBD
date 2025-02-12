const app = require("./app");

require("dotenv").config();

app.listen(process.env.PORT || 8000, () => {
  console.log({
    msg: "JobBazarBD API MySQL",
    developed_by: "ROL Studio Bangladesh",
    server_ip: `${process.env.hostUrl}${process.env.PORT}`,
  });
});
