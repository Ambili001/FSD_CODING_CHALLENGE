import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BloggerdetailsComponent } from './Components/bloggerdetails/bloggerdetails.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { DetailService } from './detail.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentService } from './comment.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BloggerdetailsComponent,
    ContentComponent,
    FooterComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DetailService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
