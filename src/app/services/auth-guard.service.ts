import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {
	authState;
	canActivate() {
		return new Promise((resolve, reject) => {
			this.afa.authState.subscribe((authState) => {
				console.warn(!!authState);
				resolve(!!authState);
			})
		})
	}
  constructor(private afa: AngularFireAuth){}
}