const updateOperation = {
	$match: { 'operationType': 'update' } 
   
}
const fullDocument={ fullDocument: 'updateLookup' } 

module.exports = {
   updateOperation
}