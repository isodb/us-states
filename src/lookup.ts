import { states } from './data/us-states';
import type { USState } from './types';

export class Lookup {
  private readonly index = states;
  private readonly codeIndex: ReadonlyMap< string, USState >;
  private readonly nameIndex: ReadonlyMap< string, USState >;
  private readonly fipsIndex: ReadonlyMap< string, USState >;

  constructor () {
    this.codeIndex = this.createIndex( 'code' );
    this.nameIndex = this.createIndex( 'name' );
    this.fipsIndex = this.createIndex( 'fips' );
  }

  private createIndex < K extends keyof USState > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return new Map( this.index.map( state => [ state[ key ], state ] ) );
  }

  public get states () : typeof states {
    return this.index;
  }

  public get codes () : ReadonlyArray< string > {
    return [ ...this.codeIndex.keys() ];
  }

  public get names () : ReadonlyArray< string > {
    return [ ...this.nameIndex.keys() ];
  }

  public get fips () : ReadonlyArray< string > {
    return [ ...this.fipsIndex.keys() ];
  }

  public filter ( predicate: ( def: USState ) => boolean ) : ReadonlyArray< USState > {
    return this.states.filter( predicate );
  }

  public find ( by: 'code' | 'name' | 'fips', key: string ) : USState | undefined {
    return (
      by === 'code' ? this.codeIndex.get( key ) :
      by === 'name' ? this.nameIndex.get( key ) :
      by === 'fips' ? this.fipsIndex.get( key ) :
      undefined
    );
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
