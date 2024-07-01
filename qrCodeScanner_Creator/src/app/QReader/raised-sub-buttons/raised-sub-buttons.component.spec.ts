import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedSubButtonsComponent } from './raised-sub-buttons.component';

describe('RaisedSubButtonsComponent', () => {
  let component: RaisedSubButtonsComponent;
  let fixture: ComponentFixture<RaisedSubButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaisedSubButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisedSubButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
