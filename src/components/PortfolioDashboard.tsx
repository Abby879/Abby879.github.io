import React, { useState } from "react";

const PortfolioDashboard: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0e12] text-[#f2f4f6]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#1c242c] bg-[#0a0e12]/95 backdrop-blur">
        <nav className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="font-mono text-sm tracking-[0.25em] text-[#ffb347]"
            >
              AR_SEC
            </a>

            <div className="hidden gap-7 font-mono text-sm text-[#6b7684] md:flex">
              <a
                href="#about"
                className="transition hover:text-[#4ce0d2]"
              >
                ABOUT
              </a>

              <a
                href="#education"
                className="transition hover:text-[#4ce0d2]"
              >
                EDUCATION
              </a>

              <a
                href="#projects"
                className="transition hover:text-[#4ce0d2]"
              >
                PROJECTS
              </a>

              <a
                href="#skills"
                className="transition hover:text-[#4ce0d2]"
              >
                SKILLS
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#4ce0d2]"
              >
                CONTACT
              </a>
            </div>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() =>
                setMobileMenuOpen((currentState) => !currentState)
              }
              className="border border-[#1c242c] px-3 py-2 font-mono text-xs text-[#4ce0d2] transition hover:border-[#4ce0d2] md:hidden"
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-5 grid gap-3 border-t border-[#1c242c] pt-5 font-mono text-sm text-[#8b96a3] md:hidden">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-[#1c242c] px-4 py-3 transition hover:border-[#4ce0d2] hover:text-[#4ce0d2]"
              >
                ABOUT
              </a>

              <a
                href="#education"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-[#1c242c] px-4 py-3 transition hover:border-[#4ce0d2] hover:text-[#4ce0d2]"
              >
                EDUCATION
              </a>

              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-[#1c242c] px-4 py-3 transition hover:border-[#4ce0d2] hover:text-[#4ce0d2]"
              >
                PROJECTS
              </a>

              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-[#1c242c] px-4 py-3 transition hover:border-[#4ce0d2] hover:text-[#4ce0d2]"
              >
                SKILLS
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="border border-[#1c242c] px-4 py-3 transition hover:border-[#4ce0d2] hover:text-[#4ce0d2]"
              >
                CONTACT
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Home */}
      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr]"
      >
        <div>
          <p className="font-mono text-sm tracking-[0.2em] text-[#4ce0d2]">
            AUTHENTICATED SESSION // SECURITY ENGINEER
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Abhishek Raghuraman
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#8b96a3] md:text-xl">
            I am a Security Engineer with hands-on experience gained through
            graduate-level coursework and practical cybersecurity projects.
            My work has focused on identity security, security operations,
            cloud monitoring, vulnerability management, and automation. I am
            now looking for an opportunity to apply these skills and
            contribute to a real-world security team.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="border border-[#ffb347] bg-[#ffb347] px-5 py-3 font-mono text-sm text-[#0a0e12] transition hover:bg-transparent hover:text-[#ffb347]"
            >
              OPEN PROJECT COMMAND CENTER
            </a>

            <a
              href="https://github.com/Abby879"
              target="_blank"
              rel="noreferrer"
              className="border border-[#1c242c] px-5 py-3 font-mono text-sm text-[#8b96a3] transition hover:border-[#4ce0d2] hover:text-[#4ce0d2]"
            >
              GITHUB
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-raghuraman1/"
              target="_blank"
              rel="noreferrer"
              className="border border-[#1c242c] px-5 py-3 font-mono text-sm text-[#8b96a3] transition hover:border-[#4ce0d2] hover:text-[#4ce0d2]"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        <aside className="border border-[#1c242c] bg-[#10161c] p-6">
          <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
            OPERATOR PROFILE
          </p>

          <div className="mt-6 space-y-5 font-mono text-sm">
            <div className="flex flex-col gap-1 border-b border-[#1c242c] pb-3 sm:flex-row sm:justify-between">
              <span className="text-[#6b7684]">ROLE</span>
              <span>Security Engineer</span>
            </div>

            <div className="flex flex-col gap-1 border-b border-[#1c242c] pb-3 sm:flex-row sm:justify-between">
              <span className="text-[#6b7684]">EDUCATION</span>
              <span className="sm:text-right">
                M.S. in Cybersecurity and Computer Engineering
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b border-[#1c242c] pb-3 sm:flex-row sm:justify-between">
              <span className="text-[#6b7684]">CERTIFICATION</span>
              <span>CompTIA Security+</span>
            </div>

            <div className="flex flex-col gap-1 border-b border-[#1c242c] pb-3 sm:flex-row sm:justify-between">
              <span className="text-[#6b7684]">LOCATION</span>
              <span>Ames, Iowa</span>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <span className="text-[#6b7684]">STATUS</span>
              <span className="text-[#4ce0d2]">
                OPEN TO OPPORTUNITIES
              </span>
            </div>
          </div>
        </aside>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-[#1c242c] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-[#4ce0d2]">
            01 // ABOUT
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-4xl font-bold">
                Building my career through practical security work
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#8b96a3]">
                I completed my M.S. in Cybersecurity and Computer Engineering
                at Iowa State University after earning my B.E. in Computer
                Science and Engineering in India. Through my coursework and
                hands-on projects, I developed practical skills in identity
                security, security operations, cloud monitoring,
                vulnerability management, and automation.
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#8b96a3]">
                I enjoy understanding how security systems work,
                investigating problems, and building solutions that are both
                secure and practical. I am looking for an opportunity to
                apply my skills, contribute to a security team, and continue
                growing as a Security Engineer.
              </p>
            </div>

            <div className="border border-[#1c242c] bg-[#10161c] p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                PROFILE SUMMARY
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="font-mono text-xs text-[#6b7684]">
                    EDUCATION
                  </p>

                  <div className="mt-3 space-y-4">
                    <div>
                      <p className="font-medium">
                        M.S. in Cybersecurity and Computer Engineering
                      </p>
                      <p className="mt-1 text-sm text-[#8b96a3]">
                        Iowa State University, United States
                      </p>
                    </div>

                    <div>
                      <p className="font-medium">
                        B.E. in Computer Science and Engineering
                      </p>
                      <p className="mt-1 text-sm text-[#8b96a3]">
                        KLE Technological University, India
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs text-[#6b7684]">
                    CERTIFICATION
                  </p>
                  <p className="mt-1">CompTIA Security+</p>
                </div>

                <div>
                  <p className="font-mono text-xs text-[#6b7684]">
                    FOCUS AREAS
                  </p>
                  <p className="mt-1 leading-7 text-[#8b96a3]">
                    Identity Security, Security Operations, Cloud Security,
                    Vulnerability Management, and Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="border-t border-[#1c242c] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-[#4ce0d2]">
            02 // EDUCATION
          </p>

          <h2 className="mt-4 text-4xl font-bold">Education</h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#8b96a3]">
            My academic background combines computer science with advanced
            study in cybersecurity and computer engineering.
          </p>

          <div className="relative mt-12 border-l border-[#1c242c] pl-8">
            <div className="relative pb-12">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-[#4ce0d2] bg-[#0a0e12]" />

              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                JAN 2024 – DEC 2025
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                M.S. in Cybersecurity and Computer Engineering
              </h3>

              <p className="mt-2 text-lg text-[#8b96a3]">
                Iowa State University
              </p>

              <p className="mt-1 font-mono text-sm text-[#6b7684]">
                Ames, Iowa, United States
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-[#ffb347] bg-[#0a0e12]" />

              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                AUG 2018 – MAY 2022
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                B.E. in Computer Science and Engineering
              </h3>

              <p className="mt-2 text-lg text-[#8b96a3]">
                KLE Technological University
              </p>

              <p className="mt-1 font-mono text-sm text-[#6b7684]">
                India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-[#1c242c] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-[#4ce0d2]">
            03 // PROJECTS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Projects I have worked on
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#8b96a3]">
            These projects gave me practical experience with security
            monitoring, cloud security, network analysis, machine learning,
            and OT security.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="flex flex-col border border-[#1c242c] bg-[#10161c] p-6 transition hover:-translate-y-1 hover:border-[#4ce0d2]">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                MACHINE LEARNING
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                PhishGuard
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#8b96a3]">
                Built a phishing URL detection application that uses machine
                learning to classify links without opening the webpage. The
                application provides quick results through a simple
                Streamlit interface.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Streamlit",
                  "Scikit-learn",
                  "URL Analysis",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#1c242c] px-3 py-1 font-mono text-xs text-[#4ce0d2]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/Abby879/PhishGuard-Creative-Component"
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-mono text-sm text-[#ffb347] transition hover:text-[#4ce0d2]"
              >
                VIEW PROJECT ON GITHUB →
              </a>
            </article>

            <article className="flex flex-col border border-[#1c242c] bg-[#10161c] p-6 transition hover:-translate-y-1 hover:border-[#4ce0d2]">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                SECURITY MONITORING
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Splunk SIEM and Sysmon Lab
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#8b96a3]">
                Built a Windows monitoring lab using Splunk, Sysmon, and
                Splunk Universal Forwarder. I analyzed process activity,
                PowerShell execution, and login events and created a
                dashboard for detection monitoring.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Splunk", "Sysmon", "Windows Logs", "SIEM"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="border border-[#1c242c] px-3 py-1 font-mono text-xs text-[#4ce0d2]"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>

              <a
                href="https://github.com/Abby879/splunk-siem-sysmon-lab"
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-mono text-sm text-[#ffb347] transition hover:text-[#4ce0d2]"
              >
                VIEW PROJECT ON GITHUB →
              </a>
            </article>

            <article className="flex flex-col border border-[#1c242c] bg-[#10161c] p-6 transition hover:-translate-y-1 hover:border-[#4ce0d2]">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                CLOUD SECURITY
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Azure Cloud Security Monitoring
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#8b96a3]">
                Created an Azure monitoring lab to track administrative
                activity, resource changes, and deletion events. I also
                configured Log Analytics, diagnostic settings, and an action
                group.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Microsoft Azure",
                  "Activity Logs",
                  "Log Analytics",
                  "Azure Monitor",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#1c242c] px-3 py-1 font-mono text-xs text-[#4ce0d2]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/Abby879/Azure-cloud-security-monitoring"
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-mono text-sm text-[#ffb347] transition hover:text-[#4ce0d2]"
              >
                VIEW PROJECT ON GITHUB →
              </a>
            </article>

            <article className="flex flex-col border border-[#1c242c] bg-[#10161c] p-6 transition hover:-translate-y-1 hover:border-[#4ce0d2]">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                NETWORK SECURITY
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                IDS and Packet Analysis Lab
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#8b96a3]">
                Built an isolated network lab with Kali Linux and Windows to
                study reconnaissance traffic. I generated Nmap scans and
                analyzed ARP, ICMP, and TCP SYN activity in Wireshark.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Kali Linux",
                  "Nmap",
                  "Wireshark",
                  "Packet Analysis",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#1c242c] px-3 py-1 font-mono text-xs text-[#4ce0d2]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/Abby879/IDS-Packet-Analysis-lab"
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-mono text-sm text-[#ffb347] transition hover:text-[#4ce0d2]"
              >
                VIEW PROJECT ON GITHUB →
              </a>
            </article>

            <article className="flex flex-col border border-[#1c242c] bg-[#10161c] p-6 transition hover:-translate-y-1 hover:border-[#4ce0d2]">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                OT SECURITY
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Smart Grid Anomaly Detection
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#8b96a3]">
                Developed a machine learning model to detect normal and
                malicious activity in DNP3 and Modbus traffic. The project
                covered data preparation, classification, and performance
                evaluation.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Random Forest",
                  "DNP3",
                  "Modbus",
                  "OT Security",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#1c242c] px-3 py-1 font-mono text-xs text-[#4ce0d2]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/Abby879/smartgrid-ot-anomaly-detection"
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-mono text-sm text-[#ffb347] transition hover:text-[#4ce0d2]"
              >
                VIEW PROJECT ON GITHUB →
              </a>
            </article>

            <article className="flex flex-col border border-[#1c242c] bg-[#10161c] p-6 transition hover:-translate-y-1 hover:border-[#4ce0d2]">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                CYBERSECURITY LAB
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Home Lab Cybersecurity Project
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[#8b96a3]">
                Created a home lab with Kali Linux and Ubuntu to practice
                basic attack-and-defense workflows. I used Nmap for scanning,
                UFW for firewall controls, and Wireshark for traffic
                monitoring.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "VirtualBox",
                  "Kali Linux",
                  "Ubuntu",
                  "Nmap",
                  "Wireshark",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#1c242c] px-3 py-1 font-mono text-xs text-[#4ce0d2]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/Abby879/CyberProject"
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-mono text-sm text-[#ffb347] transition hover:text-[#4ce0d2]"
              >
                VIEW PROJECT ON GITHUB →
              </a>
            </article>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/Abby879"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#4ce0d2] px-6 py-3 font-mono text-sm text-[#4ce0d2] transition hover:bg-[#4ce0d2] hover:text-[#0a0e12]"
            >
              VIEW MY GITHUB PROFILE
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-[#1c242c] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-[#4ce0d2]">
            04 // SKILLS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Skills and technologies
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#8b96a3]">
            These are the tools and security areas I have worked with through
            coursework, labs, certifications, and personal projects.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SECURITY OPERATIONS",
                skills: [
                  "Splunk",
                  "Microsoft Sentinel",
                  "Sysmon",
                  "Windows Event Logs",
                  "SIEM Monitoring",
                  "Alert Investigation",
                  "Incident Response",
                  "MITRE ATT&CK",
                ],
              },
              {
                title: "IDENTITY AND ACCESS",
                skills: [
                  "Microsoft Entra ID",
                  "Active Directory",
                  "IAM",
                  "MFA",
                  "Conditional Access",
                  "RBAC",
                  "Access Reviews",
                  "Identity Lifecycle",
                ],
              },
              {
                title: "CLOUD SECURITY",
                skills: [
                  "Microsoft Azure",
                  "Azure Activity Logs",
                  "Log Analytics",
                  "Azure Monitor",
                  "Microsoft Defender",
                  "Cloud Logging",
                  "Audit Trails",
                ],
              },
              {
                title: "NETWORK SECURITY",
                skills: [
                  "Wireshark",
                  "Nmap",
                  "TCP/IP",
                  "Packet Analysis",
                  "Firewall Basics",
                  "Network Monitoring",
                  "Kali Linux",
                ],
              },
              {
                title: "SECURITY AND RISK",
                skills: [
                  "Vulnerability Management",
                  "Risk Assessment",
                  "Security Controls",
                  "NIST CSF",
                  "NIST 800-53",
                  "ISO 27001",
                  "SOX ITGC",
                  "PCI DSS",
                ],
              },
              {
                title: "PROGRAMMING AND TOOLS",
                skills: [
                  "Python",
                  "Java",
                  "C",
                  "C++",
                  "C#",
                  "JavaScript",
                  "PowerShell",
                  "Bash",
                  "Git",
                  "GitHub",
                  "ServiceNow",
                  "Streamlit",
                  "Scikit-learn",
                ],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="border border-[#1c242c] bg-[#10161c] p-6 transition hover:border-[#4ce0d2]"
              >
                <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                  {category.title}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#1c242c] px-3 py-2 font-mono text-xs text-[#4ce0d2]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-[#1c242c] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-[#4ce0d2]">
            05 // CONTACT
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-4xl font-bold">Let&apos;s connect</h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#8b96a3]">
                I am currently looking for cybersecurity opportunities where
                I can apply my skills, contribute to meaningful security
                work, and continue growing as a Security Engineer.
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#8b96a3]">
                Feel free to contact me by email or connect with me on
                LinkedIn to discuss cybersecurity roles, projects, or
                professional opportunities.
              </p>
            </div>

            <div className="border border-[#1c242c] bg-[#10161c] p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-[#ffb347]">
                CONTACT DETAILS
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:raghuramanabhishek@gmail.com"
                  className="flex items-center justify-between gap-4 border border-[#1c242c] px-4 py-4 transition hover:border-[#4ce0d2]"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-[#6b7684]">
                      EMAIL
                    </p>

                    <p className="mt-1 break-all">
                      raghuramanabhishek@gmail.com
                    </p>
                  </div>

                  <span className="shrink-0 text-[#4ce0d2]">→</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishek-raghuraman1/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 border border-[#1c242c] px-4 py-4 transition hover:border-[#4ce0d2]"
                >
                  <div>
                    <p className="font-mono text-xs text-[#6b7684]">
                      LINKEDIN
                    </p>

                    <p className="mt-1">Abhishek Raghuraman</p>
                  </div>

                  <span className="shrink-0 text-[#4ce0d2]">→</span>
                </a>

                <div className="flex items-center justify-between gap-4 border border-[#1c242c] px-4 py-4">
                  <div>
                    <p className="font-mono text-xs text-[#6b7684]">
                      LOCATION
                    </p>

                    <p className="mt-1">Ames, Iowa</p>
                  </div>

                  <span className="shrink-0 text-[#4ce0d2]">●</span>
                </div>

                <div className="flex items-center justify-between gap-4 border border-[#1c242c] px-4 py-4">
                  <div>
                    <p className="font-mono text-xs text-[#6b7684]">
                      STATUS
                    </p>

                    <p className="mt-1">
                      Open to cybersecurity opportunities
                    </p>
                  </div>

                  <span className="shrink-0 text-[#4ce0d2]">●</span>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-20 border-t border-[#1c242c] pt-8">
            <div className="flex flex-col gap-4 font-mono text-xs text-[#6b7684] md:flex-row md:items-center md:justify-between">
              <p>© 2026 Abhishek Raghuraman</p>
              <p>Built with React and TypeScript</p>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDashboard;