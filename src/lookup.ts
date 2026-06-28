/**
 * Lookup utilities for U.S. states, the District of Columbia,
 * and U.S. territories.
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

  /**
   * Returns all available USPS postal abbreviations.
   */
  public get codes () : ReadonlyArray< Code > {
    return this.keys.code ??= [ ...this.index( 'code' ).keys() ]; 
  }

  /**
   * Returns all official state and territory names.
   */
  public get names () : ReadonlyArray< Name > {
    return this.keys.name ??= [ ...this.index( 'name' ).keys() ]; 
  }

  /**
   * Returns all available FIPS codes.
   */
  public get fips () : ReadonlyArray< FIPS > {
    return this.keys.fips ??= [ ...this.index( 'fips' ).keys() ]; 
  }

  /**
   * Filters states using the specified predicate.
   * 
   * @param predicate Filter predicate.
   * @returns Matching states.
   */
  public filter ( predicate: ( state: USState ) => boolean ) : ReadonlyArray< USState > {
    return this.states.filter( predicate );
  }

  /**
   * Finds a state by the specified lookup field.
   * 
   * @param by Lookup field (code, name, fips).
   * @param key Lookup value.
   * @returns The matching state, or `undefined` if not found.
   */
  public find < K extends keyof LookupIndexes > ( by: K, key: USState[ K ] ) : USState | undefined {
    return this.index( by ).get( key );
  }

  /**
  * Finds a state by its USPS postal abbreviation.
  * 
  * @param code USPS postal abbreviation.
  * @returns The matching state, or `undefined` if not found.
  */
  public byCode ( code: Code ) : USState | undefined {
    return this.index( 'code' ).get( code );
  }

  /**
   * Finds a state by its official English name.
   * 
   * @param name Official English name.
   * @returns The matching state, or `undefined` if not found.
   */
  public byName ( name: Name ) : USState | undefined {
    return this.index( 'name' ).get( name );
  }

  /**
   * Finds a state by its FIPS code.
   * 
   * @param fips Federal Information Processing Standard (FIPS) code.
   * @returns The matching state, or `undefined` if not found.
   */
  public byFips ( fips: FIPS ) : USState | undefined {
    return this.index( 'fips' ).get( fips );
  }
}

/**
 * Shared lookup instance for the built-in U.S. state dataset.
 */
export const lookup = new Lookup( states );
