import { motion } from "framer-motion";
import Card from "./components/Card";
import ExternalLink from "./components/ExternalLink";
import Section from "./components/Section";
import SectionHeading from "./components/SectionHeading";
import {
  CERTIFICATE_URL,
  EMAIL,
  HERO_BACKGROUND_URL,
  RESUME_URL,
  contactDetails,
  experience,
  projects,
  skillGroups,
  socialLinks,
} from "./data/portfolio";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-cyan-400 font-bold text-xl">Yashdeep Yadav</h1>
          <div className="flex items-center">
            <ExternalLink
              href={RESUME_URL}
              className="ml-4 px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Preview Resume
            </ExternalLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('${HERO_BACKGROUND_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <motion.h1
          className="relative text-5xl md:text-7xl font-bold text-cyan-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Yashdeep Yadav
        </motion.h1>
        <motion.p
          className="relative mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Data Analyst | Python Developer | Business Analyst Enthusiast
        </motion.p>
        <motion.a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-2xl hover:bg-cyan-400 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          View Resume
        </motion.a>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-gradient-to-b from-black to-gray-900">
        <SectionHeading className="mb-8">About Me</SectionHeading>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
          I am Yashdeep Yadav, a passionate Data Analyst with experience in Python,
          SQL, Excel, Power BI, and Business Analytics. Skilled in turning raw data
          into actionable insights, I’ve worked on multiple real-world projects,
          internships, and academic assignments that showcase my ability to bridge
          data and business needs.
        </p>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <Card key={group.title} className="shadow-md" hoverScale={1.02}>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">{group.title}</h3>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="bg-gradient-to-b from-gray-900 to-black">
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-8">
          {experience.map((job) => (
            <Card key={job.role}>
              <h3 className="text-2xl font-semibold">{job.role}</h3>
              <p className="text-gray-400">{job.meta}</p>
              <p className="mt-2 text-gray-300">{job.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-cyan-400/50" hoverScale={1.05}>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.desc}</p>
              <ExternalLink
                href={project.link}
                className="mt-4 inline-block text-cyan-300 hover:underline"
              >
                View on GitHub
              </ExternalLink>
            </Card>
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" className="bg-gradient-to-b from-gray-900 to-black">
        <SectionHeading>Achievements</SectionHeading>
        <Card className="text-center">
          <h3 className="text-2xl font-semibold text-cyan-300">Mental Health Tracker Achievement</h3>
          <p className="mt-2 text-gray-300">
            Recognized for developing the Mental Health Tracker software project, which was
            highlighted in resume achievements for innovation in mental health analytics.
          </p>
          <ExternalLink
            href={CERTIFICATE_URL}
            className="mt-4 inline-block text-cyan-300 hover:underline"
          >
            View Certificate
          </ExternalLink>
        </Card>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gradient-to-b from-black to-gray-900">
        <SectionHeading>Contact</SectionHeading>
        <div className="text-center space-y-4">
          {contactDetails.map((detail) => (
            <p key={detail} className="text-gray-300 text-lg">
              {detail}
            </p>
          ))}
          <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:underline text-lg">
            📧 {EMAIL}
          </a>

          <div className="mt-4 space-y-2">
            {socialLinks.map((social) => (
              <ExternalLink
                key={social.href}
                href={social.href}
                className="text-gray-300 hover:text-cyan-300"
              >
                {social.label}
              </ExternalLink>
            ))}
            <div className="mt-3">
              <ExternalLink href={RESUME_URL} className="text-cyan-300 hover:underline">
                Open Resume (PDF)
              </ExternalLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
