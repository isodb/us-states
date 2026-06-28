import { states } from './data/us-states';
import type { USState } from './types';

export class Lookup {
  private createIndex < K extends keyof USState > ( key: K ) : ReadonlyMap< USState[ K ], USState > {
    return new Map( states.map( state => [ state[ key ], state ] ) );
  }
}

export const lookup = new Lookup();
