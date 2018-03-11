var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1567431555,
  channelSecret: 0e04a6c95eb8ae631aef0dbeb0e8b4dd,
  channelAccessToken: S3ox7pq0nE9NIPuaptLmGwQ/C8Y5HKzZnWXerbST+QXko0B7ohuo3ITi3KPdbCSkk5j2LLaxC4aseflB+CjtKtWeIvlqpIBSavy+p4TFM1V1Hi57kdxajWgWushS/jm40tVImCsqhhrPtavpSwFGzQdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});