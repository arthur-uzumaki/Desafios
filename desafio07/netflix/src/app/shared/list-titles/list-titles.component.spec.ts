import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitlesComponent } from './list-titles.component';

describe('ListTitlesComponent', () => {
  let component: ListTitlesComponent;
  let fixture: ComponentFixture<ListTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
