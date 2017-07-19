import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// Initialize dotenv
import dotenv from 'dotenv';
dotenv.config();

platformBrowserDynamic().bootstrapModule(AppModule);
