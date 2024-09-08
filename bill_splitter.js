//Initial Logic for Calculating the Tip
var customerBill = 295 //number
var customertip = (300 < customerBill < 50) ? (.2*customerBill) : (.15*customerBill) 
console.log("Customer Tip:",customertip)

//Add output functionality to display bill, tip, and total
let customerTotal = customerBill+customertip //number
let customerSummary = `Customer Summary:
The bill was $${customerBill} 
The tip was $${customertip}
The total was $${customerTotal}`
console.log(customerSummary)
