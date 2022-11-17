import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerdetailsComponent } from './bloggerdetails.component';

describe('BloggerdetailsComponent', () => {
  let component: BloggerdetailsComponent;
  let fixture: ComponentFixture<BloggerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggerdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
