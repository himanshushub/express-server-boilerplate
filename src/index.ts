import "./dbConfig";
import ExpressApp from "./routes";

const PORT = process.env.PORT || 5000;
ExpressApp.listen(PORT);
