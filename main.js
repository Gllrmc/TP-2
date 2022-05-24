const valorTicket = 200
const pricing = [80, 50, 15]
function calcularTotal() {
    let quantity = document.getElementById("quantity").value 
    let category = document.getElementById("category").value -1
    let total = quantity * valorTicket *( 1 - pricing[category] / 100).toFixed(2)
    document.getElementById("total").innerHTML=total
}
function clearAll() {
    document.getElementById("firstName").value = ''
    document.getElementById("lastName").value = ''
    document.getElementById("emailAddress").value = ''
    document.getElementById("quantity").value = ''
    document.getElementById("category").value = 3
    document.getElementById("total").innerHTML = 0
}

function submitForm() {
    window.alert("Conectando BackEnd...")
}