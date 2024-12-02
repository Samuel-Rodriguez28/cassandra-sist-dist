import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsTableComponent } from './directors-table.component';

describe('DirectorsTableComponent', () => {
  let component: DirectorsTableComponent;
  let fixture: ComponentFixture<DirectorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectorsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
