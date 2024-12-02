import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsInsertFormComponent } from './directors-insert-form.component';

describe('DirectorsInsertFormComponent', () => {
  let component: DirectorsInsertFormComponent;
  let fixture: ComponentFixture<DirectorsInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectorsInsertFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorsInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
