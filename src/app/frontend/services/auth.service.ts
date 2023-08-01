import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    adminLog!: any;
    private isAuthenticated = false;
    private loggedUserNameSubject = new BehaviorSubject<string>('');

    constructor(
        private http: HttpClient
    ) { }

    authenticate(username: string, password: string): any {
        if (this.checkAdminLog(username, password)) {
            this.isAuthenticated = true;
            this.loggedUserNameSubject.next(username);
            return true;
        } else {
            this.isAuthenticated = false;
            return false;
        }
    }

    checkAdminLog(username: string, password: string): any {
        if (username == 'admin' || password == 'admin') {
            return true;
        } else {
            return false;
        }
    }

    isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
    }

    getLoggedUserName() {
        return this.loggedUserNameSubject.asObservable();
    }
}