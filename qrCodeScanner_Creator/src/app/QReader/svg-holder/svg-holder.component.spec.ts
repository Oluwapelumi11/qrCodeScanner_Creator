import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHolderComponent } from './svg-holder.component';

describe('SvgHolderComponent', () => {
  let component: SvgHolderComponent;
  let fixture: ComponentFixture<SvgHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
