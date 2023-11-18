precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function restarCantidad(){
    totalCantidad = document.querySelector('.cantidad'); 
    restar = Number(totalCantidad.innerHTML);
    restar = restar - 1
    totalCantidad.innerHTML = restar
}

function restarTotal(){
    precioBase = document.querySelector('.precio-inicial')
    totalPagar = document.querySelector('.valor-total');
    totalPagar.innerHTML = Number(totalPagar.innerHTML) - Number(precioBase.innerHTML)
}

function sumarCantidad(){
    totalCantidad = document.querySelector('.cantidad'); 
    sumar = Number(totalCantidad.innerHTML);
    sumar = sumar + 1
    totalCantidad.innerHTML = sumar
}

function sumarTotal(){
    precioBase = document.querySelector('.precio-inicial')
    totalPagar = document.querySelector('.valor-total');
    totalPagar.innerHTML = Number(totalPagar.innerHTML) + Number(precioBase.innerHTML);

}