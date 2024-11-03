import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app/app.component';
import { DialogueComponent } from './app/dialogue/dialogue.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([]), 
      CommonModule
    ),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));

bootstrapApplication(DialogueComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([]), 
      CommonModule
    ),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
