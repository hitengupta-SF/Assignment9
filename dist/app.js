import express from "express";
import cors from 'cors';
const app = express();
import route from "./src/route.js";
app.use(express.static('./dist/public'));
app.use(cors());
app.use(express.json());
app.use('/', route);
app.listen(2500, () => {
    console.log(`Listening on port 2500`);
});
//# sourceMappingURL=app.js.map