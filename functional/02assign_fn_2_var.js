const PRINT_MODE_HALLTICKET = true

// function hallTicket(info) {
//     if (PRINT_MODE_HALLTICKET) {
//         console.log(info)
//     }
// }

if (PRINT_MODE_HALLTICKET) {
    hallTicket = printHallTicket
} else {
    hallTicket = doNotPrintHT
}

hallTicket("printing hall ticket..")

function printHallTicket(info) {
    console.log(info)
}

function doNotPrintHT() { }