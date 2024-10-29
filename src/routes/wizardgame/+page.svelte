<script lang="ts">
  let elemCarousel: HTMLDivElement;
  let currentIndex = 0;

  import cosmicsplash from "$lib/assets/cosmicsplash.png";
  import cosmicpricing from "$lib/assets/cosmicpricing.png";
  import cosmicvideos from "$lib/assets/cosmicvideos.png";

  const images = [cosmicsplash, cosmicpricing, cosmicvideos];

  function updateCarousel() {
    elemCarousel.scroll(elemCarousel.clientWidth * currentIndex, 0);
  }

  function carouselLeft(): void {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateCarousel();
  }

  function carouselRight(): void {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  }
</script>

<main>
  <div class="container mx-auto px-32 py-8">
    <!-- Portfolio Item -->
    <div class="mb-8">
      <div class="card">
        <div class="py-4 m-8 grid grid-cols-1 items-center">
          <div class="relative inline-block">
          <!-- Full Images -->
          <div
            bind:this={elemCarousel}
            class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto"
          >
            {#each images as image, index}
              <div
                class="snap-center max-w-full flex justify-center items-center p-4"
                style="display: {currentIndex === index ? 'flex' : 'none'}"
              >
                <img
                  class="max-w-full max-h-full object-contain"
                  src={image}
                  alt={`Cosmic Image ${index + 1}`}
                  loading="lazy"
                />
              </div>
            {/each}
          </div>
          <!-- Arrows Container -->
          <div class="flex justify-center">
            <!-- Button: Left -->
            <button
              type="button"
              class="btn-icon variant-soft-surface hover:bg-secondary-500 transition duration-30 absolute top-1/2 left-8 z-10"
              on:click={carouselLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                {...$$props}
              >
                <path
                  fill="white"
                  d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"
                />
              </svg>
            </button>
            <!-- Button: Right -->
            <button
              type="button"
              class="btn-icon variant-soft-surface hover:bg-secondary-500 transition duration-300 ml-4 absolute top-1/2 right-8 z-10"
              on:click={carouselRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                {...$$props}
              >
                <path
                  fill="white"
                  d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"
                />
              </svg>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
    <h2 class="text-2xl font-bold mt-8 mb-4">Wizard Tower Survival</h2>
    <hr class="border-t-2 border-gray-300" />
    <h3 class="text-md font-semibold mt-4 mb-2">
      Unity and C#
    </h3>
    <p class="text-md mb-4 text-gray-300">
      This is the first game I made with Unity over several weeks.  The goal is to survive as long as possible from endless waves of golems.
    </p>

    <!-- Project Details -->
    <div class="mb-8">
      <h3 class="h3 font-semibold mt-8 mb-4">Project Details</h3>
      <hr class="border-t-2 border-gray-300" />
      <p class="text-lg mb-2 font-semibold mt-4">Type: Solo Project</p>
      <p class="text-lg mb-2 font-semibold">My Roles:</p>
      <dl class="list-dl">
        <div>
          <span class="badge bg-secondary-500 rounded-full"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              {...$$props}
            >
              <path
                fill="white"
                d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z"
              />
            </svg></span
          >
          <span class="flex-auto">
            <dt>Designer</dt>
            <dd class="text-gray-300">
              Created the UI and layout for the HUD and Menu, ensuring a
              cohesive and appealing aesthetic.
            </dd>
          </span>
        </div>
        <div>
          <span class="badge bg-secondary-500 rounded-full"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              {...$$props}
            >
              <path
                fill="white"
                d="m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z"
              />
            </svg></span
          >
          <span class="flex-auto">
            <dt>Programmer</dt>
            <dd class="text-gray-300">
              Implemented AI and spawning using C# Unity Scripts.
            </dd>
          </span>
        </div>
      </dl>
    </div>
  </div>
</main>
