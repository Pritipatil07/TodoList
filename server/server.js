import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"todolist",
  password:"root",
  port:5432,
})

db.connect();

app.get("/",async (req,res)=>{
    const username= req.query.username
    const result = await db.query("SELECT * FROM todoitems WHERE username=($1) ORDER BY id ASC",[username]);
    const items = result.rows;
    res.json(items)
})

app.post("/add",async (req,res)=>{
    const item = req.body.text
    const name = req.body.name
    try {
      await db.query("INSERT INTO todoitems (title,username) VALUES ($1,$2)",[item,name])
      res.redirect("/")
    } catch (error) {
      console.log(error.message);
    }
})

app.post("/delete",async (req,res)=>{
  const id = req.body.id
  try {
    await db.query("DELETE FROM todoitems WHERE id= $1",[id])
    res.redirect("/")
  } catch (error) {
    
  }
})

app.post("/edit",async (req,res)=>{
  const item = req.body.editText
  const id = req.body.id
  try {
    await db.query("UPDATE todoitems SET title = ($1) WHERE id = $2", [item, id])
    res.redirect("/")
  } catch (error) {
    
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
