const template = document.getElementById("template").content;
const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=VdAH6DNe9QEhj8K098F2qD0FIhUst9mCZRYtwXJiy06gq8H5k0JGM6g3bFIxVENHNwd3f5Eo5lFcfJvDStolR7zOy4ATK8WSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCPmjt-z_HRZ6rRz-bEYjntKFVnlSf1MZHdmidI-YJ1NAd6yodRMQeIw-1yvhzPNew&lib=MzuD9L98Jy1UVsvQ8QkohYVjilJU4QU4H'
//const url = 'https://api.github.com/users/defunkt'


document.getElementById("row-567154182").appendChild(template)


// Default options are marked with *
fetch(url,{
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', 
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
