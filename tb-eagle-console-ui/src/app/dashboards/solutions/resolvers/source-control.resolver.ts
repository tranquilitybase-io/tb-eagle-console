import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeyValue } from '@angular/common';
import { SolutionsService } from '../solutions.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SourceControlResolver implements Resolve<KeyValue<string, string>[]> {
  constructor(private service: SolutionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KeyValue<string, string>[]> {
    return this.service.getSourceControl();
  }
}
