import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})

export class SwalService {

    fireSuccess(): void {
        Swal.fire({
            title: 'Save successful!',
            text: 'User successfully added!',
            icon: 'success',
            confirmButtonText: 'Continue',
            confirmButtonColor: '#0a4763'
        })
    }

    fireFail(): void {
        Swal.fire({
            title: 'Action failed!',
            text: 'Your action failed!',
            icon: 'error',
            confirmButtonText: 'Continue',
            confirmButtonColor: '#0a4763'
        })
    }
}