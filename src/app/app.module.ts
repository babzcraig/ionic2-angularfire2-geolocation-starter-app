import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxxx",
  databaseURL: "xxxxxx",
  projectId: "xxxxxx",
  storageBucket: "xxxxxx",
  messagingSenderId: "xxxxxx"
};

// Pages and Components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Providers
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
