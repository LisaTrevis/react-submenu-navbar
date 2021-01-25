import React from "react";
import {
  FaFolderOpen,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaUserFriends,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaPaw,
} from "react-icons/fa";

const sublinks = [
  {
    page: "About me",
    links: [
      { label: "Skills", icon: <FaCode />, url: "/" },
      { label: "Education", icon: <FaGraduationCap />, url: "/" },
      { label: "Experience", icon: <FaBriefcase />, url: "/" },
      { label: "Recommendations", icon: <FaUserFriends />, url: "/" },
    ],
  },
  {
    page: "Projects",
    links: [
      { label: "Project 1", icon: <FaFolderOpen />, url: "/" },
      { label: "Project 2", icon: <FaFolderOpen />, url: "/" },
      { label: "Project 3", icon: <FaFolderOpen />, url: "/" },
      { label: "Project 4", icon: <FaFolderOpen />, url: "/" },
    ],
  },
  {
    page: "Social",
    links: [
      {
        label: "LinkedIn",
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/lisatrevis/",
      },
      {
        label: "Github",
        icon: <FaGithub />,
        url: "https://github.com/LisaTrevis",
      },
      {
        label: "Codepen",
        icon: <FaCodepen />,
        url: "https://codepen.io/LisaTrevis/",
      },
    ],
  },
  {
    page: "Pets",
    links: [
      { label: "Daisy", icon: <FaPaw />, url: "/" },
      { label: "Nessa", icon: <FaPaw />, url: "/" },
    ],
  },
];

export default sublinks;
