import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentservice : CommentService) { }
  comments:any= []
  ngOnInit(): void {
    this.getComment();
  }
  getComment(){
    this.commentservice.getComments().subscribe(res=>{
    this.comments =res
    console.log(res)
    })
  }
}
