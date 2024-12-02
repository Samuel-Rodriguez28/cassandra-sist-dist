import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesUpdateFormComponent } from './movies-update-form.component';

describe('MoviesUpdateFormComponent', () => {
  let component: MoviesUpdateFormComponent;
  let fixture: ComponentFixture<MoviesUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesUpdateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
