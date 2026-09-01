

export const Contact = () => {
  return (
    <div>
      <h1 className="mt-10 text-left text-3xl font-bold">Contact Me</h1>
      <p className="mt-4 text-left text-lg text-[#1f2937]/75 sm:text-xl md:text-2xl">
        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://www.linkedin.com/in/samy-yahi-64494b227/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#0077b5] px-4 py-2 text-white hover:bg-[#005a87] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Sam-yahi"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#333] px-4 py-2 text-white hover:bg-[#555] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/samy_yahi"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#1da1f2] px-4 py-2 text-white hover:bg-[#0d8bd9] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Twitter
        </a>
      </div>

    </div>
  )
}
