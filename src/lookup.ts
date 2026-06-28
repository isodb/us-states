import { states } from './data/us-states';
import type { USState } from './types';

type S = typeof states;
type T = S[ number ];

export class Lookup {
  private readonly index = states;
  private readonly codeIndex: ReadonlyMap< T[ 'code' ], USState >;
  private readonly nameIndex: ReadonlyMap< T[ 'name' ], USState >;
  private readonly fipsIndex: ReadonlyMap< T[ 'fips' ], USState >;

  constructor () {
    this.codeIndex = this.createIndex( 'code' );
    this.nameIndex = this.createIndex( 'name' );
    this.fipsIndex = this.createIndex( 'fips' );
  }

  private createIndex < K extends keyof USState > ( key: K ) : ReadonlyMap< T[ K ], USState > {
    return new Map( this.index.map( state => [ state[ key ], state ] ) );
  }

  public get states () : S {
    return this.index;
  }

  public get codes () : ReadonlyArray< T[ 'code' ] > {
    return [ ...this.codeIndex.keys() ];
  }

  public get names () : ReadonlyArray< T[ 'name' ] > {
    return [ ...this.nameIndex.keys() ];
  }

  public get fips () : ReadonlyArray< T[ 'fips' ] > {
    return [ ...this.fipsIndex.keys() ];
  }

  public filter () : ReadonlyArray< USState > {}

  public find ( by: 'code' | 'name' | 'fips', key: string ) : USState | undefined {
    return this.states.find( state => state[ by ].toLowerCase() === key.toLowerCase() );
  }

  public byCode ( code: string ) : USState | undefined {
    return this.find( 'code', code );
  }

  public byName ( name: string ) : USState | undefined {
    return this.find( 'name', name );
  }

  public byFips ( fips: string ) : USState | undefined {
    return this.find( 'fips', fips );
  }
}

export const lookup = new Lookup();
