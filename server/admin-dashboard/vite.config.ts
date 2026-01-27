import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
    return {
        base: '/client',
        build: {
            outDir: 'build',
        },
        plugins: [react(), tailwindcss()],
    };
});
