import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

import { Component, inject } from '@angular/core';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css',
})
export class PdfViewerComponent {
  private httpClient = inject(HttpClient);
  // pdfData = toSignal(
  //   this.httpClient
  //     .get('/2024/08/SportFreunde%20im%20Blick.pdf | safe', { responseType: 'blob' })
  // );
}
