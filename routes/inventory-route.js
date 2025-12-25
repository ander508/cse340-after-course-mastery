// Needed Resources 
const express = require("express")
const router = new express.Router() 
const InventoryController = require("../controllers/inventoryConctroller")
const inventoryUtilities = require("../utilities/inventory")


router.get("/type/:classification_id", InventoryController.buildInventoryUsingClassification_Id)

router.get("/detail/:inv_id", InventoryController.singleVehicleDetails)


module.exports =router

