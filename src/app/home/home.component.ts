import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../_services';
import { User } from '../_models';



@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    show: boolean = false;
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
    readCard() {
        this.show=true;
    }
}