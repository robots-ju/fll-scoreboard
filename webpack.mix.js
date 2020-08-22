const mix = require('laravel-mix');

const src_path = 'src/';
const dest_path = 'site';
const dest_path_assets = dest_path + '/assets';

mix
  .setPublicPath(dest_path)
  .ts(src_path + 'js/app.ts', dest_path_assets)
  .ts(src_path + 'js/tests.ts', 'tests/precompiled.js')
  .sass(src_path + 'sass/app.scss', dest_path_assets)
  .copy(src_path + 'html', dest_path)
  .copy(src_path + 'img', dest_path_assets)
  .version();
