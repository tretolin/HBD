import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // Treat <custom-element> as a custom element
                    isCustomElement: (tag) => tag === "custom-element",
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@components": path.resolve(__dirname, "src/components"),
            "@assets": path.resolve(__dirname, "src/components"),
        },
    },
});
