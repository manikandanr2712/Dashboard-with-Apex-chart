import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMainContentComponent } from './first-main-content.component';

describe('FirstMainContentComponent', () => {
  let component: FirstMainContentComponent;
  let fixture: ComponentFixture<FirstMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstMainContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
