import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Framework} from '../models/framework.interface';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const testFrameworks: Framework[] = [
    { id: 1, name: 'Rectangular', url: 'https://rectangular.io' },
    { id: 1, name: 'Slow', url: 'https://slow-down.ed' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can get frameworks', () => {
    service.getFrameworks().subscribe(frameworks => {
      expect(frameworks).toEqual(testFrameworks);
    });

    // See: https://angular.io/guide/http#expecting-and-answering-requests

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/api/frameworks');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testFrameworks);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('caches the frameworks', () => {

    service.getFrameworks().subscribe(frameworks => {
      expect(frameworks).toEqual(testFrameworks);
    });
    service.getFrameworks().subscribe(frameworks => {
      expect(frameworks).toEqual(testFrameworks);
    });

    const req = httpTestingController.expectOne('/api/frameworks');
    req.flush(testFrameworks);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

});
