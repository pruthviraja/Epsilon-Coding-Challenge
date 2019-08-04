
import { ParamMap, ActivatedRoute } from '@angular/router';

import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild  } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

//service imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHandler } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Inventory} from '../models/inventory';
import { EpsilonProductsService } from '../services/epsilon-products.service'


@Component({
  selector: 'app-table-box',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = [
    'name',
    'price',
    'category'
  ];
  baseUrl: string = "http://usweb.dotomi.com/resources/swfs/cookies.json";
  dataSource;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private epsilonService: EpsilonProductsService) {}


  ngOnInit() {
this.epsilonService.getEpsilonProducts(this.baseUrl).subscribe((response: Inventory[]) => {
this.dataSource = new MatTableDataSource(response);
this.dataSource.sort = this.sort;
this.dataSource.paginator = this.paginator;
})


  }


  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  ngOnDestroy() { }

}
