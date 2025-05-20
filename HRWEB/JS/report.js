const emp_count_Link = "https://supreme-waffle-r4wq66j4xrvr3x99p-6006.app.github.dev/tolemp";

fetch(emp_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('emp').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});

const reg_count_Link = "https://supreme-waffle-r4wq66j4xrvr3x99p-6006.app.github.dev/tolreg";

fetch(reg_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('reg').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});

const country_count_Link = "https://supreme-waffle-r4wq66j4xrvr3x99p-6006.app.github.dev/tolcountry"
fetch(country_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('country').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});

const dep_count_Link = "https://supreme-waffle-r4wq66j4xrvr3x99p-6006.app.github.dev/toldep"
fetch(dep_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('dep').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});

const job_count_Link = "https://supreme-waffle-r4wq66j4xrvr3x99p-6006.app.github.dev/toljob"
fetch(job_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('job').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});

const job_h_count_Link = "https://supreme-waffle-r4wq66j4xrvr3x99p-6006.app.github.dev/toljob_h"
fetch(job_h_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('job_h').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});

const loc_count_Link = "https://supreme-waffle-r4wq66j4xrvr3x99p-6006.app.github.dev/tollocation"
fetch(loc_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('loc').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});