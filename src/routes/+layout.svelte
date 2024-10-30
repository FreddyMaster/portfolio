<script lang="ts">
  import "../app.postcss";
  import { AppShell } from "@skeletonlabs/skeleton";
  import { initializeStores, Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  initializeStores();
  const drawerStore = getDrawerStore();
  function drawerOpen(): void {
    drawerStore.open({});
  }
  function drawerClose(): void {
    drawerStore.close();
  }
</script>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
  <svelte:fragment slot="header">
    <header
      class="w-full px-4 py-2 z-50 transition-all duration-300 shadow-lg"
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
          <a href="/#skills" class="btn hover:variant-soft-secondary">My Skills</a>
          <a href="/#about" class="btn hover:variant-soft-secondary">About</a>
        </nav>
      </div>
    </header>
  </svelte:fragment>
  <Drawer>
    <h2 class="p-4">Navigation</h2>
    <hr />
    <nav class="list-nav space-y-2 p-4">
      <a href="/" on:click={drawerClose} class="btn hover:variant-soft-secondary">Homepage</a>
      <a href="/#projects" on:click={drawerClose} class="btn hover:variant-soft-secondary">Projects</a>
      <a href="/#skills" on:click={drawerClose} class="btn hover:variant-soft-secondary">My Skills</a>
      <a href="/#about" on:click={drawerClose} class="btn hover:variant-soft-secondary">About</a>
    </nav>
  </Drawer>
  <main >
    <slot />
  </main>
</AppShell>