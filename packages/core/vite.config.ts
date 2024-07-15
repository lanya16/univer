import createViteConfig from '@univerjs/shared/vite';
import pkg from './package.json';

export default ({ mode }) => createViteConfig({
    resolve: {
        alias: {
            danfojs: require.resolve('danfojs'),
        },
    },
}, {
    mode,
    pkg,
});
