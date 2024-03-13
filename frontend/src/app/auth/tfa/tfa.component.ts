import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-tfa',
  templateUrl: './tfa.component.html',
  styleUrls: ['./tfa.component.scss']
})
export class TfaComponent implements OnInit {

  // forms-Control
  loginForm: FormGroup;

  

   
    constructor(private fb: FormBuilder,
                private router: Router){}
    
    ngOnInit(): void {
        this.loginForm = this.fb.group({
            code: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]]
        });
    }



  login() {
    this.router.navigate(['/pages/all/emetteur']) 
}

}
