import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GoodsService } from './services/goods.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		GoodsComponent,
		LoginComponent,
		SignupComponent,
		CartComponent,
		NotFoundComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FormsModule,
		AngularFireModule.initializeApp({
			apiKey: 'AIzaSyA6mXayH687JfVy6_KMFeNHe4q6Cbzicfw',
			authDomain: 'hamza-fruit-shop.firebaseapp.com',
			databaseURL: 'https://hamza-fruit-shop.firebaseio.com',
			projectId: 'hamza-fruit-shop',
			storageBucket: 'hamza-fruit-shop.appspot.com',
			messagingSenderId: '554841022081',
			appId: '1:554841022081:web:27d0315bba847548a6b780',
			measurementId: 'G-WSXWG6LDR4'
		}),
		AngularFirestoreModule
	],
	providers: [ GoodsService, { provide: FirestoreSettingsToken, useValue: {} } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
