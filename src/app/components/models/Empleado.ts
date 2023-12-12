export class Empleado {
  orden: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  salario: number;

  constructor(orden: number, nombre: string, apellidos: string, sexo: string, salario: number) {
    this.orden = orden;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.sexo = sexo;
    this.salario = salario
  }
}
