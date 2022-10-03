import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelchangeComponentComponent } from './ngmodelchange.component';

describe('NgmodelchangeComponentComponent', () => {
  let component: NgmodelchangeComponentComponent;
  let fixture: ComponentFixture<NgmodelchangeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelchangeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmodelchangeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
