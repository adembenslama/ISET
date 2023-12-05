import { CanActivateFn, Router } from '@angular/router';

export const etudiantGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  if (localStorage.getItem('role') == 'ADMIN') {
    return true;
  } else {
    router.navigate(['forbidden']);
    return false;
  }
};
