import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SitesService } from '@app/home/sites/sites.service';
import { Observable } from 'rxjs';
import { TableData } from '@app/home/sites/sites.model';

@Injectable({ providedIn: 'root' })
export class SiteByIdResolver implements Resolve<TableData> {
  constructor(private sitesService: SitesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TableData> {
    return this.sitesService.getByKey(state.root.queryParamMap.get('id'));
  }
}
