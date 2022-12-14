import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserResolveService} from './services/user.resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    CommentsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {path: ':id', component: UserDetailsComponent, resolve: {data: UserResolveService}},
        ]
      },
      // {path: 'users/:id', component: UserDetailsComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
