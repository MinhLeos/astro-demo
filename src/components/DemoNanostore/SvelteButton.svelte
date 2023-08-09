<script>
  import { isOpenSvelte } from '../../store/index.ts';
</script>

<!--use "$" to read the store value-->
<button
  on:click={() => isOpenSvelte.set(!$isOpenSvelte)}
  class="mt-10 border p-4 hover:bg-black hover:text-white active:opacity-75"
>
  Open Svelte Modal
</button>
