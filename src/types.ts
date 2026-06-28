/**
 * Administrative type.
 */
export type Type =
  | 'state'
  | 'district'
  | 'territory';

/**
 * U.S. Census region.
 */
export type Region =
  | 'South'
  | 'West'
  | 'Midwest'
  | 'Northeast'
  | 'Territory';

/**
 * U.S. Census division or geographic subdivision.
 */
export type Division =
  | 'Pacific'
  | 'Mountain'
  | 'East South Central'
  | 'West South Central'
  | 'New England'
  | 'South Atlantic'
  | 'Middle Atlantic'
  | 'East North Central'
  | 'West North Central'
  | 'Oceania'
  | 'Caribbean';

export interface USState {
  code: string;
  name: string;
  capital: string;
  region: Region;
  division: Division;
  fips: string;
  type: Type;
}
