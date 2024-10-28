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
    <h2 class="text-2xl font-bold mt-8 mb-4">Trivia Game</h2>
    <hr class="border-t-2 border-gray-300" />

    <!-- Portfolio Item -->
    <div class="mb-8">
      <div class="card">
        <div class="p-4 m-8 grid grid-cols-1 items-center">
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
              class="btn-icon variant-filled-surface hover:bg-primary-500 transition duration-300"
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
              class="btn-icon variant-filled-surface hover:bg-primary-500 transition duration-300 ml-4"
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
    <h2 class="text-2xl font-bold mt-8 mb-4">Trivia Game</h2>
    <hr class="border-t-2 border-gray-300" />
    <h3 class="text-md font-semibold mt-4 mb-2">
      HTML/CSS using Sveltekit and Tailwind
    </h3>
    <p class="text-md mb-4 text-gray-300">
        I made this game as a group project with Daniel Corso.  I did the backend and admin page while Daniel did the frontend with my assistance.
    </p>

    <!-- Project Details -->
    <div class="mb-8">
      <h3 class="h3 font-semibold mt-4 mb-2">Project Details</h3>
      <p class="text-lg mb-2 font-semibold">Type: Group Project - Alexander Gervais and Daniel Corso</p>
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
                Designed the front end for the admin panel which allowed the admin users to add, remove, edit and search questions.  It also allows the admins to moderated users and admins.
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
              Developed the backend-end functionality using Svelte, Implementing the user being able to interact with the database using forms.
            </dd>
          </span>
        </div>

      </dl>
      <p class="text-lg mt-2 font-semibold">
        Demo Video:
      </p>
    </div>
  </div>
</main>
