export class User {
    
    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    color!: string;
    city!: string;
    plz!: number;
    selected:boolean;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.phone = obj ? obj.phone : '';
        this.color = obj ? obj.color : '';
        this.selected = false;
    }

    // public toJSON() {
    //     return {
    //         id: this.id,
    //         firstName: this.firstName,
    //         lastName: this.lastName,
    //         email: this.email,
    //         phone: this.phone,
    //         color: this.color,
    //         selected: this.selected
    //     }
    // }
}