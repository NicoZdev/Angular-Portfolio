import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLmainComponent } from './htmlmain.component';

describe('HTMLmainComponent', () => {
  let component: HTMLmainComponent;
  let fixture: ComponentFixture<HTMLmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
