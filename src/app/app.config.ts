/*
  This TypeScript file configures the application settings for an Angular app.
  It imports necessary modules and services for routing, HTTP client, animations, and client hydration.
  The appConfig object defines the providers used throughout the application.
*/
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Provides routing configuration for the application
    provideAnimations(), // Provides animation support for the application
    provideHttpClient(), // Provides HTTP client functionality
    provideClientHydration() // Provides client hydration support for server-side rendering
  ]
};
