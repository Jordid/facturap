import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBillsInitComponent } from './pages/page-bills-init/page-bills-init.component';
import { PageBillsComponent } from './pages/page-bills/page-bills.component';

const routes: Routes = [
  {
    path: '',
    component: PageBillsInitComponent,
    children: [
      {
        path: '',
        component: PageBillsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsRoutingModule {}
