import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-cyan-400 font-bold text-xl">Yashdeep Yadav</h1>
          <div className="flex items-center">
            <a
              href="https://drive.google.com/file/d/16yiFRACisMZ8BzxZ7v6eCBt9NwSuiAUc/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="ml-4 px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Preview Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://wallpaperbat.com/img/734680-data-analytics-wallpaper.jpg')",
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
          href="https://drive.google.com/file/d/16yiFRACisMZ8BzxZ7v6eCBt9NwSuiAUc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-2xl hover:bg-cyan-400 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          View Resume
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900 scroll-mt-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
          I am Yashdeep Yadav, a passionate Data Analyst with experience in Python,
          SQL, Excel, Power BI, and Business Analytics. Skilled in turning raw data
          into actionable insights, I’ve worked on multiple real-world projects,
          internships, and academic assignments that showcase my ability to bridge
          data and business needs.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20 scroll-mt-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div className="bg-gray-800 p-6 rounded-2xl shadow-md" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Core Data & BI</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Power BI (DAX, Power Query, RLS, Bookmarks, Drill-throughs)</li>
              <li>Dashboard Design & Data Visualization</li>
              <li>SQL / MySQL (data extraction & analysis)</li>
              <li>Excel (Pivot Tables, Power Pivot, Dashboarding)</li>
            </ul>
          </motion.div>

          <motion.div className="bg-gray-800 p-6 rounded-2xl shadow-md" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Programming, Modeling & ETL</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Python (pandas, NumPy, scikit-learn) — data analysis & automation</li>
              <li>Data Modeling (Star / Snowflake schemas, Fact/Dimension tables)</li>
              <li>ETL: Power Query, Dataflows, Incremental Refresh, Python scripts</li>
              <li>Statistical Analysis: Hypothesis testing, A/B testing</li>
            </ul>
          </motion.div>

          <motion.div className="bg-gray-800 p-6 rounded-2xl shadow-md" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Tools & Platforms</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Git, GitHub, Jupyter Notebook, Streamlit, DAX Studio</li>
              <li>XAMPP (local dev), Power BI Service</li>
              <li>Visualization: Matplotlib / Plotly (Python)</li>
            </ul>
          </motion.div>

          <motion.div className="bg-gray-800 p-6 rounded-2xl shadow-md" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Soft Skills & Domain</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Business Systems Analysis, Requirements Gathering</li>
              <li>Business Process Improvement & Automation</li>
              <li>Collaboration, Communication & Stakeholder Management</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black scroll-mt-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold">Data Analyst Intern - Khola Eng.</h3>
            <p className="text-gray-400">Bawal, Haryana, India | Current</p>
            <p className="mt-2 text-gray-300">
              Worked on data cleaning, visualization, and creating insights using Excel
              and Power BI to improve operational efficiency.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold">Python Developer Intern - MirrorSoft Technology</h3>
            <p className="text-gray-400">Noida | Jan 2022 - Feb 2022</p>
            <p className="mt-2 text-gray-300">
              Developed automation scripts and optimized Python-based tools for
              client-side analytics projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20 scroll-mt-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[{
            title: "Bank Loan Finance Analysis",
            desc: "Analyzed 500+ bank loan records to calculate KPIs like Default Rate, Average Loan and Credit Score. Improved repayment trend analysis and lending insights.",
            link: "https://github.com/Yashdeep18/Bank-loan-finance-analysis"
          },{
            title: "Sales Analysis Dashboard (Power BI)",
            desc: "KPI-driven Power BI dashboard across 5 regions and 12 months with RLS and drill-throughs to accelerate decision making.",
            link: "https://github.com/Yashdeep18/Superstore-Sales-Analysis---Power-BI-Project"
          },{
            title: "Mental Health Tracker (MindMate)",
            desc: "Sentiment-based journaling app with NLP; visualized mood trends and integrated motivational suggestions—used by 50+ users.",
            link: "https://github.com/Yashdeep18/MentalHealthTracker"
          },{
            title: "AI Virtual Assistant (Voice Assistant)",
            desc: "Voice assistant that interprets speech tone and suggests context-aware activities using Python speech libraries.",
            link: "https://github.com/Yashdeep18/AI-Voice-Assistant"
          },{
            title: "House Price Predictor",
            desc: "Regression model with ~92% accuracy on 1500+ records; deployed with Streamlit for interactive prediction analysis.",
            link: "https://github.com/Yashdeep18/House-Price-Predictor"
          },{
            title: "Digital Attendance System (OpenCV)",
            desc: "Facial recognition attendance system (95% accuracy) with Tkinter GUI to log attendance and export CSVs.",
            link: "https://github.com/Yashdeep18/Digital-Attendance-system"
          }].map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-cyan-300 hover:underline">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black scroll-mt-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Achievements
        </motion.h2>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-cyan-300">Mental Health Tracker Achievement</h3>
          <p className="mt-2 text-gray-300">
            Recognized for developing the Mental Health Tracker software project, which was
            highlighted in resume achievements for innovation in mental health analytics.
          </p>
          <a
            href="https://drive.google.com/file/d/1Xb0bv5O6P0Oh1i4N5NudKpik7dcSFtal/view"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-cyan-300 hover:underline"
          >
            View Certificate
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900 scroll-mt-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>
        <div className="text-center space-y-4">
          <p className="text-gray-300 text-lg">📍 Location: India</p>
          <p className="text-gray-300 text-lg">📞 Phone: 8272805743</p>
          <a
            href="mailto:yashyadav365636@gmail.com"
            className="text-cyan-400 hover:underline text-lg"
          >
            📧 yashyadav365636@gmail.com
          </a>

          <div className="mt-4 space-y-2">
            <a href="https://github.com/Yashdeep18" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-300">GitHub • github.com/Yashdeep18</a>
            <a href="https://www.linkedin.com/in/yashdeep-yadav-468411243/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-300">LinkedIn • yashdeep-yadav</a>
            <div className="mt-3">
              <a href="https://drive.google.com/file/d/16yiFRACisMZ8BzxZ7v6eCBt9NwSuiAUc/view?usp=sharing" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">Open Resume (PDF)</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
