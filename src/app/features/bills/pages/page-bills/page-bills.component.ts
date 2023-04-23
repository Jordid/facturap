import { Component } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import * as XLSX from 'xlsx';

export interface ResultFactura {
  ruc: string;
  numeroFactura: string;
  razonSocial: string;
  subtotal?: number;
  iva?: number;
  total?: number;
}

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-page-bills',
  templateUrl: './page-bills.component.html',
  styleUrls: ['./page-bills.component.scss'],
})
export class PageBillsComponent {
  fileName = '';
  selected = false;
  arrayResultFacturas: ResultFactura[] = [];

  constructor(private fileSaverService: FileSaverService) {}

  onChange(event) {
    this.selected = true;
    const fileList = event.target.files[0];    
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);
      reader.onload = (e) => {
        const content: any = reader.result;
        const facturas = content.split('Factura');
        console.log('factura');
        console.log(facturas);

        let cont = 0;
        this.arrayResultFacturas = [];
        for (let factura of facturas) {
          cont++;
          if (cont > 1) {
            const arrayLines = factura.split('\t');
            if (arrayLines?.length === 11) {
              const result: ResultFactura = {
                ruc: arrayLines[2],
                numeroFactura: arrayLines[1],
                razonSocial: arrayLines[3],
              };

              const valorStringSucio = arrayLines[10];
              const arraySucio = valorStringSucio?.split('\n');

              if (arraySucio?.length === 3) {
                result.total = +arraySucio[1];
              }

              if (result?.total) {
                result.subtotal = result.total / 1.12;
                result.iva = result.total - result.subtotal;
                result.total = result.total;
                this.arrayResultFacturas.push(result);
              }
            }
          }
        }
      };
    }
  }

  exportToExcel() {
    if (this.arrayResultFacturas?.length) {
      const workSheet = XLSX.utils.json_to_sheet(this.arrayResultFacturas);
      const workbook = {
        Sheets: {
          testingSheet: workSheet,
        },
        SheetNames: ['testingSheet'],
      };
      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
      this.fileSaverService.save(blobData, 'Exported');
    }
  }
}
