import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesUpdateFormComponent } from './franchises-update-form.component';

describe('FranchisesUpdateFormComponent', () => {
  let component: FranchisesUpdateFormComponent;
  let fixture: ComponentFixture<FranchisesUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FranchisesUpdateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranchisesUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
