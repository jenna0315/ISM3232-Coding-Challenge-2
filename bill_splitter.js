//Initial Logic for Calculating the Tip
let customerBill = 295 //number
let customertip = (300 < customerBill < 50) ? (.2*customerBill) : (.15*customerBill) 
console.log("Customer Tip:",customertip)

//Add output functionality to display bill, tip, and total
let customerTotal = customerBill+customertip //number
let customerSummary = `Customer Summary:
The bill was $${customerBill} 
The tip was $${customertip}
The total was $${customerTotal}`
console.log(customerSummary)

//Create and test calculateTip function
let Bill = 100
function calculateTip(Bill,tip){return Bill+(300 < Bill < 50) ? (.2*Bill) : (.15*Bill)}
let  tip = (300 < Bill < 50) ? (.2*Bill) : (.15*Bill)
console.log("Customer Bill:",Bill)
console.log("Customer Tip:",calculateTip(Bill,tip))

//Implement and populate arrays for bills, tips, and totals
let bills = {275, 40, 430}
