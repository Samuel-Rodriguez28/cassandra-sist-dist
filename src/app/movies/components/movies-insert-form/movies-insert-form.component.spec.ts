import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInsertFormComponent } from './movies-insert-form.component';

describe('MoviesInsertFormComponent', () => {
  let component: MoviesInsertFormComponent;
  let fixture: ComponentFixture<MoviesInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesInsertFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
