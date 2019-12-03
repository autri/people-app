import { Routes } from '@angular/router';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleDetailsComponent } from './people/people-details/people-details.component';

export const appRoutes: Routes = [
    { path: 'people', component: PeopleListComponent },
    { path: 'people/:index', component: PeopleDetailsComponent }
]