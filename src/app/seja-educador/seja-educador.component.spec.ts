import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejaEducadorComponent } from './seja-educador.component';

describe('SejaEducadorComponent', () => {
  let component: SejaEducadorComponent;
  let fixture: ComponentFixture<SejaEducadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejaEducadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SejaEducadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
