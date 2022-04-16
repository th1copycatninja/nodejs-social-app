import express, { Application, Request, Response } from "express";
import dayjs from "dayjs";
const app: Application = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(`<h1>Hello worldddd</h1>`);
});

app.get("/api/v1/instagram", (req: Request, res: Response) => {
  const data = {
    username: "an_insane_insaan",
    followers: 100,
    follow: 69,
    data: dayjs(new Date()).format("DD-MM - hh:mm:ss"),
  };

  res.status(200).send(data);
});
app.get("/api/v1/facebook", (req: Request, res: Response) => {
  const data = {
    username: "govind maheshwari",
    followers: 100,
    follow: 69,
    data: dayjs(new Date()).format("DD-MM - hh:mm:ss"),
  };

  res.status(200).send(data);
});
app.get("/api/v1/linkedin", (req: Request, res: Response) => {
  const data = {
    username: "govind mahehswari",
    followers: 100,
    follow: 69,
    data: dayjs(new Date()).format("DD-MM - hh:mm:ss"),
  };

  res.status(200).send(data);
});

//if match with above route name its hit them if dont then throw url data.

app.get("/api/v1/:id",(req:Request, res:Response) => {
        console.log(req?.params?.id);
        res.status(200).json({params:req?.params?.id})
})

app.listen(PORT, () => {
  console.log(`server running in ${PORT}`);
});
