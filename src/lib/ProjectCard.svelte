<script>
    export let title;
    export let imageSrc;
    export let imageAlt;
    export let description;
    export let link;
  </script>
  
  <div class="card shadow-lg rounded-lg overflow-hidden max-w-xs max-h-m mx-auto h-full flex flex-col">
    <header class="card-header p-4">
      <h2 class="text-xl font-bold text-center">{title}</h2>
    </header>
    <section class="p-4 flex-grow flex flex-col">
      <div class="flex justify-center">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <p class="my-4 text-gray-300">{description}</p>
      <div class="mt-auto">
        <a href={link} class="btn variant-filled-secondary w-full">Learn More</a>
      </div>
    </section>
  </div>
  