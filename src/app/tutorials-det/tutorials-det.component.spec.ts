import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsDetComponent } from './tutorials-det.component';

describe('TutorialsDetComponent', () => {
  let component: TutorialsDetComponent;
  let fixture: ComponentFixture<TutorialsDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
