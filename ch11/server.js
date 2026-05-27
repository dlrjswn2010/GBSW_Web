// Express 서버
const express = require("express");
const app = express();

const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "gbsw_web",
});

conn.connect();

app.listen(3000, () => {
  console.log("3000번 포트 서버 대기 중");
});

app.get("/", (req, res) => {
  res.send("내 서버임.");
});

app.get("/user", (req, res) => {
  // send는 text/html 포맷
  // 요청도 json, 응답도 json
  conn.query("select * from tb_user", (err, rows, fields) => {
    if (err) {
      throw err;
    }
    res.json({ rows });
  });
});

app.get("/user/:id", (req, res, next) => {
  if (req.params.id === "0") {
    next();
  }
  conn.execute(
    "select * from tb_user where id = " + req.params,
    (err, rows, fields) => {
      if (err) {
        throw err;
      }
      res.json({ rows });
    },
  );
});
