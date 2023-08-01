import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    loggedUserName!: string;

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    login(username: string, password: string): void {
        if (this.auth.authenticate(username, password)) {
            this.router.navigate(['/home']);
        }
    }

    guestLogin() {
        console.log('guest Login called!');
        this.loggedUserName = 'Guest';
        this.router.navigate(['/home']);
    }

    getUsername(): Observable<string> {
        return this.auth.getLoggedUserName();
    }
}