import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Application } from '@app/dashboards/solutions/interfaces';
import { Store, select } from '@ngrx/store';
import { startDeployApplication } from '@app/dashboards/solutions/solutions.actions';
import { selectInProgressApp, selectProgressApp } from '@app/dashboards/solutions/solutions.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss']
})
export class ApplicationCardComponent implements OnInit {
  @Input() app: Application;
  active = false;

  deploymentInProgressApp$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.deploymentInProgressApp$ = this.store.pipe(select(selectInProgressApp(this.app.name)));
    this.percentage$ = this.store.pipe(select(selectProgressApp(this.app.name)));
  }

  sensitivityColor(app): string {
    return String(app.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  deploy() {
    this.store.dispatch(startDeployApplication({ name: this.app.name }));
  }
}
