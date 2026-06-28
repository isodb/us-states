import { states } from './data/us-states';
import { lookup } from './lookup';

export type * from './types';

export const byCode = lookup.byCode.bind( lookup );
export const byName = lookup.byName.bind( lookup );
export const byFips = lookup.byFips.bind( lookup );
export const filter = lookup.filter.bind( lookup );

export const usStates = { states, lookup, byCode, byName, byFips, filter };

export default usStates;
