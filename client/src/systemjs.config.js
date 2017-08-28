/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
      //'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
      '@agm/core': 'npm:@agm/core/core.umd.js',
      'ng-pick-datetime': 'npm:ng-pick-datetime',
      'moment': 'npm:moment',
      'tslib': 'npm:tslib',
      '@nicky-lenaers/ngx-scroll-to': 'npm:@nicky-lenaers/ngx-scroll-to',

      // other libraries
      'ngx-bootstrap': 'node_modules/ngx-bootstrap',
      'ng2-table': 'node_modules/ng2-table',
      'rxjs': 'npm:rxjs',
      "ng2-modal": "node_modules/ng2-modal",
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      // the picker 
      'ng-pick-datetime': {
        main: './picker.bundle.js',
        defaultExtension: 'js'
      },
      // momentJS 
      'moment': {
        main: 'moment.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      '@nicky-lenaers/ngx-scroll-to':{
        main: 'bundles/ngx-scroll-to.umd.js',
        defaultExtension: 'js'
      },
      'ngx-bootstrap': { format: 'cjs', main: 'bundles/ngx-bootstrap.umd.js', defaultExtension: 'js' },
      'tslib': {
        main: 'tslib.js',
        defaultExtension: 'js'
      },
      'ng2-table': {
        defaultExtension: 'js'
      },
      "ng2-modal": { 
        main: "index.js", 
        "defaultExtension": "js"
      }
    }
  });
})(this);
