import path from 'node:path';
import { UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { name } from './package.json';

const packageName = name.split('/')[1];
const resolvePath = (str: string) => path.resolve(__dirname, str);

const app = async (): Promise<UserConfigExport> =>
    defineConfig({
        build: {
            lib: {
                entry: resolvePath('src/lib/index.ts'),
                name: packageName,
                formats: ['es', 'umd'],
                fileName: (format) => `${packageName}.${format}.js`,
            },
            rollupOptions: {
                external: ['react', 'react/jsx-runtime', 'react-dom', 'highcharts', 'moment'],
                output: {
                    globals: {
                        react: 'React',
                        'react/jsx-runtime': 'react/jsx-runtime',
                        'react-dom': 'ReactDOM',
                        highcharts: 'highcharts',
                    },
                },
            },
            outDir: 'dist',
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './tests/setup.ts',
            coverage: {
                provider: 'v8',
                reporter: ['text', 'json', 'html'],
                exclude: ['docs/*', 'src/stories/*', 'tests/*', '.storybook/*', 'scripts/*', '.eslintrc.js', 'vitest-ui.config.mts', 'src/lib/index.ts'],
            },
        },
        plugins: [
            react(),
            dts({
                insertTypesEntry: true,
                include: [resolvePath('src/lib')],
            }),
            tsconfigPaths(),
        ],
    });
export default app;
