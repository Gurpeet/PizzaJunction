import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './../shared/services/storage.service';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
    templateUrl: './home.component.html',
    providers: [{ provide: CarouselConfig, useValue: { interval: 2000, noPause: true } }],
    styles: [`
        carousel-size {width: 1070px;height:350px}
    `]
})
export class HomeComponent {
    constructor(private router: Router, private storageService: StorageService) { }

    goToMenu = function () {
        if (this.storageService.read('deliveryAddress')) {
            this.router.navigate(['menu']);
        } else {
            this.router.navigate(['delivery-address']);
        }
    };
}
