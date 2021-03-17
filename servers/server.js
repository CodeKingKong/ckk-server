
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;


app.use('/api', (req, res) => res.json(
    {
        "problems": [
          {
            "id": "1",
            "name": "Elevator",
            "explanation" : "엘리베이터 제어 시스템"
          },
          {
            "id": "2",
            "name": "SNS",
            "explanation" : "팔로잉 추천을 통해 카카오팔로잉 사용자들의 팔로잉이 각각 20명 이상이 되도록 하는 추천시스템 구현"
          }
        ]
    }
));

app.listen(port, () => {
    console.log(`express is running on ${port}`);
});
