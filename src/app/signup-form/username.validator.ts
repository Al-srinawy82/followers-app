import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'dns';
export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };

    return null;
  }

  static ShouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('ok');
        if (control.value === 'issa') resolve({ ShouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
}
