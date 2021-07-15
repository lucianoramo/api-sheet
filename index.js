const template = document.getElementById("template").content;
const url = 'https://script.google.com/macros/s/AKfycbxkES476KYOYlIrvzn5uKFVbFxUILyddsO1R4fzAhI/dev'
//const url = 'https://api.github.com/users/defunkt'


document.getElementById("row-567154182").appendChild(template)


// Default options are marked with *
fetch(url,{
    
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': `gzip, deflate, br`,
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': '_ga = GA1.2.1067080271.1600721016; __exponea_etc__=64b904fd-af12-42b3-bfaf-5cc886656a5c; __exponea_ab_ABtest_Freshchat_202009__=Freshchat_test_202009',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
        'x-client-data': 'CJO2yQEIo7bJAQjBtskBCKmdygEIhrXKAQiZtcoBCKzHygEI6cjKAQie+csB'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer-when-downgrade', 
}).then(response => response.json()).then(data => console.log(data))


/*
, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // Defaultbody: JSON.stringify(data) // body data type must match "Content-Type" header
}*/
