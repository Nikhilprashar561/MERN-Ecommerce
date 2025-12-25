import { app } from "./app.js";
import { connectionDB } from "./db/connection.js";

connectionDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Your Server listen at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Sorry We are Not Connected With Your Server`, error);
  });