import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tenant } from '../models/tenant';
import { TenantService } from '../tenants.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tenants$ = new Observable<Tenant[]>();
  displayedColumns = [
    'tenantId',
    'tenantName',
    'tenantEmail',
    'tenantTier',
    'isActive',
  ];
  constructor(private tenantSvc: TenantService) {}

  ngOnInit(): void {
    this.tenants$ = this.tenantSvc.fetch();
  }
}
