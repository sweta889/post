import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  public postId : number;
  public postDetails : Post;

  constructor(private postService : PostService, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.postId = +id;
      this.getPostById(this.postId)
    }
  }

  getPostById(id){
    this.postService.getPostById(id).subscribe(res => {
      this.postDetails = res;
    })
  }

}
