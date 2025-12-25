const pool = require("../database/index")


async function buildInventoryUsingClassification_Id(classification_id){
    try{

    const sql = await pool.query(`SELECT * FROM public.inventory as i 
        JOIN public.classification as c ON 
        i.classification_id = c.classification_id 
        WHERE i.classification_id = $1`, [classification_id]
        )
    return sql.rows
    }
catch (error) {
    console.error("getclassificationbyid error" + error)
    }
} 

async function singleVehicleDetails(inv_id){
try{
    const sql = await pool.query(`SELECT * FROM public.inventory as i WHERE i.inv_id = $1`, [inv_id])
    return sql.rows[0]
}
catch (error){
    console.error("Get Inventory by Inventory Id error" + error)
}
}


module.exports = {buildInventoryUsingClassification_Id, singleVehicleDetails}