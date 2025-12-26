const invModel = require("../models/home_model")

async function getNav(req, res){
    let data = await invModel.getClassifications()
    console.log(data)
    data.rows.forEach((row)=>{
        console.log(row.classification_id+":"+ row.classification_name)
    })
    let htmltag = `<ul>`
    htmltag +=`<li><a href="/" title="Home Page">Home</a></li>`

    data.rows.forEach((row) =>{
        htmltag +=
        `<li>
            <a href="/inv/type/${row.classification_id}" 
            title="See our Inventory of ${row.classification_name} vehicles">
            ${row.classification_name}</a>
        </li>
        `
    })
    htmltag +=`</ul>`
    
    return htmltag;
}



/* ****************************************
 * Middleware For Handling Errors
 * Wrap other function in this for 
 * General Error Handling
 **************************************** */
// Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

// REWRITTEN
function handleErrors(fn) {
    return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)
}





module.exports = {getNav, handleErrors}