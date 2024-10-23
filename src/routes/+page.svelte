<script>
  import { AppShell } from "@skeletonlabs/skeleton";
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <!-- Hidden below Tailwind's large breakpoint -->
    <nav class="list-nav h-full bg-surface-700">
      <h1 class="text-2xl mb-4 pt-8 px-8">Alexander Gervais</h1>
      <ul class="w-full">
        <li>
          <a href="#portfolio">
            <span class="text-xl"> (icon)</span>
            <span class="flex-auto text-xl">Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <span class="text-xl"> (icon)</span>
            <span class="flex-auto text-xl">Skills</span>
          </a>
        </li>
        <li>
          <a href="#resume">
            <span class="text-xl"> (icon)</span>
            <span class="flex-auto text-xl">Resume</span>
          </a>
        </li>
        <li>
          <a href="#about">
            <span class="text-xl"> (icon)</span>
            <span class="flex-auto text-xl">About</span>
          </a>
        </li>
      </ul>
    </nav>
  </svelte:fragment>

</AppShell>
