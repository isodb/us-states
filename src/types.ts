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
 * USPS postal abbreviation (e.g. "CA").
 */
export type Code = string;

/**
 * Official English name.
 */
export type Name = string;

/**
 * Federal Information Processing Standard (FIPS) code.
 */
export type FIPS = string;

/**
 * Represents a U.S. state, the District of Columbia, or a U.S. territory.
 */
export interface USState {

  /**
   * USPS postal abbreviation (e.g. "CA").
   */
  code: Code;

  /**
   * Official English name.
   */
  name: Name;

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
  fips: FIPS;

  /**
   * Administrative type.
   */
  type: Type;

}
