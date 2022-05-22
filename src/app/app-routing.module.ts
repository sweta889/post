import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './post/add-post/add-post.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { PostComponent } from './post/post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';

const routes: Routes = [
  // { path: '', redirectTo: 'post', pathMatch: 'full' },
  {
    path: '', component: PostComponent, children: [
      { path : '', redirectTo : 'list', pathMatch : 'full'},
      { path: 'list', component: ListPostComponent },
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: AddPostComponent },
      { path: 'view/:id', component: ViewPostComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
