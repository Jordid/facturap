import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { JdFileUploaderModule } from 'src/app/ui/file-uploader/file-uploader.module';
import { BillsRoutingModule } from './bills-routing.module';
import { PageBillsInitComponent } from './pages/page-bills-init/page-bills-init.component';
import { PageBillsComponent } from './pages/page-bills/page-bills.component';

@NgModule({
  declarations: [PageBillsComponent, PageBillsInitComponent],
  imports: [
    CommonModule,
    BillsRoutingModule,
    JdFileUploaderModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class BillsModule {}
