import type { USState } from '../types';

export const states = [ {
  code: 'AL',
  name: 'Alabama',
  capital: 'Montgomery',
  region: 'South',
  division: 'East South Central',
  fips: '01',
  type: 'state'
} ] as const satisfies USState[];
