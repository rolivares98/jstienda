function calcularTotal() {
    // variables definidas
    const precioRAM = 25000;
    const precioSSD = 50000;
    const stockMaxRAM = 50;
    const stockMaxSSD = 50;
    const costoEnvio = 5000;

    // obtener la cantidad solicitada del usuario
    const ramQty = parseInt(document.getElementById("ramQty").value) || 0;
    const ssdQty = parseInt(document.getElementById("ssdQty").value) || 0;

    //condicional de stock
    if(ramQty >stockMaxRAM){
        alert(`No tenemos suficiente stock de RAM. Stock disponible: ${stockMaxRAM}`);
        return;
    }
    if(ssdQty >stockMaxSSD){
        alert(`No tenemos suficiente stock de SSD. Stock disponible: ${stockMaxSSD}`);
        return;
    }

    // Calculo del total
    let subtotalRAM = ramQty*precioRAM;
    let subtotalSSD = ssdQty*precioSSD;
    // condicional de descuento
    if(ramQty > 5){
        subtotalRAM *= 0.9;
        alert("por compras mayores a 5 unidades, obtienes un descuento del 10% en tu compra");
    }

    let total =subtotalRAM + subtotalSSD + costoEnvio;

    // for para aplicar envio gratis si el total es mayor a 200000
    for(let i =0; i<= total; i++){
        if(total>200000){
            total-=costoEnvio;
            alert("envio gratis en compras mayores a 200000");
            break;
        }
    }

    // Mostrar el total en la sección resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Total a pagar: $${total}</h3>`;
}

// Añadir evento al botón para calcular el total
document.getElementById("calcularTotal").addEventListener("click", calcularTotal);