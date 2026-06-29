import { build } from 'esbuild';

const common = {
  entryPoints: [
    'src/index.ts',
    'src/lookup.ts',
    'src/data/us-states.ts'
  ],
  outbase: 'src',
  outdir: 'dist',
  bundle: false,
  platform: 'neutral',
  target: 'esnext',
  sourcemap: false,
  legalComments: 'none',
  minify: false,
  treeShaking: true
};

await Promise.all( [
  build( {
    ...common,
    outExtension: { '.js': '.js' },
    format: 'esm'
  } ),
  build( {
    ...common,
    outExtension: { '.js': '.cjs' },
    format: 'cjs'
  } )
] );
