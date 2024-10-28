<script>
  import quizgame from "$lib/assets/quizgame.png";
  import cosmicsite from "$lib/assets/cosmicsplash.png";
  import SkillCard from "$lib/SkillCard.svelte";
  import ProjectCard from '$lib/ProjectCard.svelte';
  import Resume from "$lib/assets/AlexanderGervaisResume.pdf";

  const projects = [
    {
      title: 'Cosmic Boogeyman Website',
      imageSrc: cosmicsite,
      imageAlt: 'Cosmic Boogeyman Website Splashscreen',
      description: 'I made this website for a tarot reader who asked me to make them a website for their youtube channel and allow people to book online readings with them.',
      link: '/cosmicwebsite'
    },
    {
      title: 'Quiz Game',
      imageSrc: quizgame,
      imageAlt: 'Quiz Game Main Screen',
      description: 'This is a game I worked on in a group that challenges the user to get as many points as possible without getting any questions incorrect.',
      link: '/quizgame'
    },
    {
      title: 'Wizard Tower Survival',
      imageSrc: 'https://img.itch.zone/aW1hZ2UvMzAyNTA3OC8xODA4NzI1Ni5qcGc=/794x1000/Oe4%2Bu1.jpg',
      imageAlt: 'Wizard Tower Survival Gameplay',
      description: 'In this survival game, you play as a wizard battling endless waves ofgolems. Cast spells and dodge attacks to maintain your health. Earn points by defeating golems and try to get the highest score.',
      link: '/quizgame'
    },
    {
      title: 'Wizard Tower Survival',
      imageSrc: 'https://img.itch.zone/aW1hZ2UvMzAyNTA3OC8xODA4NzI1Ni5qcGc=/794x1000/Oe4%2Bu1.jpg',
      imageAlt: 'Wizard Tower Survival Gameplay',
      description: 'In this survival game, you play as a wizard battling endless waves ofgolems. Cast spells and dodge attacks to maintain your health. Earn points by defeating golems and try to get the highest score.',
      link: '/quizgame'
    }
  ];

  const skills = [
    {
      name: "Python",
      description:
        "Python is a versatile programming language known for its readability and broad applicability in web development, data analysis, artificial intelligence, and more.",
      icon: "mdi:language-python",
      progress: 50,
    },
    {
      name: "HTML",
      description:
        "HTML is the standard markup language for creating web pages and web applications.",
      icon: "mdi:language-html5",
      progress: 85,
    },
    {
      name: "CSS",
      description:
        "CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
      icon: "mdi:language-css3",
      progress: 75,
    },
    {
      name: "JavaScript",
      description:
        "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      icon: "mdi:language-javascript",
      progress: 50,
    },
    {
      name: "Unity",
      description:
        "Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.",
      icon: "mdi:unity",
      progress: 70,
    },
    {
      name: "Git",
      description:
        "Git is a distributed version control system for tracking changes in source code during software development.",
      icon: "mdi:git",
      progress: 70,
    },
    {
      name: "C",
      description:
        "C is a general-purpose programming language created by Dennis Ritchie at the Bell Telephone Laboratories in 1972.",
      icon: "mdi:language-c",
      progress: 65,
    },
    {
      name: "Windows",
      description:
        "Windows is a group of several proprietary graphical operating system families developed and marketed by Microsoft.",
      icon: "mdi:microsoft",
      progress: 95,
    },
    {
      name: "Linux",
      description:
        "Linux is a family of open-source Unix-like operating systems based on the Linux kernel.",
      icon: "fa-brands:linux",
      progress: 85,
    },
    {
      name: "SQL",
      description:
        "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.",
      icon: "fontisto:mysql",
      progress: 65,
    },
    {
      name: "Photoshop",
      description:
        "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.",
      icon: "devicon-plain:photoshop",
      progress: 85,
    },
    {
      name: "Blender",
      description:
        "Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality, and computer games.",
      icon: "mdi:blender-software",
      progress: 35,
    },
  ];
  ;
</script>

