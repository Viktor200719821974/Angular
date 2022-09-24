import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"; 
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeUk from '@angular/common/locales/uk';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserResolveService } from './services';
import { HomeComponent } from './components/home/home.component';
import { TestGuard } from './guards/test.guard';
import { FormsComponent } from './components/forms/forms.component';
import { TestComponent } from './components/test/test.component';
import { IncrementPipe } from './pipes';
import { BoldAndColorDirective } from './directives/bold-and-color.directive';


registerLocaleData(localeRu, 'ru');
registerLocaleData(localeUk, 'uk');

const routes: Route[] = [
  // {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '', component: HomeComponent, children: [
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [TestGuard],
        canDeactivate: [TestGuard],
        canActivateChild: [TestGuard],
        children: [
          {path: ':id', component: UserDetailsComponent, resolve: {data: UserResolveService}},
        ]
      },
      // {path: 'users/:id', component: UserDetailsComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent},
    ]},
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    CommentsComponent,
    UserDetailsComponent,
    HomeComponent,
    FormsComponent,
    TestComponent,
    IncrementPipe,
    BoldAndColorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    {provide: LOCALE_ID, useValue: 'uk'},
    IncrementPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
