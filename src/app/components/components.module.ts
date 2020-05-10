import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopInsecticidasComponent } from './pop-insecticidas/pop-insecticidas.component';
import { IonicModule } from '@ionic/angular';
import { PopInfoInsecticidasComponent } from './pop-info-insecticidas/pop-info-insecticidas.component';
import { PopInfoHistorialComponent } from './pop-info-historial/pop-info-historial.component';
import { PopCosechasComponent } from './pop-cosechas/pop-cosechas.component';
import { PopInfoCosechasComponent } from './pop-info-cosechas/pop-info-cosechas.component';
import { PopUsuariosComponent } from './pop-usuarios/pop-usuarios.component';
import { PopAlarmasComponent } from './pop-alarmas/pop-alarmas.component';
import { PopInfoAlarmasComponent } from './pop-info-alarmas/pop-info-alarmas.component';
import { PopCalendarioActividadesComponent } from './pop-calendario-actividades/pop-calendario-actividades.component';
import { PopInfoCalendarioActividadesComponent } from './pop-info-calendario-actividades/pop-info-calendario-actividades.component';
import { PopCostosComponent } from './pop-costos/pop-costos.component';
import { PopInfoCostosComponent } from './pop-info-costos/pop-info-costos.component';
import { PopInfoFertilizacionesComponent } from './pop-info-fertilizaciones/pop-info-fertilizaciones.component';
import { PopInfoFertilizanteComponent } from './pop-info-fertilizante/pop-info-fertilizante.component';
import { PopOpcionesFertilizacionesComponent } from './pop-opciones-fertilizaciones/pop-opciones-fertilizaciones.component';
import { PopOpcionesFertilizanteComponent } from './pop-opciones-fertilizante/pop-opciones-fertilizante.component';




@NgModule({
  declarations: [
    PopInsecticidasComponent,
    PopInfoInsecticidasComponent,
    PopInfoHistorialComponent,
    PopCosechasComponent,
    PopInfoCosechasComponent,
    PopUsuariosComponent,
    PopAlarmasComponent,
    PopInfoAlarmasComponent,
    PopCalendarioActividadesComponent,
    PopInfoCalendarioActividadesComponent,
    PopCostosComponent,
    PopInfoCostosComponent,
    PopInfoFertilizacionesComponent,
    PopInfoFertilizanteComponent,
    PopOpcionesFertilizacionesComponent,
    PopOpcionesFertilizanteComponent],
  exports: [
    PopInsecticidasComponent,
    PopInfoInsecticidasComponent,
    PopInfoHistorialComponent,
    PopCosechasComponent,
    PopInfoCosechasComponent,
    PopUsuariosComponent,
    PopAlarmasComponent,
    PopInfoAlarmasComponent,
    PopCalendarioActividadesComponent,
    PopInfoCalendarioActividadesComponent,
    PopCostosComponent,
    PopInfoCostosComponent,
    PopInfoFertilizacionesComponent,
    PopInfoFertilizanteComponent,
    PopOpcionesFertilizacionesComponent,
    PopOpcionesFertilizanteComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }