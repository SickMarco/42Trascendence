import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private readonly http: HttpClient) {}

  async setStatus(id: string, status: boolean) {
    this.http.patch(`/nest/users/online/${id}`, { newStatus: status });
  }

  async setPlaying(id: string, status: boolean) {
    this.http.patch(`/nest/users/${id}`, { newStatus: status });
  }

  async set2fa(id: string, status: boolean) {
    this.http.patch(`/nest/users/2fa-status/${id}`, { newStatus: status })
    //.subscribe((res: any) => {console.log(res); });
  }
}
