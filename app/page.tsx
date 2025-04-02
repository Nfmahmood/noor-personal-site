export default function Page() {
  const myProjects = [
    {
      title: "My To-Do App",
      url: "https://to-do-list-umber-eta-45.vercel.app/",
    },
    {
      title: "Learn Javascript Essential",
      url: "https://accordion-three-lake.vercel.app/",
    },
    {
      title: "Tip Calculator",
      url: "https://tip-calculator-livid-gamma.vercel.app/",
    },
    {
      title: "Flash Cards",
      url: "https://study-flashcards-two.vercel.app/",
    },
    {
      title: "Split Bill",
      url: "https://split-bill-flame.vercel.app/",
    },
    {
      title: "Date Counter",
      url: "https://date-counter-pied.vercel.app/",
    },
    {
      title: "Travel Packing List",
      url: "https://travel-list-livid-three.vercel.app/",
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

  myProjects.map((project) => {
    console.log(project.title.toUpperCase());
  });

  return (
    <section>
      <h1 className="mb-8 text-xl font-semibold tracking-tighter">About</h1>
      <p className="mb-4 font-light">
        {`For four years, I built a career in marketing in Pakistan, shaping brands and driving strategies. But when I migrated to the USA, I knew I had to start over—not just in a new country, but in a new field that truly excites me. Web development became my passion, my path forward, and my way to build a better future.`}{" "}
      </p>
      <p className="mb-4 font-light">
        {`Starting from scratch hasn’t been easy, but I’ve embraced every challenge with determination, learning relentlessly and pushing myself to grow in order to build something meaningful. Now, as I take this next big step—landing my first job as a web developer—I bring not just technical skills, but resilience, adaptability, and a unique perspective shaped by my journey. I’m ready to contribute, learn, adapt and prove that bold decisions lead to incredible opportunities.
`}
      </p>

      <h2 className="mt-[3rem] mb-8 text-xl font-semibold tracking-tighter">
        My Portfolio
      </h2>

      <div>
        <ul>
          {myProjects.map((project) => (
            <li className="mt-[0.5rem]">
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
