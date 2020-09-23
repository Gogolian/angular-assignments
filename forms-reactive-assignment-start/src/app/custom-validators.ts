import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProjectName(control: FormControl) : { [s :string]: boolean } {
    if(control.value === 'Test'){
      return {'invalidProjectName': true}
    }
    return;
  }

  static asyncInvalidProjectName(control: FormControl) : Promise<any> | Observable<any> {

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(
          control.value === 'Test' ?
                                {'invalidProjectName': true}
                                : null
        )

      },3000)

    })

  }



}
