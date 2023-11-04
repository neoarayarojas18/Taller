export class Usuario{
    _id?: number;
    nombre: string;
    apellido: string;
    rut: string;
    phone: string;
    email: string;
    contrasena: string;
    rol: string;


    constructor(
        nombre:string,
        apellido: string,
        rut: string,
        phone:string,
        email:string,
        contrasena:string,
        rol:string){

            this.nombre=nombre;
            this.apellido=apellido;
            this.rut=rut;
            this.phone=phone;
            this.email=email;
            this.contrasena=contrasena;
            this.rol=rol;

    }

    // tambien se puede hacer asi

    // constructor(
    //     public nombre:string,
    //     public email:string,
    //     public contrasena:string,
    //     public rol:string
    // ){}
}