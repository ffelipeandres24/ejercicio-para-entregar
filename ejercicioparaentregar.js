//creo la clase llamada PRESTAMO 
class Prestamo {
    //creo el constructor con sus atributos 
    constructor(
        docuemnto_del_usuario, nombre_usuario, valor_prestamo,
         valor_prestamo_intereses, fecha_prestamo,valor_interes, numero_cuotas ){
            this.docuemnto_del_usuario = docuemnto_del_usuario;
            this.nombre_usuario = nombre_usuario;
            this.valor_prestamo = valor_prestamo;
            this.valor_prestamo_intereses = valor_prestamo_intereses;
            this.fecha_prestamo = fecha_prestamo;
            this.valor_interes = valor_interes;
            this.numero_cuotas = numero_cuotas;
            
    }
    //creo el segundo constructor con dos atributos: documento y nombre 
    constructornombre(docuemnto_del_usuario, nombre_usuario){
        this.docuemnto_del_usuario = docuemnto_del_usuario;
        this.nombre_usuario = nombre_usuario;

    }

 
 // realizo el metodo para calcular el valor total del préstamo con intereses
CalcularValorTotalPrestamo() {
   let valor_total_prestamo = this.valor_prestamo*this.valor_interes*this.numero_cuotas
   console.log(valor_total_prestamo);
}
//realizo el metodo para calcular el valor de las cuotas con intereses
ValorPagarCuotaslnteres(){
    let valor_pagar_cuotas = this.valor_prestamo*this.valor_interes
    console.log(valor_pagar_cuotas);
}
//realizo el metodo para calcular el valor de las cuotas
ValorPagarCuotas(){
let valor_pagar_cuotas = this.valor_prestamo*this.valor_interes
console.log(valor_pagar_cuotas);
}
//realizo el metodo para calcular el valor de las cuotas
PagarCuota(){
    let valor_pagar_cuotas = this.valor_prestamo*this.valor_interes
    console.log(valor_pagar_cuotas);
}
//relaizo el metodo para saber el numero de cuotas 
numeroCuotas(){
    let numero_cuotas = this.numero_cuotas
    console.log(numero_cuotas);
}
//relizo el tostring para mostrar la informacion del prestamo
toString(){
    return `Documento del usuario: ${this.docuemnto_del_usuario} \n 
    Nombre del usuario: ${this.nombre_usuario} \n Valor del prestamo:
     ${this.valor_prestamo} \n Valor del prestamo con intereses:
     ${this.valor_prestamo_intereses} \n Fecha del prestamo: ${this.fecha_prestamo} \n
    Valor del interes: ${this.valor_interes} \n Numero de cuotas: ${this.numero_cuotas}`
                
}
}
//instancias
let prestamo1 = new Prestamo("12345678", "Juan Perez", 100000, 0.05, "2020-01-01", 0.05,12);
prestamo1.CalcularValorTotalPrestamo()
prestamo1.ValorPagarCuotaslnteres()
prestamo1.ValorPagarCuotas()
prestamo1.PagarCuota()
prestamo1.numeroCuotas()
prestamo1.toString()

