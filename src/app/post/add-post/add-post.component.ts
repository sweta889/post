import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public postForm: FormGroup;
  public editId : number;
  public isEditable : boolean = false;

  constructor(private postService : PostService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.postForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.editId = +id;
      this.isEditable = true;
      this.getPostData(this.editId);
    }
  }

  get postFormControls(){
    return this.postForm.controls;
  }

  onSubmit() {
    if(this.isEditable){
      this.postService.editPost(this.editId, this.postForm.value)
    }
    else {
      console.log(this.postForm.value);
      this.postService.addPost(this.postForm.value)
    }
    
  }

  getPostData(id) {
    this.postService.getPostById(id).subscribe( res => {
      this.postForm.reset(res);
    })
  }



}