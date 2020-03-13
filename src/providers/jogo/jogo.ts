import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the JogoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JogoProvider {

  private PATH = 'jogo/';
  private PATH2 = 'time/desempenho';
  constructor(private db: AngularFireDatabase) {
    
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
         return { key: c.key, ...c.payload.val() };
      });
  }

  save(jogo: any) {
    return new Promise((resolve, reject) => {
      if (jogo.key) {
        this.db.list(this.PATH)
          .update(jogo.key, { time1: jogo.time1, time2: jogo.time2, data: jogo.data })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ time1: jogo.time1, time2: jogo.time2, data: jogo.data, gols1: "", gols2: "", desempenho1: "", desempenho2: "" })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

  saveestatistica(jogo:any,key: string){
    return new Promise((resolve, reject) => {
      this.db.list(this.PATH)
    .update(key, {gols1: jogo.gols1, gols2: jogo.gols2, desempenho1: jogo.desempenho1, desempenho2: jogo.desempenho2})
    .then(() => resolve())
    .catch((e) => reject(e));


    //adicionar ao provider do time o campo e dps é vrau
  /*  this.db.list(this.PATH2)
    .update(time.key, {gols1: jogo.gols1, desempenho1: jogo.desempenho1})
    .then(() => resolve())
    .catch((e) => reject(e)); */

   /* this.db.list(this.PATH2)
    .update(key, {gols2: jogo.gols2, desempenho2: jogo.desempenho2})
    .then(() => resolve())
    .catch((e) => reject(e)); */

  })
  }
}
