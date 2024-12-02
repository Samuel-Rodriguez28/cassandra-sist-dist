import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesInsertFormComponent } from './franchises-insert-form.component';

describe('FranchisesInsertFormComponent', () => {
  let component: FranchisesInsertFormComponent;
  let fixture: ComponentFixture<FranchisesInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FranchisesInsertFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranchisesInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
