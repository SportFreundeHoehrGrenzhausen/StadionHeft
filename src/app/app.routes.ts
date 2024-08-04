import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';

export const routes: Routes = [{
    path: 'native',
    component: PdfViewerComponent
},
    {
        path: 'latest',
        component: ExamplePdfViewerComponent
}];
