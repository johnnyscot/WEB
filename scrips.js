function abrircaja(){
    alert('Usted ha llamado al mozo, en breve se acercará a su mesa.')
}

var pedido
var bebida;
var suma = 0;

window.pedido = pedido
function pedir(pedido,bebida){

    
    pedido = prompt('Ingrese su pedido')
    pedido = pedido.toLowerCase()
    bebida = prompt('Que bebida desea?\nLinea Pepsi (7up, Mirinda, Pepsi) de 500mL')
    bebida = bebida.toLowerCase()
    orden = confirm('Usted ha ordenado lo siguiente: \nComida(s): '+ pedido + '\nBebida(s):' + bebida + '\n\nConfirme si es correcto o cancelar para volver a pedir')
    if(orden==true){
        if(pedido =='torta selva negra'){
            suma+=300  
        }
        else if(pedido == 'torta chocotorta'){
            suma+=300       
        }
        else if(pedido =='tarta de frutas'){
            suma+=220     
        }
        else if(pedido =='torta fraisier'){
            suma+=300   
        }
        else if(pedido =='torta rogel'){
            suma+=220 
        }
        else if(pedido =='torta snickers'){
            suma+=220
        }
        else if (pedido  == "burguer con huevo") {
            suma += 380
        }
        else if (pedido  == "burguer duplo") {
            suma += 580
        }
        else if (pedido  == "burguer super queso") {
            suma += 380
        }
        else if (pedido  == "burguer barbacoa") {
            suma += 380
        }
        else if (pedido  == "lomoluco") {
            suma += 380
        }
        else if (pedido  == "barroluco") {
            suma += 380
        }
        else if(pedido =='pizza de muzzarella'){
            suma+=500;
        }
        else if(pedido =='pizza doble muzzarella'){
            suma+=600;
        }
        else if(pedido =='pizza especial'){
            suma+=650;
        }
        else if(pedido =='pizza napolitana'){
            suma+=600;
        }
        else if(pedido =='pizza de choclo'){
            suma+=600;
        }
        else if(pedido =='pizza fugazzeta'){
            suma+=600;
        }
        else if(pedido =='pizza de rucula con jamon crudo'){
            suma+=780; 
        }
        else if(pedido == 'pizza anana con cerezas'){
            suma+=750;
        }
        else if(pedido == 'pizza fugazzeta'){
            suma+=600;
        }
        else if(pedido  == 'pizza de palmitos'){
            suma+=780;
        }
        else if(pedido =='pizza con roquefort'){
            suma+=780;
        }
        else if(pedido  == 'pizza napolitana'){
            suma+=600;
        }

        if(bebida=='pepsi' || 'mirinda' || '7up'){
            suma+=150
        }
        alert('Usted debe pagar: $' + suma)

    } else{
        alert('Usted ha cancelado el pedido')
    }

}


