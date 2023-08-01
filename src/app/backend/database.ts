import { Injectable } from "@angular/core";
import { User } from "../frontend/models/user.model";
import { Company } from "../frontend/models/company.model";
import { initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

@Injectable({
    providedIn: 'root'
})

export class Database {

    userList: User[] = [];
    companyList: Company[] = [];

    user1: User = {
        id: '001',
        firstName: 'Anastasja',
        lastName: 'Reindenpflock',
        email: 'love@assjob.com',
        phone: '0176 23543124',
        color: 'pink',
        selected: false,
        city: 'Nürnberg',
        plz: 92235
    }

    user2: User = {
        id: '002',
        firstName: 'Susi',
        lastName: 'Anal',
        email: 'love@anal.com',
        phone: '0143 23543124',
        color: 'red',
        selected: false,
        city: 'Nürnberg',
        plz: 92235
    }

    user3: User = {
        id: '003',
        firstName: 'Rocco',
        lastName: 'Siffredi',
        email: 'love@anal.com',
        phone: '0143 23543124',
        color: 'red',
        selected: false,
        city: 'Nürnberg',
        plz: 92235
    }

    user4: User = {
        id: '004',
        firstName: 'Big',
        lastName: 'Tits',
        email: 'love@anal.com',
        phone: '0143 23543124',
        color: 'grey',
        selected: false,
        city: 'Nürnberg',
        plz: 92235
    }

    user5: User = {
        id: '005',
        firstName: 'Annalick',
        lastName: 'Divers',
        email: 'love@anal.com',
        phone: '0143 23543124',
        color: 'green',
        selected: false,
        city: 'Nürnberg',
        plz: 92235
    }

    company_1: Company = {
        id: '001',
        name: 'Bauhaus',
        email: 'bau@bauhaus-amberg.de',
        city: 'Amberg',
        postCode: 92235,
        leader: 'Mr. Wobbles'
    }
    company_2: Company = {
        id: '002',
        name: 'Obi',
        email: 'Obi@Obi-neumarkt.de',
        city: 'Neumarkt i. d. Opf.',
        postCode: 92318,
        leader: 'Martin Baudrexel'
    }
    company_3: Company = {
        id: '003',
        name: 'Max-Boegl',
        email: 'Max-Boegl@Boegl-neu.de',
        city: 'Neumarkt',
        postCode: 92318,
        leader: 'Sandra Fischer'
    }

    app = initializeApp(environment.firebase);
    db = getFirestore(this.app);
    users = query(collection(this.db, 'test'))

    constructor() {
        console.log(this.users);
        this.fetchUsers();
    }

    async fetchUsers() {
        const querySnapshot = await getDocs(this.users);
        querySnapshot.forEach((doc)=> {
            console.log(doc.id, " => ", doc.data());
        })
    }

    getAllUser() {
        const usersToAdd = [this.user2, this.user1, this.user3, this.user4, this.user5];
        for (const user of usersToAdd) {
            if (!this.userList.includes(user)) {
                this.userList.push(user);
            }
        }
        return this.userList;
    }

    getAllCompanies() {
        const companiesToAdd = [this.company_1, this.company_2, this.company_3];
        for (const company of companiesToAdd) {
            if (!this.companyList.includes(company)) {
                this.companyList.push(company);
            }
        }
        return this.companyList;
    }
}