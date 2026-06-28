import { states } from './data/us-states';
import type { USState } from './types';

export class Lookup {
  private readonly states: ReadonlyArray< USState >;
  private readonly indexes = {
    code: [],
    name: [],
    fips: []
  } as const;

  constructor ( states: ReadonlyArray< USState > ) {
    this.states = states;
  }

  private createIndex < K extends keyof USState > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return new Map( this.states.map( state => [ state[ key ], state ] ) );
  }

  private get < K extends 'code' | 'name' | 'fips' > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return this.indexes[ key ] ??= new Map( this.states.map( state => [ state[ key ], state ] ) );
  }

  public filter ( predicate: ( state: USState ) => boolean ) : ReadonlyArray< USState > {
    return this.states.filter( predicate );
  }
}

export const lookup = new Lookup( states );
