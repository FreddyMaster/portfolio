<script lang="ts">
  import "../app.postcss";
  import { AppShell } from "@skeletonlabs/skeleton";
  import { initializeStores, Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
  import { fade } from "svelte/transition";
  export let data;

  initializeStores();
  const drawerStore = getDrawerStore();
  function drawerOpen(): void {
    drawerStore.open({});
  }
  function drawerClose(): void {
    drawerStore.close();
  }
</script>

<AppShell regionPage="scroll-smooth" slotPageHeader="sticky top-0 z-10">
  <svelte:fragment slot="header">
    <header
      class="px-4 py-4 z-50 transition-all duration-300 shadow-lg mt-4 mx-16 bg-surface-800 rounded-full"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-xl md:text-2xl font-bold">
          <a href="/">
            <h3 class="text-xl">Alexander Gervais</h3>
          </a>
        </h1>
        <button class="md:hidden" on:click={drawerOpen}>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav class="hidden md:flex space-x-4">
          <a href="/#projects" class="btn hover:variant-soft-secondary">Projects</a>
          <a href="/#about" class="btn hover:variant-soft-secondary">About</a>
                    <a
            class="btn-icon btn-icon-md variant-soft-primary"
            href="https://github.com/FreddyMaster"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
          </a>
          <a
            class="btn-icon btn-icon-md variant-soft-primary"
            href="https://www.linkedin.com/in/alexander-gervais-a1baa32a5/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </a>
          <a
            class="btn-icon btn-icon-md variant-soft-primary"
            href="mailto:aj@gervaisunplugged.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              {...$$props}
            >
              <path
                fill="white"
                d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  </svelte:fragment>
  <Drawer>
    <nav class="list-nav space-y-2 p-4 h-full flex flex-col">
      <h2 class="p-4">Navigation</h2>
      <hr />
      <div class="flex-grow">
      <a href="/" on:click={drawerClose} class="btn hover:variant-soft-secondary">Homepage</a>
      <a href="/#projects" on:click={drawerClose} class="btn hover:variant-soft-secondary">Projects</a>
      <a href="/#about" on:click={drawerClose} class="btn hover:variant-soft-secondary">About</a>
    </div>
      <div class="flex mt-auto w-full justify-center gap-x-4 max-w-xl">
          <a
            class="btn-icon btn-icon-md variant-soft-primary"
            href="https://github.com/FreddyMaster"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
          </a>
          <a
            class="btn-icon btn-icon-md variant-soft-primary"
            href="https://www.linkedin.com/in/alexander-gervais-a1baa32a5/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </a>
          <a
            class="btn-icon btn-icon-md variant-soft-primary"
            href="mailto:aj@gervaisunplugged.com"
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
                d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
              />
            </svg>
          </a>
        </div>
    </nav>
  </Drawer>
  {#key data.url}
  <div
    in:fade={{duration: 200, delay: 200 }}
    out:fade={{duration: 200 }}
  >
    <slot />
  </div>
  {/key}
</AppShell>