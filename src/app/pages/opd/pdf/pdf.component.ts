import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent {
  pdfData:any
  downloadPDF(){
this.pdfData={
  content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
    {
			alignment: 'justify',
			columns: [
		// 			{
		// 	 image: '../../assets/images/logo.jpg',
		// 	width: 150
		// },

				{width: 270,
		
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine'}]}
	]

}
pdfMake.createPdf(this.pdfData).download()
  }

}
