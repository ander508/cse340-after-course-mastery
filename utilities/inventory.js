const  inventoryModel = require("../controllers/inventoryConctroller")


async function inventoryList(sql){
    
    let htmltag =`<ul class="format-inventory">`

    if (sql.length > 0){
         sql.forEach((row)=>{
        htmltag += `<li>
                        <a href="../../inv/detail/${row.inv_id}"
                            title="View ${row.inv_make} ${row.inv_model} details">
                            <img class="inv-img" src="${row.inv_thumbnail}" alt="Image of ${row.inv_make} ${row.inv_model} on Anderson Motors" width="100"/>
                        </a>

                        <div>
                            <hr class="h-line">
                            <h2>
                                <a href="../../inv/detail/${row.inv_id}"
                                    title="View ${row.inv_make} ${row.inv_model} details">
                                    ${row.inv_make} ${row.inv_model}
                                </a>
                            </h2>
                            <span class="format-price">
                                $${new Intl.NumberFormat('en-US').format(row.inv_price)}
                            </span>
                        </div>
                    </li>`
        })
        htmltag += `</ul>`

    }
    else{
            htmltag += '<p class="notice">Sorry, no matching vehicles could be found.</p>'
            htmltag += `</ul>`
    }
    return htmltag
    
}

async function singleVehicleDetails(sql) {
  let htmltag = `<ul>`

  if (sql) {
    htmltag += `
      <li class="single-vehicle-card">
      <h2>${sql.inv_make} ${sql.inv_model}</h2>
        <img src="${sql.inv_image}" 
             alt="Image of ${sql.inv_make} ${sql.inv_model}">
      </li>
    `
    htmltag += `</ul>`
  } else {
    htmltag += `
      <p class="notice">Sorry, no matching vehicles could be found.</p>
    </ul>`
  }

  return htmltag
}


module.exports ={inventoryList, singleVehicleDetails}