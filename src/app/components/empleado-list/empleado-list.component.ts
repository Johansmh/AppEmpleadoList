import { Component } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [
    { orden: 1, nombre: 'Fary', apellidos: 'Marquez Acuña', sexo: 'Masculino', salario: 15000000 },
    { orden: 2, nombre: 'Diana', apellidos: 'Hernandez Machado', sexo: 'Femenino', salario: 14000000 },
    { orden: 3, nombre: 'Johan', apellidos: 'Marquez Hernandez', sexo: 'Masculino', salario: 15000000 },
    { orden: 4, nombre: 'Ivan', apellidos: 'Marquez Hernandez', sexo: 'Masculino', salario: 14000000 },
    { orden: 5, nombre: 'Andres', apellidos: 'Marquez Hernandez', sexo: 'Masculino', salario: 14000000 }
  ]

  radioButtonSeleccionado = 'Todos'

  constructor() {}

  ngOnInit(): void {}

  obternerTotaEmpleados(): number {
    return this.listEmpleados.length
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
    this.radioButtonSeleccionado = radioButtonSelec;
  }
}

