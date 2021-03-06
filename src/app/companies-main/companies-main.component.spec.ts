import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesMainComponent } from './companies-main.component';

describe('CompaniesMainComponent', () => {
  let component: CompaniesMainComponent;
  let fixture: ComponentFixture<CompaniesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
