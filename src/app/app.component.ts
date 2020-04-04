// import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arete';

 

form = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  body: new FormControl('', Validators.required)
});
// end of the google map
 
get f(){
    return this.form.controls;
}
 
submit(){
    if(this.form.status === 'VALID'){
      console.log(this.form.value);
    }
}

setValue(){
    this.form.setValue({name: 'Hardik Savani', email: 'itsolutionstuff@gmail.com', body: 'This is testing from itsolutionstuff.com'});
}

resetValue(){
    this.form.reset({name: '', email: '', body: ''});
}
  
}