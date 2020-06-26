
import { Component, OnInit } from '@angular/core';

//toastr
import { ToastrService } from 'ngx-toastr';
//firebase
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})

export class HeaderNavComponent implements OnInit {
  email = null;

  constructor(
    private auth:AuthService,
    private router:Router,
    private toastr: ToastrService
  ) {
    auth.getUser().subscribe((user)=>{
      this.email = user?.email;
    })
  }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try {
      const res = await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info("Login Again To Continue");
      this.email =null;
    }
    catch(error){
      this.toastr.error('something is Wrong')
    }
  }

}
