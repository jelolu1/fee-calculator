import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
	test: {
		environment: 'happy-dom',
	},
};

export default defineConfig({
	plugins: [react()],
	test: vitestConfig.test,
});
