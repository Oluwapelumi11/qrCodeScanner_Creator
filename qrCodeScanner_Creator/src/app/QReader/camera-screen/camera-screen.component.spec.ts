import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraScreenComponent } from './camera-screen.component';

describe('CameraScreenComponent', () => {
  let component: CameraScreenComponent;
  let fixture: ComponentFixture<CameraScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
