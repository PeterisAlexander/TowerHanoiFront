import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HanoiTowerEntity } from '../entities/hanoitower.entity';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class TowerHanoiService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  stepMoveHanoiTower(nbDisk?: number): Observable<HanoiTowerEntity[]> {
    console.log(
      environment.backendUri + 'tour-hanoi/stepMove' + (nbDisk == undefined ? '' : '?nbDisk=' + nbDisk)
    );

    return this.http.get<HanoiTowerEntity[]>(
      environment.backendUri + 'tour-hanoi/stepMove' + (nbDisk == undefined ? '' : '?nbDisk=' + nbDisk) , this.config.httpOptions
    );
  }

  nbMoveHanoiTower(nbDisk?: number): Observable<HanoiTowerEntity[]> {
    console.log(
      environment.backendUri + 'tour-hanoi/nbShift' + (nbDisk == undefined ? '' : '?nbDisk=' + nbDisk)
    );

    return this.http.get<HanoiTowerEntity[]>(
      environment.backendUri + 'tour-hanoi/nbShift' + (nbDisk == undefined ? '' : '?nbDisk=' + nbDisk) , this.config.httpOptions
    );
  }

  // delete(id?: number): Observable<any> {
  //   return this.http.delete(environment.backendUri + 'client/' + id, this.config.httpOptions);
  // }

  // getById(id?: number): Observable<ClientEntity> {
  //   return this.http.get<ClientEntity>(environment.backendUri + 'client/' + id, this.config.httpOptions);
  // }

  // add(c: ClientEntity): Observable<any> {
  //   return this.http.post(environment.backendUri + 'client', c, this.config.httpOptions);
  // }

  // update(c: ClientEntity): Observable<any> {
  //   return this.http.put(environment.backendUri + 'client/' + c.id, c, this.config.httpOptions);
  // }
}
