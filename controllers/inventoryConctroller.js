const  inventoryModel = require("../models/inventory-model")
const  utilities = require("../utilities/inventory")
const  utilitiesIndex = require("../utilities/index")



async function buildInventoryUsingClassification_Id(req, res){
    const classification_id = req.params.classification_id
    let sql = await inventoryModel.buildInventoryUsingClassification_Id(classification_id)
    const html = await utilities.inventoryList(sql)
    
    let veh
    if (sql.length > 0) {
         veh = `${sql[0].classification_name} Vehicles`
    }
    else {
        veh = `No Vehicle Found`
    }
    const nav = await utilitiesIndex.getNav()
    res.render("./inventory/inventory", {
        title: veh,
        nav,
        html
    })
}


async function singleVehicleDetails(req, res) {
    const inv_id = req.params.inv_id
    const sql = await inventoryModel.singleVehicleDetails(inv_id)
    const htmltag = await utilities.singleVehicleDetails(sql)

    const nav = await utilitiesIndex.getNav()
    res.render("./inventory/detail", {
        title: "Details of ...",
        nav,
        htmltag,
    })
}

module.exports = { buildInventoryUsingClassification_Id,  singleVehicleDetails}