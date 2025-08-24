import FailoverDiagram from "./assets/failover.png";
import EndoretWorkflow from "./assets/endoret-workflow.png";
import EndoretScreenshot from "./assets/endoret-screenshot.png";
import StudyImages from "./StudyImages.jsx";
import {useState} from "react";
import {ImageModal} from "./ImageModal.jsx";

export default function CaseStudies() {
  const studies = [
    {
      title: "Failover Stack for Healthcare App",
      context: [
        "Large scale healthcare app for pharmaceutical studies"
      ],
      challenge: [
        "A client required our app have an Recovery Time Objective (RTO) and Recovery Point Objective (RPO) of less than 10 minutes.",
        "At the time, our disaster recovery procedure was manual.",
        "The system had to fully comply with HIPAA and GDPR regulations.",
        "I was responsible for the project solo, so design, implementation, and validation were all my responsibility."
      ],
      solution: [
        "Designed, implemented, and deployed a fully isolated failover stack in a different region with AWS CDK",
        "Switched to a global aurora database with a read instance in the failover stack that would switch to write in the case of a disaster.",
        "Configured DNS failover to direct traffic to the failover stack in case of disaster.",
        "Added load based scaling to the failover ECS clusters to reduce resource usage while idle and automatically scale up in the case of a disaster.",
        "Ran bi-annual failover simulations to validate RTO/RPO and ensure regulatory compliance.",
        "See Figure 1 for an architectural diagram."
      ],
      impact: [
        "Ensured 99.99% availability and reduced RPO and RTO from days to a couple of minutes.",
        "Only increased AWS costs by ~%50.",
        "Delivered a fully compliant, production-ready failover system with zero downtime during testing."
      ],
      images: [
        FailoverDiagram
      ],
    },
    {
      title: "Appointment Scheduling Web App",
      context: [
        "Healthcare provider needed a secure and HIPAA-compliant web app for doctors and patients.",
        "Patients could book and pay for appointments; doctors could manage their schedules.",
        "Automated email notifications and reminders replaced a manual, error-prone system.",
        "See Figure 1 for a diagram of the workflow"
      ],
      challenge: [
        "Scheduling and payments were previously managed manually by staff, leading to inefficiency and errors.",
        "System needed to handle sensitive health information (HIPAA/GDPR compliance) and secure payment data.",
        "Team members had mixed experience levels, requiring mentorship and structured guidance."
      ],
      solution: [
        "Architected and led development of a scheduling platform with Rails backend and Next.js/React frontend, connected via an OpenAPI-compliant API.",
        "Integrated secure payment processing and automated email notifications/reminders.",
        "Implemented GitHub Actions for CI/CD to enforce code quality and ensure tests were passing before merging.",
        "Broke down the project into approachable tasks, reviewed pull requests, and mentored junior developers through regular feedback and guidance.",
        "Introduced daily check-ins to maintain alignment and unblock the team quickly.",
        "See Figure 2 for a screenshot of the end product"
      ],
      impact: [
        "Automated appointment scheduling and payments increased staff efficiency by removing manual processes.",
        "System reliably processes ~$4,000 in patient payments each week.",
        "Delivered the app on schedule; it continues to run smoothly with thousands of patients.",
        "Improved developer skill growth and team confidence through structured mentorship."
      ],
      lessons: [
        "Patience and clarity are critical when mentoring less experienced developers.",
        "Daily check-ins, even brief ones, greatly reduce blockers and improve team productivity.",
        "Selecting familiar, well-supported technologies (Rails + Next.js) accelerated delivery while ensuring maintainability."
      ],
      images: [
        EndoretWorkflow,
        EndoretScreenshot,
      ]
    },
    // {
    //   title: "Configurable Triggers for Medical Surveys",
    //   context: "Healthcare provider needed flexible scheduling for patient surveys.",
    //   solution:
    //     "Implemented a dynamic scheduling engine with configurable time/event-based triggers and clinician-friendly controls.",
    //   impact:
    //     "Improved patient engagement by ~30% and reduced survey iteration time from weeks to hours.",
    // },
    // {
    //   title: "Cross-Platform BLE Communication Library",
    //   context: "Unified BLE communication for iOS, Android, and embedded devices.",
    //   solution:
    //     "Developed a cross-platform BLE API library with consistent abstractions, powering the client’s mixer app.",
    //   impact:
    //     "Reduced BLE-related bugs by 50% and accelerated cross-platform development.",
    // },
    // {
    //   title: "Appointment Scheduling Web App",
    //   context: "Healthcare org needed a simple, reliable scheduling system.",
    //   solution:
    //     "Led development of a lightweight web-based appointment scheduler with conflict detection and reminders.",
    //   impact:
    //     "Reduced scheduling conflicts by 40% and transitioned staff from manual spreadsheets.",
    // },
    // {
    //   title: "AWS CDK Infrastructure Library",
    //   context: "Multiple projects required repeatable, reliable AWS setups.",
    //   solution:
    //     "Created a reusable AWS CDK library with built-in load balancing, auto-scaling, SSL, and CDN support.",
    //   impact:
    //     "Standardized infra across 5+ projects, cutting setup time from weeks to days and reducing deployment errors.",
    // },
  ];

  const [openImg, setOpenImg] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Case Studies</h2>
      <div className="space-y-12">
        {studies.map((study) => (
          <div
            key={study.title}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>

            <div className="md:flex md:gap-6">
              {/* Left: Text content */}
              <div className="md:flex-1">
                {["context", "challenge", "solution", "impact"].map((section) => (
                  <div key={section} className="mb-4">
                    <h4 className="text-lg font-semibold capitalize">{section}</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {study[section].map((point, idx) => {
                        // Detect if "See Figure X" exists in the text
                        const match = point.match(/See Figure (\d+)/i);

                        if (match) {
                          const figIndex = parseInt(match[1], 10) - 1; // Convert Figure # to zero-based index
                          return (
                            <li key={idx}>
                              <span
                                className="text-blue-600 cursor-pointer underline ml-1"
                                onClick={() => setOpenImg(study.images[figIndex])}>
                                {match[0]}
                              </span>
                              {point.replace(match[0], "")}
                            </li>
                          );
                        }

                        return <li key={idx}>{point}</li>;
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right: Images */}
              {study.images && study.images.length > 0 && (
                <StudyImages images={study.images} onOpen={setOpenImg} />
              )}
            </div>
          </div>
        ))}
      </div>
      <ImageModal openImg={openImg} onClose={() => setOpenImg(null)} />
    </div>
  );
}
