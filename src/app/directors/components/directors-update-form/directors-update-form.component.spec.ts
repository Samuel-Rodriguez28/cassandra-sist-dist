import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsUpdateFormComponent } from './directors-update-form.component';

describe('DirectorsUpdateFormComponent', () => {
  let component: DirectorsUpdateFormComponent;
  let fixture: ComponentFixture<DirectorsUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectorsUpdateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorsUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
