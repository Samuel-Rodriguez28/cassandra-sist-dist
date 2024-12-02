import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorUpdateFormComponent } from './actor-update-form.component';

describe('ActorUpdateFormComponent', () => {
  let component: ActorUpdateFormComponent;
  let fixture: ComponentFixture<ActorUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorUpdateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
