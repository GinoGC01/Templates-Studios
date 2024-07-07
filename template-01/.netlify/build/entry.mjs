import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BZH4wXRP.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CkfycOGc.mjs');
const _page1 = () => import('./chunks/404_DpSsVh0A.mjs');
const _page2 = () => import('./chunks/_area__3nE0La3r.mjs');
const _page3 = () => import('./chunks/_notice__Kr7noHJx.mjs');
const _page4 = () => import('./chunks/_professional__90UPtCgi.mjs');
const _page5 = () => import('./chunks/index_DkBAXajY.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/areas/[area].astro", _page2],
    ["src/pages/notices/[notice].astro", _page3],
    ["src/pages/profesionales/[professional].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "8497391f-214d-4c0f-93b4-e04f2396596d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
