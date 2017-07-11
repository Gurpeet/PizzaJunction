import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error404/error404.component';
import { MenuItemsResolver } from './menu/menuitems-resolver/menuItems-resolver.service';

// Services
import { MenuService } from './shared/services/menu.service';

// Models

// Routing
import { RouteConfig } from './routes/routes.config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RouteConfig),
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
    MenuItemsResolver
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
