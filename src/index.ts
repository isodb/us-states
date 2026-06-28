/**
 * US states
 * 
 * Typed reference data for U.S. states, the District of Columbia,
 * and U.S. territories.
 * 
 * Provides immutable datasets and convenient lookup utilities for
 * common state identifiers such as USPS codes, names, and FIPS codes.
 * 
 * @author Paul Köhler (komed3)
 * @license MIT
 */

import { states } from './data/us-states';
import { lookup } from './lookup';

export type * from './types';
export { states, lookup };

/**
 * Finds a state by its USPS postal abbreviation.
 */
export const byCode = lookup.byCode.bind( lookup );

/**
 * Finds a state by its official English name.
 */
export const byName = lookup.byName.bind( lookup );

/**
 * Finds a state by its FIPS code.
 */
export const byFIPS = lookup.byFIPS.bind( lookup );

/**
 * Filters states using the specified predicate.
 */
export const filter = lookup.filter.bind( lookup );

/**
 * Complete package API.
 */
export const usStates = { states, lookup, byCode, byName, byFIPS, filter };
export default usStates;
