const pool = require("../database")

/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassifications(){
    const sql =  await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
  return sql
}

module.exports = {getClassifications}