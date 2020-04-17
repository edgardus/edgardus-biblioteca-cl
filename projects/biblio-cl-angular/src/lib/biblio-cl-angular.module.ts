import { NgModule } from '@angular/core';
import { BiblioClAngularComponent } from './biblio-cl-angular.component';
import { NumeroEnPalabrasModule } from './numero-en-palabras/numero-en-palabras.module';



@NgModule({
  declarations: [BiblioClAngularComponent],
  imports: [
  NumeroEnPalabrasModule],
  exports: [BiblioClAngularComponent]
})
export class BiblioClAngularModule { }
