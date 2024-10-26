<script>
    import { ProgressBar } from "@skeletonlabs/skeleton";
    import Icon from '@iconify/svelte';
    export let skillName;
    export let description;
    export let icon;
    export let progressValue;
  </script>
  
  <article class="card shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto h-full flex flex-col">
    <header class="card-header p-4">
      <h2 class="text-xl font-bold text-center">{skillName}</h2>
    </header>
    <section class="p-4 flex-grow flex flex-col">
      <div class="flex justify-center">
        <Icon icon="{icon}" width="5rem" height="5rem"  style="color: white"/>
      </div>
      <p class="my-4 text-gray-300">{description}</p>
      <div class="mt-auto py-4">
      <ProgressBar value={progressValue} max={100} />
      </div>
    </section>
  </article>
  