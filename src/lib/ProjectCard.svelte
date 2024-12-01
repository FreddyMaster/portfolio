<script lang="ts">
  export let href;
  export let date;
  export let title;
  export let description;
  export let tags: Array<string> = [];
  export let imageSrc;
</script>

<div class="grid grid-cols-12 gap-4 md:gap-8 items-center rounded-lg p-4">
  <div class="overflow-hidden col-span-6 md:col-span-6 flex items-center rounded-lg">
    <img
      class="rounded-lg"
      src={imageSrc}
      alt={title}
    />
  </div>
  <div class="col-span-6 md:col-span-6 flex flex-col justify-between h-full">
    <div class="mb-4">
      <span class="text-base font-bold">{date}</span>
      <h3 class="font-semibold text-primary-500 mt-0">{title}</h3>
      <p class="mt-2 text-gray-300 text-base text-wrap">{description}</p>
      <div class="flex flex-wrap text-xs mt-2">
        {#each tags as tag}
          <span class="chip variant-soft-secondary mx-1 my-1 rounded-full text-white">{tag}</span>
        {/each}
      </div>
    </div>
    <div class="mt-4">
      <a rel="noopener noreferrer" href={href} class="block">
        <span class="btn variant-filled-secondary flex items-center">View Project</span>
      </a>
    </div>
  </div>
</div>
