import type { ClientDirective } from "astro";

const focus: ClientDirective = (load, options, element) => {    
    window.addEventListener(
        "focus",
        async () => {
            const hydrate = await load();
            await hydrate();
        },
        { once: true }
    );
};

export default focus;