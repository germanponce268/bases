import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  hereos: string[] = ['Spiderman', 'Ironman', 'Hulsk', 'thor'];
  borrados: string[] = [];
  heroeBorrado: string = '';
  borrarHeroe(): void{
    this.heroeBorrado = this.hereos.shift()!;
    console.log(this.heroeBorrado);
    this.borrados.push(this.heroeBorrado);
  }

}
