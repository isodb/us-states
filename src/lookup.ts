import { states } from './data/us-states';
import type { USState } from './types';

type Code = USState[ 'code' ];
type Name = USState[ 'name' ];
type Fips = USState[ 'fips' ];

type Indexes = {
  code?: ReadonlyMap< Code, USState >;
  name?: ReadonlyMap< Name, USState >;
  fips?: ReadonlyMap< Fips, USState >;
};

type Keys = {
  codes?: ReadonlyArray< Code >;
  names?: ReadonlyArray< Name >;
  fips?: ReadonlyArray< Fips >;
};

export class Lookup {
  private readonly states: ReadonlyArray< USState >;
  private readonly indexes: Indexes = {};
  private readonly keys: Keys = {};

  constructor ( states: ReadonlyArray< USState > ) {
    this.states = states;
  }

  private index < K extends keyof Indexes > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return this.indexes[ key ] ??= new Map( this.states.map( state => [ state[ key ], state ] ) );
  }

  public get codes () : ReadonlyArray< Code > {
    return this.keys.codes ??= [ ...this.index( 'code' ).keys() ]; 
  }

  public get names () : ReadonlyArray< Name > {
    return this.keys.names ??= [ ...this.index( 'name' ).keys() ]; 
  }

  public get fips () : ReadonlyArray< Fips > {
    return this.keys.fips ??= [ ...this.index( 'fips' ).keys() ]; 
  }

  public filter ( predicate: ( state: USState ) => boolean ) : ReadonlyArray< USState > {
    return this.states.filter( predicate );
  }

  public find < K extends keyof Indexes > ( by: K, key: USState[ K ] ) : USState | undefined {
    return this.index( by ).get( key );
  }

  public byCode ( code: Code ) : USState | undefined {
    return this.index( 'code' ).get( code );
  }

  public byName ( name: Name ) : USState | undefined {
    return this.index( 'name' ).get( name );
  }

  public byFips ( fips: Fips ) : USState | undefined {
    return this.index( 'fips' ).get( fips );
  }
}

export const lookup = new Lookup( states );
