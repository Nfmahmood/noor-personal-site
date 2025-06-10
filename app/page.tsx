export default function Page() {
  const myProjects = [
    {
      title: "My To-Do App",
      url: "https://to-do-list-umber-eta-45.vercel.app/",
    },
    {
      title: "Travel Packing List",
      url: "https://travel-list-livid-three.vercel.app/",
    },
    {
      title: "Tip Calculator",
      url: "https://tip-calculator-livid-gamma.vercel.app/",
    },
    {
      title: "Split Bill",
      url: "https://split-bill-flame.vercel.app/",
    },
    {
      title: "Flash Cards",
      url: "https://study-flashcards-two.vercel.app/",
    },
    {
      title: "Learn Javascript Essential",
      url: "https://accordion-three-lake.vercel.app/",
    },
    {
      title: "Date Counter",
      url: "https://date-counter-pied.vercel.app/",
    },

    {
      title: "Steps to Success",
      url: "https://steps-to-success.vercel.app/",
    },
    {
      title: "Get Advice",
      url: "https://get-advice-six.vercel.app/",
    },
    {
      title: "Pizza Menu",
      url: "https://pizza-menu-pink.vercel.app/",
    },
  ];

  return (
    <section>
      <h1 className="mb-8 text-xl font-semibold tracking-tighter">About</h1>
      <p className="mb-4 font-light">
        {`Detail-oriented and resourceful project manager with a background in marketing and recent training in software development. Proven success in cross-functional team leadership, communication and digital operations. Passionate about project planning, documentation and stakeholder engagement.`}{" "}
      </p>
      <p className="mb-4 font-light">
        {`I realized that to truly understand a project from end to end, I needed a deeper insight into how development teams operate. That's why I took a year-long break to self-study web development and build web applications independently. This experience has given me a solid understanding of the development process, enabling me to better communicate with technical teams and coordinate projects more effectively.
`}
      </p>

      <h2 className="mt-[3rem] mb-8 text-xl font-semibold tracking-tighter">
        Web development projects I’ve built
      </h2>

      <div>
        <ul>
          {myProjects.map((project, index) => (
            <li key={index} className="mt-[0.5rem]">
              <a
                href={project.url}
                className="text-neutral-900 dark:text-neutral-100 italic tracking-tight underline"
                target="_blank"
              >
                {project.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
