const social = [
  {
    label: "Mastodon",
    url: "https://mastodon.social/@jeromecoupe",
  },
  {
    label: "Github",
    url: "https://github.com/jeromecoupe",
  },
  {
    label: "Dribbble",
    url: "https://dribbble.com/jeromecoupe",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/jcoupe/",
  },
];

export default social.sort((a, b) =>
  a.label.localeCompare(b.label, "en", { sensitivity: "base" })
);
