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

/**
 * Represents a U.S. state, the District of Columbia, or a U.S. territory.
 */
export interface USState {

  /**
   * USPS postal abbreviation (e.g. "CA").
   */
  code: string;

  /**
   * Official English name.
   */
  name: string;

  /**
   * Capital city.
   */
  capital: string;

  /**
   * U.S. Census region.
   */
  region: Region;

  /**
   * U.S. Census division or geographic subdivision.
   */
  division: Division;

  /**
   * Federal Information Processing Standard (FIPS) code.
   */
  fips: string;

  /**
   * Administrative type.
   */
  type: Type;

}
