import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the NoticiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiaProvider {

  private PATH = 'noticia/';

  constructor(private db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('titulo'))
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

  save(noticia: any) {
    return new Promise((resolve, reject) => {
      if (noticia.key) {
        this.db.list(this.PATH)
          .update(noticia.key, { titulo: noticia.titulo, descricao: noticia.descricao })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ titulo: noticia.titulo, descricao: noticia.descricao })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
