import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistirvideoComponent } from './assistirvideo.component';

describe('AssistirvideoComponent', () => {
  let component: AssistirvideoComponent;
  let fixture: ComponentFixture<AssistirvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistirvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistirvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
