import { states } from './data/us-states';
import type { USState } from './types';

export class Lookup {
  private readonly states = states;
  private readonly codeIndex: ReadonlyMap< USState[ 'code' ], USState >;
  private readonly nameIndex: ReadonlyMap< USState[ 'name' ], USState >;
  private readonly fipsIndex: ReadonlyMap< USState[ 'fips' ], USState >;

  constructor () {
    this.codeIndex = this.createIndex( 'code' );
    this.nameIndex = this.createIndex( 'name' );
    this.fipsIndex = this.createIndex( 'fips' );
  }

  private createIndex < K extends keyof USState > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return new Map( this.states.map( state => [ state[ key ], state ] ) );
  }
}

export const lookup = new Lookup();
