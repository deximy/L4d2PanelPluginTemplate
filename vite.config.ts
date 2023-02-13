import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";



// https://vitejs.dev/config/
export default defineConfig(
    {
        plugins: [
            vue(
                {
                    customElement: true,
                }
            ),
        ],
        build: {
            lib: {
                entry: resolve(__dirname, "src/lib-main.ts"),
                formats: ["es"],
            },
        },
        define: {
            "process.env": process.env
        },
    }
)
