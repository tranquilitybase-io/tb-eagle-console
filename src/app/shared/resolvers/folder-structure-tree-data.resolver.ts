import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LandingZoneEnvironmentService } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.service';
import { FolderStructureNode } from '@app/administration/landing-zone/landing-zone-environment/landing-zone-environment.model';

@Injectable({ providedIn: 'root' })
export class FolderStructureTreeDataResolver implements Resolve<FolderStructureNode[]> {
  constructor(private landingZoneEnvironmentService: LandingZoneEnvironmentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FolderStructureNode[]> {
    return this.landingZoneEnvironmentService.getFolderStructureTreeData();
  }
}
