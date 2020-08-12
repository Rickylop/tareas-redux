export class Todo{

    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string){
        this.texto = texto;
        // this.id = new Date().getTime(); //generaba el mismo numero al crearlos en el mismo instante
        this.id = Math.random();
        this.completado = false;
    }
}