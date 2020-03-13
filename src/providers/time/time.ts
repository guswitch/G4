import { AngularFireDatabase } from 'angularfire2/database'
import { Injectable } from '@angular/core';

/*
  Generated class for the TimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimeProvider {

  private PATH = 'time/';

  constructor(private db: AngularFireDatabase) {

  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('nome'))
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


  save(time: any) {
    return new Promise((resolve, reject) => {
      if (time.key) {
        this.db.list(this.PATH)
          .update(time.key, { nome: time.nome, descricao: time.descricao, 
            goltit: time.goltit, golres: time.golres,
            fixotit: time.fixotit, fixores: time.fixores,
             alaetit: time.alaetit, alaeres: time.alaeres,
            aladtit: time.aladtit, aladres: time.aladres,
            pivotit: time.pivotit, pivores: time.pivores})
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ nome: time.nome, descricao: time.descricao,
            goltit: time.goltit, golres: time.golres,
            fixotit: time.fixotit, fixores: time.fixores,
            alaetit: time.alaetit, alaeres: time.alaeres,
           aladtit: time.aladtit, aladres: time.aladres,
           pivotit: time.pivotit, pivores: time.pivores})
          .then(() => resolve());
      }
    })
  }

  /*saveestatistica(jogo: any,time: any,key: string){
    return new Promise((resolve, reject) => {
      this.db.list(this.PATH)
      .update(time.key, {gols1: jogo.gols1, desempenho1: jogo.desempenho1})
      .then(() => resolve())
      .catch((e) => reject(e)); 
    })

  } */

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
