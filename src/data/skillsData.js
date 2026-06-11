import {
  SiRuby,
  SiReact,
  SiAngular,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiJquery,
  SiNginx,
  SiHeroku,
  SiRabbitmq,
  SiJira,
} from "react-icons/si";

import {
  FaAws,
  FaCode,
  FaServer,
} from "react-icons/fa";

import {
  TbBrandNextjs,
} from "react-icons/tb";

export const skillCategories = [
  {
    title: "Backend",
    skills: [
      {
        name: "Ruby",
        icon: SiRuby,
        color: "#CC342D",
      },
      {
        name: "Ruby on Rails",
        icon: SiRuby,
        color: "#D30001",
      },
      {
        name: "REST APIs",
        icon: FaCode,
        color: "#38BDF8",
      },
      {
        name: "JSON",
        icon: FaCode,
        color: "#38BDF8",
      },
      {
        name: "Third Party APIs",
        icon: FaServer,
        color: "#22C55E",
      },
      {
        name: "Sidekiq",
        icon: SiRuby,
        color: "#B91C1C",
      },
      {
        name: "Resque",
        icon: SiRedis,
        color: "#DC382D",
      },
      {
        name: "Background Jobs",
        icon: FaServer,
        color: "#14B8A6",
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "Redis",
        icon: SiRedis,
        color: "#DC382D",
      },
      {
        name: "RabbitMQ",
        icon: SiRabbitmq,
        color: "#FF6600",
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: TbBrandNextjs,
        color: "#FFFFFF",
      },
      {
        name: "Angular",
        icon: SiAngular,
        color: "#DD0031",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "jQuery",
        icon: SiJquery,
        color: "#0769AD",
      },
      {
        name: "AJAX",
        icon: FaCode,
        color: "#FACC15",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        name: "Linux",
        icon: SiLinux,
        color: "#FCC624",
      },
      {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "Nginx",
        icon: SiNginx,
        color: "#009639",
      },
      {
        name: "CI/CD",
        icon: FaServer,
        color: "#22C55E",
      },
      {
        name: "Heroku",
        icon: SiHeroku,
        color: "#79589F",
      },
      {
        name: "Capistrano",
        icon: SiRuby,
        color: "#CC342D",
      },
      {
        name: "Jira",
        icon: SiJira,
        color: "#0052CC",
      },
    ],
  },
];