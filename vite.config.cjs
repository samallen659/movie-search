import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		coverage: {
			all: true,
			exclude: ['node_modules/**', 'src/mocks/**', '*.cjs'],
			reporter: ['text', 'html'],
		},
	},
});
