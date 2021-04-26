import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InputUserComponent } from './input-user/input-user.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user-service.service';
import { UserInfoComponent } from './user-info/user-info.component';

const appRoutes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'second-page', component: SecondPageComponent},
  {path: 'third-page', component: ThirdPageComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    NotFoundComponent,
    InputUserComponent,
    SelectUserComponent,
    UserTableComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    MatTabsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
