import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { PostComponent } from './post/post.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post/services/post.service';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    ListPostComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule, // BrowserAnimationsModule no longer required
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
