import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorInsertFormComponent } from './actor-insert-form.component';

describe('ActorInsertFormComponent', () => {
  let component: ActorInsertFormComponent;
  let fixture: ComponentFixture<ActorInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorInsertFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
