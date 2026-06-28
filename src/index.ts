/**
 * @isodb/us-states
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

export const byCode = lookup.byCode.bind( lookup );
export const byName = lookup.byName.bind( lookup );
export const byFips = lookup.byFips.bind( lookup );
export const filter = lookup.filter.bind( lookup );

export const usStates = { states, lookup, byCode, byName, byFips, filter };

export default usStates;
