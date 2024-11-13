<script>
// @ts-nocheck

  import quizgame from "$lib/assets/quizgame.png";
  import cosmicsite from "$lib/assets/cosmicsplash.png";
  import SkillCard from "$lib/SkillCard.svelte";
  import ProjectCard from "$lib/ProjectCard.svelte";
  import Resume from "$lib/assets/AlexanderGervaisResume.pdf";
  import selfie from "$lib/assets/selfie.jpg";

  const projects = [
  {
    href: "/cosmicwebsite",
    date: "June 2024",
    title: "Cosmic Boogeyman Website",
    description:
      "I made this website for a tarot reader who asked me to make them a website for their youtube channel and allow people to book online readings with them.",
    tags: ["Svelte", "Web Development", "Tailwind", "Cloudflare"],
    imageSrc: cosmicsite,
  },
  {
    href: "/quizgame",
    date: "January 2024",
    title: "Quiz Game",
    description:
      "This is a game I worked on in a group that challenges the user to get as many points as possible without getting any questions incorrect.",
    tags: [ "Svelte","Web Development", "Tailwind", "Trivia"],
    imageSrc: quizgame,
  },
  {
    href: "/wizardgame",
    date: "October 2024",
    title: "Wizard Tower Survival",
    description:
      "In this survival game, you play as a wizard battling endless waves of golems. Cast spells and dodge attacks to maintain your health. Earn points by defeating golems and try to get the highest score.",
    tags: ["Game Development", "Unity", "Survival"],
    imageSrc:
      "https://img.itch.zone/aW1hZ2UvMzAyNTA3OC8xODA4NzI1Ni5qcGc=/794x1000/Oe4%2Bu1.jpg",
  },
];


</script>

<section class="landing-page flex items-center justify-center h-screen text-white text-center">
  <div>
    <h1 class="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
    <p class="text-xl mb-8">Alexander Gervais - Programmer & Web Developer</p>
    <button
      class="btn variant-filled-primary"
      on:click={() =>
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
    >
      View My Projects
    </button>
  </div>
</section>

<main class="container mx-auto">
  <div class="px-4 md:px-32 py-8">
    <h3 class="text-xl font-semibold mt-8 mb-4" id="projects">My Projects</h3>
    <hr class="border-t-2 border-gray-300" />
    <p class="text-lg mb-4">
      Here are some of the projects I have been a part of.
    </p>
    <div class="flex flex-col gap-4 content-center">
      {#each projects as {href, date, title, description, tags, imageSrc}}
        <ProjectCard {href} {date} {title} {description} {tags} {imageSrc} />
      {/each}
    </div>    
    <h2 class="text-2xl font-bold mt-8 mb-4" id="about">About</h2>
    <hr class="border-t-2 border-gray-300" />

    <div class="bg-background text-foreground py-4 md:py-8 flex flex-col md:flex-row items-center justify-center gap-8">
      <div class="w-full md:w-2/3 md:text-left">
        <h1 class="text-2xl font-bold mb-2">Alexander Gervais</h1>
        <p class="text-lg mb-4">Programmer and Web Developer</p>
        <div class="prose max-w-3xl">
          <section class="space-y-4">
            <div class="welcome mb-6">
              <p class="text-lg">
                I'm <span class="font-bold">Alexander Gervais</span>, a Compiler
                Software Engineer from Worcester, Massachusetts. With expertise
                in Python, HTML, CSS, SQL, and JavaScript, I enjoy crafting
                innovative web solutions and optimizing backend databases.
              </p>
            </div>

            <div class="education-work mb-6">
              <p>
                Currently pursuing a Bachelor's degree in Computer Science at <span
                  class="font-semibold">Fitchburg State University</span
                > with a GPA of 3.6, I also work as a self-employed Computer Repair
                Technician, where I enhance my problem-solving and customer service
                skills.
              </p>
            </div>

            <div class="personal">
              <p>
                In my free time, I love cooking, baking, and exploring 3D
                printing. Thank you for visiting my site! Feel free to explore
                my projects and connect with me for potential collaborations.
                Let's create something amazing together!
              </p>
            </div>
          </section>
        </div>
        <div class="my-4">
          <a href={Resume} class="btn variant-filled-secondary" target="_blank"
            >Download Resume PDF</a
          >
        </div>
      </div>
      <div class="w-full md:w-1/3 flex justify-center">
        <img 
          src={selfie} 
          alt="Alexander Gervais Selfie" 
          class="rounded-lg object-cover w-64 h-64 shadow-lg"
        />
      </div>
    </div>
  </div>
</main>
