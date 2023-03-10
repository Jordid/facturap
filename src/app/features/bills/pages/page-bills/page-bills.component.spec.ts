import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBillsComponent } from './page-bills.component';

describe('PageBillsComponent', () => {
  let component: PageBillsComponent;
  let fixture: ComponentFixture<PageBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
