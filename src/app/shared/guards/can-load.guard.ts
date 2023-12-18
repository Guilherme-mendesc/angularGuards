import { CanMatchFn } from '@angular/router';

export const canLoadGuard: CanMatchFn = (route, segments) => {

  if(segments[1]?.path=== 'leads'){
    return true;
  }
  alert('Modulo nao encontrado !');
  return false;
};
