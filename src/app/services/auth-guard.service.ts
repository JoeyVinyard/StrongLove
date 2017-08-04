import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { FirebaseService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
  	console.log("Authguard", this.fbs.isAuthed());
  	return this.fbs.isAuthed();
  }
  constructor(private fbs: FirebaseService){

  }
}