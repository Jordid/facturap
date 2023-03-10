import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBillsInitComponent } from './page-bills-init.component';

describe('PageBillsInitComponent', () => {
  let component: PageBillsInitComponent;
  let fixture: ComponentFixture<PageBillsInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBillsInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBillsInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
