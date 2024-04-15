import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { RegisterComponent } from './auth/register/register.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EntradaBlogComponent } from './components/entrada-blog/entrada-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    PersonalDetailsComponent,
    RegisterComponent,
    InicioComponent,
    UserListComponent,
    UsuariosComponent,
    EntradaBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
