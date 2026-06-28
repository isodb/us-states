import { states } from './data/us-states';
import type { USState } from './types';

type Indexes = {
  code?: ReadonlyMap< USState[ 'code' ], USState >;
  name?: ReadonlyMap< USState[ 'name' ], USState >;
  fips?: ReadonlyMap< USState[ 'fips' ], USState >;
};

export class Lookup {
  private readonly states: ReadonlyArray< USState >;
  private readonly indexes: Indexes = {};

  constructor ( states: ReadonlyArray< USState > ) {
    this.states = states;
  }

  private get < K extends 'code' | 'name' | 'fips' > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return this.indexes[ key ] ??= new Map( this.states.map( state => [ state[ key ], state ] ) );
  }

  public filter ( predicate: ( state: USState ) => boolean ) : ReadonlyArray< USState > {
    return this.states.filter( predicate );
  }

  public byCode ( code: USState[ 'code' ] ) : USState | undefined {
    return this.get( 'code' ).get( code );
  }

  public byName ( name: USState[ 'name' ] ) : USState | undefined {
    return this.get( 'name' ).get( name );
  }

  public byFips ( fips: USState[ 'fips' ] ) : USState | undefined {
    return this.get( 'fips' ).get( fips );
  }
}

export const lookup = new Lookup( states );
