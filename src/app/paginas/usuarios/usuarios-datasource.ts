import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { UsuariosService } from 'src/app/servicos/usuarios.service';
import { OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuariomodel';

// TODO: Replace this with your own data model type
export interface UsuariosItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: any[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
  { id: 11, name: 'Sodium' },
  { id: 12, name: 'Magnesium' },
  { id: 13, name: 'Aluminum' },
  { id: 14, name: 'Silicon' },
  { id: 15, name: 'Phosphorus' },
  { id: 16, name: 'Sulfur' },
  { id: 17, name: 'Chlorine' },
  { id: 18, name: 'Argon' },
  { id: 19, name: 'Potassium' },
  { id: 20, name: 'Calcium' },
];

const teste: any[] = [
  { "_id": "5d0a27e65429030004ce4f3b", "nome": "Administrador do Sistema", "email": "adm@gmail.com", "senha": "$2a$10$U8g18cixO412LjKpZ1JVZ.Kt70NukXqiU17wlY03wxCP48xXAU/4q", "tipo": [{ "_id": "5d0a27e65429030004ce4f39", "tipo": "Administrador" }], "__v": 0 }, { "_id": "5d0a27e65429030004ce4f3d", "nome": "Lucas das Pontes", "email": "lucaspontes@gmail.com", "senha": "abcdef", "tipo": [{ "_id": "5d0a27e65429030004ce4f3a", "tipo": "Empregado" }], "__v": 0 }, { "_id": "5d0d86351c9d440000ddd69d", "nome": "MODIFICADO 1", "email": "MODIFICADO1@gmail.com", "senha": "MOD1", "tipo": [{ "_id": "5d0a27e65429030004ce4f39", "tipo": "Administrador" }], "__v": 0 }, { "_id": "5d0ad417f703e91ef73571ec", "nome": "Roberval de almeida", "email": "roberval@gmail.com", "senha": "123456", "tipo": [{ "_id": "5d0a27e65429030004ce4f3a", "tipo": "Empregado" }], "__v": 0 }]




/**
 * Data source for the Usuarios view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsuariosDataSource extends DataSource<any> implements OnInit {
  data: any[];
  filter = "";

  constructor(private paginator: MatPaginator, public sort: MatSort, public us: UsuariosService) {
    super();
  }

  ngOnInit() {
    // this.data = [];
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<any[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    this.paginator.length = this.data.length;
    

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: UsuariosItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: any[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.nome, b.nome, isAsc);
        case '_id': return compare(+a._id, +b._id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
