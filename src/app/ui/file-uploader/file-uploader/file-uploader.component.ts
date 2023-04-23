import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jd-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
  @Input() message = 'No files uploaded yet. Upload here.';
  @Input() buttonText = 'Upload';
  @Input() fileFormats!: string[];
  @Output() selectedFile = new EventEmitter<File>();

  file?: File;

  onSelectedFileChange(event: Event): void {
    this.file = null;
    const fileList: FileList = (event.target as HTMLInputElement).files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }

    
    this.selectedFile.emit(this.file);
  }
}
