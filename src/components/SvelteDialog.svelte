<script>
  import { isOpenSvelte } from '../store/index.ts';
</script>

{#if $isOpenSvelte}
  <div class="mt-10 text-blue-600">Svelte Hello nanostore!</div>
{/if}
