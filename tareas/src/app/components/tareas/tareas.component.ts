import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
//array de tareas
  listaTareas: Tarea[] = [

  ]

  nombreTarea= '';

  agregarTarea(){
    //console.log(this.nombreTarea); = ver si se imprime tarea en consola al presionar enter
    // crear objeto tarea
const tarea: Tarea = {
  nombre: this.nombreTarea,
  estado: false
}

    //agregar objeto al array
this.listaTareas.push(tarea);

    //reset formulario
this.nombreTarea= '';

  }

  eliminarTarea(index:number): void{
    //con splice debemos poner de donde queremos eliminar y cuantos elementos, en este caso del index y solo 1
this.listaTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: Tarea):void{
    //la lista de tareas recibe el index donde el estado va a ser negado,true será false y false será true
this.listaTareas[index].estado = !tarea.estado
  }
}
