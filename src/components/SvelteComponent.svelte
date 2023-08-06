<script>
    let title = 'Svelte Component';
    const handleClick = () => {
        title = title === 'Svelte Component' ? 'Svelte Title Changed' : 'Svelte Component';
    }
</script>
<div class="m-5">
    <h2 class="text-amber-500">{title}</h2>
    <slot name="svelte"/>
    <button
            class="mt-5 border-2 p-2 rounded hover:bg-slate-100"
            on:click={handleClick}
        >
        Change Title
    </button>
</div>