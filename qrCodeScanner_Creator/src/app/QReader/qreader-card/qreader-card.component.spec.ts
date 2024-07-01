import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QreaderCardComponent } from './qreader-card.component';

describe('QreaderCardComponent', () => {
  let component: QreaderCardComponent;
  let fixture: ComponentFixture<QreaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QreaderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QreaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
