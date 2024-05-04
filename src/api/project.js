export async function listProject() {
  return [
    {
      id: 1,
      name: "Todo App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      colors: ["#4d0000", "#ff0040", "#0000ff"],
    },
    {
      id: 2,
      name: "Chat Application",
      description:
        "my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum",
      colors: ["#4d0000", "#ff0040", "#0000ff"],
    },
    {
      id: 3,
      name: "Music App",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      colors: ["#4d0000", "#ff0040", "#0000ff"],
    },
  ];
}

export async function addProject({ name, description, color }) {
  return {
    id: Math.random(),
    name,
    description,
    colors: [color],
  };
}

export async function updateProject(id, attrs) {}
