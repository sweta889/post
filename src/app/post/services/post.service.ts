import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PostService {

  public url : string ='http://localhost:3000/posts'

  constructor(private _http : HttpClient, private router : Router, private toastr : ToastrService) {}

  getPostList() : Observable<Post[]>{
    return this._http.get<Post[]>(this.url)
  }

  getPostById(id :number) : Observable<Post>{
    return this._http.get<Post>(`${this.url}/${id}`)
  }

  addPost(data : Post){
    this._http.post<Post>(this.url, data).subscribe(res =>{
      console.log(res) 
      this.router.navigate(['../list'])
      this.toastr.success("Post Added Successfully")
    }
    , error => {
      console.log(error)
      this.toastr.error("Post not added")
    })
  }

  editPost(id : number, data : Post) {
    this._http.put<Post>(`${this.url}/${id}`,data).subscribe(res => {
      console.log("Post Added Successfully");
      this.router.navigate(['../list'])
      this.toastr.success("Post Updated Successfully")
    })
  }

  deletePost(id){
    return this._http.delete<Post>(`${this.url}/${id}`);
  }

  viewPost(id){
    return this._http.get<Post>(`${this.url}/${id}`);
  }
 
}
