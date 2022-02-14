import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerHanoiComponent } from './tower-hanoi.component';

describe('TowerHanoiComponent', () => {
  let component: TowerHanoiComponent;
  let fixture: ComponentFixture<TowerHanoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowerHanoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerHanoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
