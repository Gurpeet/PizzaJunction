import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap';

// Components
import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error404/error404.component';
import { MenuItemsResolver } from './menu/menuitems-resolver/menuItems-resolver.service';
import { DeliveryAddress } from './delivery-address/delivery-address.component';
import { DateTimePickerModule } from 'ng-pick-datetime';
// Services
import { MenuService } from './shared/services/menu.service';
import { StorageService } from './shared/services/storage.service';

// Models

// Routing
import { RouteConfig } from './routes/routes.config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DateTimePickerModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(RouteConfig),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DeliveryAddress
  ],
  providers: [
    MenuService,
    MenuItemsResolver,
    StorageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
