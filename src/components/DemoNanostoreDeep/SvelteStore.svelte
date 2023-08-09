<script>
  import { listUsers } from '../../store/index.ts';
  const handleClick = (idx) => {
    const datas = [...$listUsers.datas];
    console.log('idx', idx);
    datas.splice(idx, 1);
    listUsers.setKey('datas', datas);
  }
</script>

{#if $listUsers.datas}
  {#each $listUsers.datas as { id, name, avatar }, idx}
      <button class="flex items-center mt-5 cursor-pointer" key={id} on:click={() => {handleClick(idx)}}>
        <img class="block w-10 h-10 rounded-full" alt={name} src={avatar} />
        <p class="text-lg ml-5">{name}</p>
      </button>
    {/each}
{/if}