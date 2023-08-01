import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Database } from "src/app/backend/database";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    userList: User[] = [];

    constructor(
        private db: Database
    ) {
        this.loadUsers();
    }

    private loadUsers(): void {
        this.userList = this.db.getAllUser();
    }

    getUsers(): User[] {
        return this.userList;
    }

    getUserByRefId(refId: string): any | undefined {
        return this.userList.find((user) => user.id === refId);
    }
}