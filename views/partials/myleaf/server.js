var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function (request, response) {
    readFileByTypes(request, response);
});
server.listen(8010, function() {
    console.log('listen at port:8010');
});
function readFileByTypes(request, response) {
    console.log("I am in "+request.url);
    if (request.url == "/myupload") {
        console.log(request);
        console.log(request);
    } else if  (request.url != "/favicon.ico") {
        console.log("访问");
        console.log(request.url);
        // 注意读取一般文件还好，读取图片使用UTF-8就会出问题
        var patternHtml = /(.*).html$/;
        var patternCss = /(.*).css$/;
        var patternJs = /(.*).js$/;
        var patternJpg = /(.*).jpg$/;
        var patternpng = /(.*).png$/;
        var patternJson = /(.*).json$/;
        var pathname = url.parse(request.url).pathname;
        // console.log(2);
        fs.readFile(pathname.substr(1), function(err, data) {
            // console.log("I am in readFile!");
            if (err)
                console.error(err);
            console.log(pathname.substr(1));
            console.log(patternJson.test(pathname));
            if (patternHtml.test(pathname)) {
                response.writeHead(200, {'Content-Type': 'text/html'});
            } else if (patternCss.test(pathname)) {
                response.writeHead(200, {'Content-Type': 'text/css'});
            } else if (patternJs.test(pathname)) {
                response.writeHead(200, {'Content-Type': 'text/javascript'});
            } else if (patternJpg.test(pathname)) {
                response.writeHead(200, {'Content-Type': 'image/jpeg'});
                console.log('jpg');
            } else if (patternpng.test(pathname)) {
                response.writeHead(200, {'Content-Type': 'image/png'});
            } else if (patternJson.test(pathname)) {
                response.writeHead(200, {'Content-Type': 'application/Json'});
                console.log("I am success in json!");
                // response.write(data);
            }
            // console.log("data: "+data);
            response.end(data);
        });
    }
}