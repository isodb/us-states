import { states } from './data/us-states';
import type { USState } from './types';

export class Lookup {
  private readonly states = states;
  private readonly codeIndex: ReadonlyMap< string, USState >;
  private readonly nameIndex: ReadonlyMap< string, USState >;
  private readonly fipsIndex: ReadonlyMap< string, USState >;

  constructor () {
    this.codeIndex = this.createIndex( 'code' );
    this.nameIndex = this.createIndex( 'name' );
    this.fipsIndex = this.createIndex( 'fips' );
  }

  private createIndex < K extends keyof USState > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return new Map( this.states.map( state => [ state[ key ], state ] ) );
  }

  public all () : ReadonlyArray< USState > {
    return this.states;
  }

  public filter () : ReadonlyArray< USState > {}

  public find ( by: 'code' | 'name' | 'fips', key: string ) : USState | undefined {}

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
