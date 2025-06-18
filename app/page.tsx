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
        {`With the world moving toward digital transformation, I became curious about how modern technology works. I took time off to study web development and build real-world applications, which helped me better understand the development process and improved my ability to work with technical teams on digital projects.
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
