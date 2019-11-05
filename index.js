
exports.handler = async (event) => {
    var http = require('http');
    var url = 'http://quotes.rest/qod.json?category=love';
    const promise = new Promise(function(resolve,reject){
        http.get(url, function (res) {
            var body = '';
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                var quoteResponse = JSON.parse(body);
                console.log(quoteResponse.contents.quotes[0].quote);
                const accountSid = '';
                const authToken = '';
                const client = require('twilio')(accountSid, authToken);
    
                client.messages
                    .create({ from: 'whatsapp:', body: quoteResponse.contents.quotes[0].quote, to: 'whatsapp:' })
                    .then(message => console.log(message.sid));
            });
        });
    });
    return promise;
};
