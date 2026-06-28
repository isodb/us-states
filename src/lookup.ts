import { states } from './data/us-states';
import type { USState } from './types';

export class Lookup {
  private readonly indexes = {
    code: this.createIndex( 'code' ),
    name: this.createIndex( 'name' ),
    fips: this.createIndex( 'fips' )
  } as const;

  private createIndex < K extends keyof USState > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return new Map( states.map( state => [ state[ key ], state ] ) );
  }
}

export const lookup = new Lookup();
