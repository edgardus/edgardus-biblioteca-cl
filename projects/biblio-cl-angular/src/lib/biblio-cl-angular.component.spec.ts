import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioClAngularComponent } from './biblio-cl-angular.component';

describe('BiblioClAngularComponent', () => {
  let component: BiblioClAngularComponent;
  let fixture: ComponentFixture<BiblioClAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblioClAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblioClAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
