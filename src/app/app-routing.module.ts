import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemperatureReaderPage } from './temperature-reader/pages/temperature-reader/temperature-reader.page';

const routes: Routes = [
  {
    path: 'temperatureReader',
    component: TemperatureReaderPage,
  },
  { path: '**', redirectTo: 'temperatureReader' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
