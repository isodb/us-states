/**
 * Lookup class for U.S. states, the District of Columbia, and U.S. territories.
 */

import { states } from './data/us-states';
import type { Code, FIPS, Name, USState } from './types';

type LookupIndexes = {
  code?: ReadonlyMap< Code, USState >;
  name?: ReadonlyMap< Name, USState >;
  fips?: ReadonlyMap< FIPS, USState >;
};

type LookupKeys = {
  code?: ReadonlyArray< Code >;
  name?: ReadonlyArray< Name >;
  fips?: ReadonlyArray< FIPS >;
};

/**
 * Provides lookup and filtering utilities for U.S. states,
 * the District of Columbia, and U.S. territories.
 * 
 * Lookup indexes are created lazily on first access and
 * cached for subsequent queries.
 */
export class Lookup {
  private readonly states: ReadonlyArray< USState >;
  private readonly indexes: LookupIndexes = {};
  private readonly keys: LookupKeys = {};

  constructor ( states: ReadonlyArray< USState > ) {
    this.states = states;
  }

  private index < K extends keyof LookupIndexes > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return this.indexes[ key ] ??= new Map( this.states.map( state => [ state[ key ], state ] ) );
  }

  public get codes () : ReadonlyArray< Code > {
    return this.keys.code ??= [ ...this.index( 'code' ).keys() ]; 
  }

  public get names () : ReadonlyArray< Name > {
    return this.keys.name ??= [ ...this.index( 'name' ).keys() ]; 
  }

  public get fips () : ReadonlyArray< FIPS > {
    return this.keys.fips ??= [ ...this.index( 'fips' ).keys() ]; 
  }

  public filter ( predicate: ( state: USState ) => boolean ) : ReadonlyArray< USState > {
    return this.states.filter( predicate );
  }

  public find < K extends keyof LookupIndexes > ( by: K, key: USState[ K ] ) : USState | undefined {
    return this.index( by ).get( key );
  }

  public byCode ( code: Code ) : USState | undefined {
    return this.index( 'code' ).get( code );
  }

  public byName ( name: Name ) : USState | undefined {
    return this.index( 'name' ).get( name );
  }

  public byFips ( fips: FIPS ) : USState | undefined {
    return this.index( 'fips' ).get( fips );
  }
}

export const lookup = new Lookup( states );
