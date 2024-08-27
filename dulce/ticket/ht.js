/*class Circulo {
    constructor(d){
        this.diametro=d
    }
*radio(){
        return this.#radio
    }
    area(){
        return this.diametro*this.diametro*Math.PI/4
    }
    perimetro(){
        return this.diametro*Math.PI
    }
}
const r1= new Circulo()

function calculo(){
    let diam = +document.getElementById("diam").value
    const circulo = new Circulo(diam)
    let span1 = document.getElementById("area")
    let span2 = document.getElementById("perimetro")
    span1.innerHTML = circulo.area().toFixed(2)
    span2.innerHTML = circulo.perimetro().toFixed(2)
    let div = document.getElementById("grafica")
}
*/
class Compra {

    constructor(operario, tarjeta) {//parametros
        this.operario = operario //propidades
        this.tarjeta = tarjeta
        this.productos = [] //arreglo
    }
    agregarProducto(prod) {
        this.productos.push(prod)//agregan el producto adentro del arreglo
    }
  subtotal() {
        //TARJETA
        let debito = document.getElementById("Debito").checked
        let credito = document.getElementById("Credito").checked
        let efectivo = document.getElementById("Efectivo").checked
        let acum = 0
        for (const producto of this.productos) { //rcorre el arreglo y acumula el precio
            acum = acum + producto.cantidad * producto.precio
        }
        if (debito === true) {
            acum = acum - (acum * 0.10)
        }
        else if (credito === true) {
            acum = acum + (acum * 0.10)
        }
        else if (efectivo === true) {
            acum = acum - (acum * 0.30)
        }
        return acum
    }
}


class Producto {
    constructor(nom, mar, prec, cantidad) {
        this.nombre = nom
        this.marca = mar
        this.precio = prec
        this.cantidad = cantidad
    }
    data() {
        return `${this.nombre} ${this.marca} ${this.precio}`
    }
}
/*let p0 = new Producto("palta", "Sabrocita", 4000)
let p1 = new Producto("Galletitas", "Terrabussi", 1500)

let compra = new Compra("javier", false)
compra.agregarProducto(p1)
compra.agregarProducto(p0)
console.log(compra.subtotal())*/

let compra = new Compra()
let cont = 1
function cargarCarrito() {






    let nombre = document.getElementById("nombreProducto").value
    let precio = parseFloat(document.getElementById("precioProducto").value)
    let cantidad = parseInt(document.getElementById("cantidadProducto").value)
    let marca = document.getElementById("marcaProducto").value
    let operario = document.getElementById("nombreOperario").value
    if (!nombre || !precio || !cantidad || !marca || !operario) {
        alert("Debe ingresar correctamente los datos")
    } else {
        let producto = new Producto(nombre, marca, precio, cantidad)
        //CREAR PARRAFOS
        let titulo = document.createElement("h5")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p5 = document.createElement("p")
        let p6 = document.createElement("p");
        //LLAMAR POR ID
        let p4=document.getElementById("precio")
        let p7 = document.getElementById("operario")
        let p8 = document.getElementById("metodopago")
        let divPadre = document.getElementById("divPadre")
        let divHijo = document.createElement("div")
        //INNSERTAR TEXTO
        titulo.textContent = "Producto N° " + cont
        p2.textContent = "Producto: " + nombre
        p3.textContent = "Marca:" + marca
        p5.textContent = "Cantidad: " + cantidad
        p6.textContent = "Precio por unidad: $" + precio
        //producto.data()//seleciona el evento adentro del elemento HTML
        compra.agregarProducto(producto)
        //TOTAL
        p4.textContent = "Total: $" + compra.subtotal()
        //OPERARIO
        p7.textContent = "Operario: " + operario
        //INSERTAR A DIV
        divHijo.append(titulo, p2, p3, p5, p6)
        divPadre.appendChild(divHijo)
        divHijo.className = 'ticket card card-body'//CLASE

        //Habilitar boton para imprimir
        let botonimprimir = document.getElementById("imprimir")
        botonimprimir.disabled = false
        cont++
    }


}
function Imprimir() {
    confirm("¿Desea imprimir?")
    let segunda = document.getElementById("segunda");
    segunda.remove()
    if (confirm) {
        window.print()
    }
}
/*
<div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>
*/