import express, {Application, Response, Request, NextFunction} from 'express';

const PORT = 5000;
const app:Application = express();

const addNum = (a:number, b:number) => a + b;


app.get('/', (req:Request, res:Response, next:NextFunction) => {
    console.log(addNum(3, 4));
    res.send("Hello World!");
})

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));