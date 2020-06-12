import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Solution } from './solutions.model';
import { startDeployment } from '../solutions/solutions.actions';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService extends EntityCollectionServiceBase<Solution> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Solution', serviceElementsFactory);
  }

  private BASE_URL = `${globalThis.location.origin}/api`;

  createSolution(solution: Solution): void {
    const url = `${this.BASE_URL}/solution/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, solution, { headers }).subscribe(
      (val: Solution) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        this.getAll();
      }
    );
    console.log(solution + ' posted');
  }

  updateSolution(solution: Solution): void {
    const url = `${this.BASE_URL}/solution/${solution.id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, solution, { headers }).subscribe(
      (val: Solution) => {
        console.log('PUT call successful value returned in body', val);
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        console.log('The PUT observable is now completed.');
        this.getAll();
      }
    );
    console.log(solution + ' put');
  }
}
