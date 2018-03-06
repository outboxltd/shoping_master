import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauserlistComponent } from './mauserlist.component';

describe('MauserlistComponent', () => {
  let component: MauserlistComponent;
  let fixture: ComponentFixture<MauserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
