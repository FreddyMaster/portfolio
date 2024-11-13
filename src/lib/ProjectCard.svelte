<script lang="ts">
  export let href;
  export let date;
  export let title;
  export let description;
  export let tags:Array<string> = [];
  export let imageSrc;
</script>


  <div class="card grid grid-cols-12 gap-4 md:gap-8 items-center mb-20 p-4">
    <div class="overflow-hidden col-span-12 md:col-span-6 flex items-center rounded-lg">
      <img
        class="transition-transform duration-1000 ease-out hover:scale-110 w-full object-cover  rounded-lg"
        src={imageSrc}
        alt={title}
      />
    </div>
    <div class="col-span-12 md:col-span-6 py-4 flex flex-col justify-between h-full">
      <div class="mb-4">
        <span class="text-lg font-bold">{date}</span>
        <h3 class="h3 font-semibold text-primary-500 mt-0">
          {title}
        </h3>
        <p class="mt-2">{description}</p>
        <div class="flex flex-wrap text-sm mt-2">
          {#each tags as tag}
            <span class="chip variant-soft-secondary mx-1 my-2 rounded-full text-white">{tag}</span>
          {/each}
        </div>
      </div>
      <div>
        <a rel="noopener noreferrer" href={href} class="mb-10">
        <span class="btn variant-filled-secondary">View Project</span>
      </a>
      </div>
    </div>
  </div>


