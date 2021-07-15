const template = document.getElementById("template").content;
const url = 'https://sheet.best/api/sheets/7952a4c1-c57c-4201-a5f2-da156bd6ea16'
//const url = 'https://api.github.com/users/defunkt'


document.getElementById("row-567154182").appendChild(template)


// Default options are marked with *
fetch(url).then(response => response.json()).then(data => console.log(data))


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
