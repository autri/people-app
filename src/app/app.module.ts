import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './people-app.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleThumbnailComponent } from './people/people-thumbnail/people-thumbnail.component';
import { PeopleDetailsComponent } from './people/people-details/people-details.component';
import { RouterModule } from '@angular/router';
import { PeopleService } from './people/people.service';
import { appRoutes } from './route';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleThumbnailComponent,
    PeopleDetailsComponent,
    NavbarComponent
  ],
  providers: [
    PeopleService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
