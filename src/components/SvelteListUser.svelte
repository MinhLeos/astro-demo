
<script>
    let listUsers = [];
    fetch(`https://64d1e94bf8d60b174361173e.mockapi.io/api/v1/users`)
    .then((res) => res.json())
    .then((data) => {
        if (data?.length > 0) {
        listUsers = data;
        }
    })
    .catch((err) => {
        console.log("Error", err);
    });
</script>

<div>
    <h2 class="text-amber-500">List User Svelte</h2>
    <div>
        {#each listUsers as { id, name, avatar }}
        <div
            class="flex items-center my-5"
            key={id}
        >
            <img
            class="block w-10 h-10 rounded-full"
            alt={name}
            src={avatar}
            />
            <p class="text-lg ml-5">{ name }</p>
        </div>
        {/each}
    </div>
  </div>