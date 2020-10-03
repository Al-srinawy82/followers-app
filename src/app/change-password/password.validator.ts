import { resolve } from 'dns';
import { AbstractControl } from '@angular/forms';
export class PasswrodVlidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve, reject) => {
      if (control.value !== '1234') resolve({ invalidOldPassword: true });
      else resolve(null);
    });
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value)
      return { passwordsShouldMatch: true };

    return null;
  }
}