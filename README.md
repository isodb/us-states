# @isodb/us-states

Typed reference data for U.S. states, the District of Columbia, and U.S. territories.

Provides immutable datasets and convenient lookup utilities for common state identifiers such as USPS codes, names, and FIPS codes.

Part of the **[isodb](https://github.com/isodb)** project, providing typed reference datasets for developers.

## Features

- Includes all 50 U.S. states
- Includes the District of Columbia
- Includes permanently inhabited U.S. territories
- Zero dependencies
- Immutable datasets
- Fully typed with TypeScript
- Lazy lookup indexes
- Tree-shakeable API

## Installation

```bash
npm install @isodb/us-states
```

## Usage

### Import the dataset

```ts
import { states } from '@isodb/us-states';

console.log( states.length );
// 56
```

### Lookup by USPS code

```ts
import { byCode } from '@isodb/us-states';

const california = byCode( 'CA' );
console.log( california?.capital );
// Sacramento
```

### Lookup by name

```ts
import { byName } from '@isodb/us-states';

const texas = byName( 'Texas' );
```

### Lookup by FIPS code

```ts
import { byFIPS } from '@isodb/us-states';

const alaska = byFIPS( '02' );
```

### Filter the dataset

```ts
import { filter } from '@isodb/us-states';

const westernStates = filter(
  state => state.region === 'West'
);
```

### Using the lookup service

```ts
import { lookup } from '@isodb/us-states';

lookup.byCode( 'CA' );
lookup.byName( 'California' );
lookup.byFIPS( '06' );

lookup.codes;
lookup.names;
lookup.fips;
```

### Default export

```ts
import USStates from '@isodb/us-states';

USStates.byCode( 'NY' );
USStates.states;
```

## Dataset

Each entry contains the following information:

| Property | Description |
|----------|-------------|
| `code` | USPS postal abbreviation |
| `name` | Official English name |
| `capital` | Capital city |
| `region` | U.S. Census region |
| `division` | U.S. Census division |
| `fips` | Federal Information Processing Standard (FIPS) code |
| `type` | Administrative type (`state`, `district`, or `territory`) |

## Included territories

In addition to the 50 U.S. states, the dataset includes:

- District of Columbia (`DC`)
- American Samoa (`AS`)
- Guam (`GU`)
- Northern Mariana Islands (`MP`)
- Puerto Rico (`PR`)
- U.S. Virgin Islands (`VI`)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.  
© Copyright 2026 Paul Köhler (komed3).
