import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@NgModule({
  declarations: [FileUploaderComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [FileUploaderComponent],
})
export class JdFileUploaderModule {}
