import { UserConfigExport } from 'vite';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

const app = async (): Promise<UserConfigExport> =>
    defineConfig({
        plugins: [tsconfigPaths()],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './tests/setup.ts',
            coverage: {
                provider: 'v8',
                reporter: ['text', 'json', 'html'],
            },
        },
    });
export default app;
