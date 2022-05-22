import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  postList : Post[];

  constructor(private postService : PostService, private router :Router, private toastr : ToastrService) {
    
   }

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.postService.getPostList().subscribe(res => {
      this.postList = res;
      console.log(this.postList)
    })
  }

  editPost(id) {
    this.router.navigate(['../edit', id])
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe(res =>{
      console.log(res);
      this.getPostList()
      this.toastr.success('Post Deleted Successfully')
    })
  }

  viewPost(id){
    this.router.navigate(['../view',id])
  }

}