<main>
  <div class="container mx-auto px-32 py-8">
    <h2 class="text-2xl font-bold mt-8 mb-4" id="portfolio">Portfolio</h2>
    <hr class="border-t-2 border-gray-300" />
    <h3 class="text-xl font-semibold mt-4 mb-2">My Projects</h3>
    <p class="text-lg mb-4">
      Here are some of the projects I have been a part of.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      {#each projects as { title, imageSrc, imageAlt, description, link }}
        <ProjectCard {title} {imageSrc} {imageAlt} {description} {link} />
      {/each}
    </div>

  <h2 class="text-2xl font-bold mt-8 mb-4" id="skills">Skills</h2>
  <hr class="border-t-2 border-gray-300" />
  <p class="text-xl my-8 mx-4">Here are some of my skills</p>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    {#each skills as { name, description, icon, progress }}
      <SkillCard
        skillName={name}
        {description}
        {icon}
        progressValue={progress}
      />
    {/each}
  </div>
  <h2 class="text-2xl font-bold mt-8 mb-4" id="resume">Resume</h2>
  <hr class="border-t-2 border-gray-300" />
  <div class="my-4">
    <a href={Resume} class="btn variant-filled-secondary" target="_blank">Download Resume PDF</a>
  </div>

  <h3 class="text-xl font-semibold mt-4 mb-2">Professional Experience</h3>
  <p class="text-lg mb-4">Here is a summary of my professional experience:</p>
  <dl class="list-dl mb-4">
    <div class="flex items-start mb-2">
      <span class="badge bg-secondary-500 rounded-full mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path fill="white" d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zM19.61 18.36l-4.25 4.25-5.2-5.2 1.77-1.77 1 1 2.47-2.48 1.42 1.42L18.36 17l1.06 1 1.42-1.4zM3.61 9.75L1.39 5.64l4.25-4.25L7.4 3.16 4.93 5.64 6 6.7l2.46-2.48 1.42 1.42-1.42 1.41 1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75z"/>
        </svg>
      </span>
      <span class="flex-auto">
        <dt>Computer Repair Technician</dt>
        <dd class="text-gray-300">
          Diagnosed and repaired desktops, laptops, and peripheral devices.
        </dd>
      </span>
    </div>
    <div class="flex items-start mb-2">
      <span class="badge bg-secondary-500 rounded-full mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path fill="white" d="M12.89 3l1.96.4L11.11 21l-1.96-.4zM19.59 12L16 8.41V5.58L22.42 12 16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12 8 15.58v2.83z"/>
        </svg>
      </span>
      <span class="flex-auto">
        <dt>Team Member</dt>
        <dd class="text-gray-300">
          Provided excellent customer service and managed inventory.
        </dd>
      </span>
    </div>
  </dl>

  <h3 class="text-xl font-semibold mt-4 mb-2">Education</h3>
  <p class="text-lg mb-4">Here is a summary of my educational background:</p>
  <ul class="list-disc pl-5 mb-4">
    <li>Bachelor in Computer Science, Fitchburg State University (September 2021 - December 2024), 3.6 GPA</li>
    <li>High School Diploma in Programming and Web Development, Worcester Technical High School (August 2017 - June 2021), 3.6 GPA</li>
  </ul>

  <h2 class="text-2xl font-bold mt-8 mb-4" id="about">About</h2>
  <hr class="border-t-2 border-gray-300" />

  <h3 class="text-xl font-semibold mt-4 mb-2">About Me</h3>
  <p class="text-lg mb-4">
    I am Alexander Gervais, a passionate Compiler Software Engineer based in Worcester, Massachusetts. I have a love for creating innovative solutions and a strong background in computer science.
  </p>

  <h3 class="text-xl font-semibold mt-4 mb-2">Skills</h3>
  <p class="text-lg mb-4">
    Proficient in Python, HTML & CSS, SQL, JavaScript, Git, C, Windows, and Linux. Strong problem-solving skills and a keen eye for detail.
  </p>

  <h3 class="text-xl font-semibold mt-4 mb-2">Interests</h3>
  <p class="text-lg mb-4">
    In my free time, I enjoy cooking, baking, programming, and 3D printing.
  </p>

  <h3 class="text-xl font-semibold mt-4 mb-2">Projects</h3>
  <ul class="list-disc pl-5 mb-4">
    <li>
      <a href="https://cosmicboogeyman.com/" class="text-blue-500 underline">Cosmic Boogeyman Website</a> - A website for a tarot reader to promote YouTube videos and book private readings.
    </li>
    <li>
      <a href="https://github.com/FreddyMaster/SubGenGUI" class="text-blue-500 underline">SubGenGUI</a> - Generates subtitles for a video file using Whisper and outputs it to a .srt file.
    </li>
  </ul>

  <h3 class="text-xl font-semibold mt-4 mb-2">Profiles</h3>
  <ul class="list-disc pl-5 mb-4">
    <li>
      <a href="https://www.linkedin.com/in/alexander-gervais-a1baa32a5/" class="text-blue-500 underline">LinkedIn</a>
    </li>
    <li>
      <a href="https://github.com/FreddyMaster" class="text-blue-500 underline">GitHub</a>
    </li>
  </ul>
</main>
