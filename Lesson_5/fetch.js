const url=fetch('https://api.github.com/users');
url.then((res)=>res.json())
    .then((profile)=>console.log(profile))
    .catch((err)=>console.log(err));
