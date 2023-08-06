import type {AstroIntegration} from "astro";

export default function customDirective(): AstroIntegration {
    return {
        name: "astro-directives",
        hooks: {
            "astro:config:setup": ({addClientDirective}) => {
                addClientDirective({
                    name: "focus",
                    entrypoint: "./src/directives/focus.ts"
                });
                addClientDirective({
                    name: "click",
                    entrypoint: "./src/directives/click.ts"
                });
            }
        },
    }
}