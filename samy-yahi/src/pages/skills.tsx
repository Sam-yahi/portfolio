
const skills = [
  { name: 'React', category: 'Frontend Development', icon: '⚛', iconBg: 'bg-[#1ecbe1]' },
  { name: 'JavaScript', category: 'Web Development', icon: 'JS', iconBg: 'bg-[#f7d83a]' },
  { name: 'Node.js', category: 'Backend Engineering', icon: '⬢', iconBg: 'bg-[#4acb5a]' },
  { name: 'Tailwind CSS', category: 'Styling Framework', icon: '≈', iconBg: 'bg-[#38bdf8]' },
  { name: 'Figma', category: 'UI/UX Design', icon: '◌', iconBg: 'bg-[#0d0d0d]' },
  { name: 'Product Design', category: 'Strategy & UX', icon: '✦', iconBg: 'bg-[#0d0d0d]' },
  { name: 'Graphics Design', category: 'Visual Identity', icon: '◉', iconBg: 'bg-[#ff4fc0]' },
  { name: 'AWS', category: 'Cloud Infrastructure', icon: 'aws', iconBg: 'bg-[#f7d83a]' },
  { name: 'Firebase', category: 'Backend Services', icon: '🔥', iconBg: 'bg-[#ffca28]' },
  { name: 'Python', category: 'Backend / Scripting', icon: 'PY', iconBg: 'bg-[#54b9ff]' },
  { name: 'MongoDB', category: 'Database', icon: '◍', iconBg: 'bg-[#30c46f]' },
  { name: 'Git & GitHub', category: 'Version Control', icon: '◍', iconBg: 'bg-[#0d0d0d]' },
  { name: 'Canva', category: 'Design Software', icon: '◫', iconBg: 'bg-[#26d7ff]' },
  { name: 'Java', category: 'Programming', icon: '☕', iconBg: 'bg-[#f26b35]' },
  { name: 'HTML & CSS', category: 'Web Foundation', icon: '◫', iconBg: 'bg-[#f97316]' },
];

const SkillCard = ({
  name,
  category,
  icon,
  iconBg,
}: {
  name: string;
  category: string;
  icon: string;
  iconBg: string;
}) => (
  <div className="w-[210px] shrink-0 rounded-[18px] border border-black/5 bg-[#d9d9d9] px-3 py-3 shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur-sm sm:w-[260px] sm:px-4 sm:py-4 md:w-[300px]">
    <div className="flex items-center gap-3 sm:gap-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white shadow-inner sm:h-12 sm:w-12 sm:text-lg ${iconBg}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-base font-bold text-[#111827] sm:text-[1.05rem] md:text-[1.35rem]">{name}</h3>
        <p className="text-[11px] text-[#1f2937]/75 sm:text-sm md:text-base">{category}</p>
      </div>
    </div>
  </div>
);

export const Skills = () => {
  const rows = [
    skills.slice(0, 5),
    skills.slice(5, 10),
    skills.slice(10, 15),
  ];

  return (
    <section className="mb-12 mt-10 w-full overflow-hidden px-0 sm:px-2">
      <h1 className="mt-10 text-left text-3xl font-bold">My Skills</h1>
      <div className="skill-marquee-grid mt-6 overflow-hidden rounded-[20px]">
        {rows.map((row, rowIndex) => {
          const repeatedRow = [...row, ...row];

          return (
            <div
              key={`row-${rowIndex}`}
              className="skill-marquee-row flex w-max gap-3 py-2 sm:gap-4 sm:py-3 md:gap-5"
            >
              {repeatedRow.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${rowIndex}-${index}`}
                  name={skill.name}
                  category={skill.category}
                  icon={skill.icon}
                  iconBg={skill.iconBg}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};
