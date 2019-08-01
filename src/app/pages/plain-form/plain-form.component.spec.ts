import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainFormComponent } from './plain-form.component';

describe('PlainFormComponent', () => {
  let component: PlainFormComponent;
  let fixture: ComponentFixture<PlainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
