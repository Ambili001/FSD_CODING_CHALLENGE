import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/detail.service';
@Component({
  selector: 'app-bloggerdetails',
  templateUrl: './bloggerdetails.component.html',
  styleUrls: ['./bloggerdetails.component.css']
})
export class BloggerdetailsComponent implements OnInit {

  constructor(private detailservice :DetailService) { }
details:any= []
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.detailservice.getDetails().subscribe(res=>{
    this.details =res
    console.log(res)
    })
  }

  isFollowed:boolean = false;
  follower_no=100;
  follow="follow"
  changefollowers()
  {
    if (!this.isFollowed) {
      this.follower_no = this.follower_no+1;
    } else {
      this.follower_no = this.follower_no-1;
    }
  }
  togglefollow(){
    this.isFollowed = !this.isFollowed;
    if(!this.isFollowed)
    this.follow="follow"
    else
    this.follow="Unfollow"
  }
      buttonclicked(){
       this.changefollowers();
       this.togglefollow();
      }
}
