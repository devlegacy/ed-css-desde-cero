// import '@babel/polyfill';
import { w, n, d } from './helpers/web';
import { log, error, warn, consoleUserWarning } from './helpers/console';
import { app } from './components/ed-app';
import hmr from './helpers/hrm';

if (ENV === 'production') consoleUserWarning();
log('[app]', 'Start');
app();
hmr(module);
