import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaraccountComponent } from './staraccount.component';

describe('StaraccountComponent', () => {
  let component: StaraccountComponent;
  let fixture: ComponentFixture<StaraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaraccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
