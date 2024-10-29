<script>
  import quizgame from "$lib/assets/quizgame.png";
  import cosmicsite from "$lib/assets/cosmicsplash.png";
  import SkillCard from "$lib/SkillCard.svelte";
  import ProjectCard from "$lib/ProjectCard.svelte";
  import Resume from "$lib/assets/AlexanderGervaisResume.pdf";

  const projects = [
    {
      title: "Cosmic Boogeyman Website",
      imageSrc: cosmicsite,
      imageAlt: "Cosmic Boogeyman Website Splashscreen",
      description:
        "I made this website for a tarot reader who asked me to make them a website for their youtube channel and allow people to book online readings with them.",
      link: "/cosmicwebsite",
    },
    {
      title: "Quiz Game",
      imageSrc: quizgame,
      imageAlt: "Quiz Game Main Screen",
      description:
        "This is a game I worked on in a group that challenges the user to get as many points as possible without getting any questions incorrect.",
      link: "/quizgame",
    },
    {
      title: "Wizard Tower Survival",
      imageSrc:
        "https://img.itch.zone/aW1hZ2UvMzAyNTA3OC8xODA4NzI1Ni5qcGc=/794x1000/Oe4%2Bu1.jpg",
      imageAlt: "Wizard Tower Survival Gameplay",
      description:
        "In this survival game, you play as a wizard battling endless waves ofgolems. Cast spells and dodge attacks to maintain your health. Earn points by defeating golems and try to get the highest score.",
      link: "/wizardgame",
    },
  ];

  const skills = [
    {
      name: "Python",
      icon: "mdi:language-python",
      progress: 50,
    },
    {
      name: "HTML",

      icon: "mdi:language-html5",
      progress: 85,
    },
    {
      name: "CSS",
      icon: "mdi:language-css3",
      progress: 75,
    },
    {
      name: "JavaScript",
      icon: "mdi:language-javascript",
      progress: 50,
    },
    {
      name: "Unity",
      icon: "mdi:unity",
      progress: 70,
    },
    {
      name: "Git",
      icon: "mdi:git",
      progress: 70,
    },
    {
      name: "C",
      icon: "mdi:language-c",
      progress: 65,
    },
    {
      name: "Windows",
      icon: "mdi:microsoft",
      progress: 95,
    },
    {
      name: "Linux",
      icon: "fa-brands:linux",
      progress: 85,
    },
    {
      name: "SQL",
      icon: "fontisto:mysql",
      progress: 65,
    },
    {
      name: "Photoshop",
      icon: "devicon-plain:photoshop",
      progress: 85,
    },
    {
      name: "Blender",
      icon: "mdi:blender-software",
      progress: 35,
    },
  ];
</script>

<main>
  <div class="container mx-auto px-32 py-8">
    <h2 class="text-2xl font-bold mt-8 mb-4" id="portfolio">Portfolio</h2>
    <hr class="border-t-2 border-gray-300" />
    <h3 class="text-xl font-semibold mt-4 mb-2">My Projects</h3>
    <p class="text-lg mb-4">
      Here are some of the projects I have been a part of.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each projects as { title, imageSrc, imageAlt, description, link }}
        <ProjectCard {title} {imageSrc} {imageAlt} {description} {link} />
      {/each}
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4" id="skills">Skills</h2>
    <hr class="border-t-2 border-gray-300" />
    <p class="text-xl my-8 mx-4">Here are some of my skills</p>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      {#each skills as { name, icon, progress }}
        <SkillCard skillName={name} {icon} progressValue={progress} />
      {/each}
    </div>
    <h2 class="text-2xl font-bold mt-8 mb-4" id="about">About</h2>
    <hr class="border-t-2 border-gray-300" />

    <div
      class="bg-background text-foreground py-4 md:py-8 flex flex-col md:flex-row items-center justify-center"
    >
      <div class="text-center md:text-left">
        <h1 class="text-2xl font-bold mb-2">Alexander Gervais</h1>
        <p class="text-lg mb-4">Programmer and Web Developer</p>
        <p class="text-base mb-6">
          A passionate frontend developer with expertise in HTML, CSS, and
          JavaScript. Experienced in creating responsive and user-friendly web
          interfaces.
        </p>
        <div class="my-4">
          <a href={Resume} class="btn variant-filled-secondary" target="_blank"
            >Download Resume PDF</a
          >
        </div>
      </div>
      <img src="https://placehold.co/150" alt="" class="mb-4 md:mr-8" />

    </div>
  </div>
</main>
