import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error404/error404.component';

// Services
import { MenuService } from './shared/services/menu.service';
import { StorageService } from './shared/services/storage.service';
import { JWTService } from './shared/services/jwt.service';
import { OrderService } from './shared/services/order.service';

// Pipes

// Models

// Routing
import { RouteConfig } from './routes/routes.config';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(RouteConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQVCEwiDngg-HOyOD8-TskXQywkmCi-Rw'
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    MenuService,
    OrderService,
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
