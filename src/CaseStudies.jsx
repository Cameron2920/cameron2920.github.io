import { useState } from "react";
import { ImageModal } from "./ImageModal.jsx";
import StudyImages from "./StudyImages.jsx";
import FailoverDiagram from "./assets/failover.png";
import EndoretWorkflow from "./assets/endoret-workflow.png";
import EndoretScreenshot from "./assets/endoret-screenshot.png";

function SectionList({ title, items, images, onOpen }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {items.map((item, idx) => {
          const match = item.match(/See Figure (\d+)/i);

          if (match) {
            const figIndex = parseInt(match[1], 10) - 1;
            return (
              <li key={idx}>
                {item.replace(match[0], "")}
                <span
                  className="text-blue-600 cursor-pointer underline ml-1"
                  onClick={() => onOpen(images?.[figIndex])}
                >
                  {match[0]}
                </span>
              </li>
            );
          }

          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default function CaseStudies() {
  const [openImg, setOpenImg] = useState(null);

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
        "Only increased AWS costs by ~50%.",
        "Delivered a fully compliant, production-ready failover system with zero downtime during testing."
      ],
      images: [FailoverDiagram]
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
      images: [EndoretWorkflow, EndoretScreenshot]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Case Studies
      </h2>

      <div className="space-y-20">
        {studies.map((study) => (
          <article
            key={study.title}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-6">{study.title}</h3>

            <div className="lg:flex lg:gap-8">
              {/* Left column: details */}
              <div className="lg:w-2/5">
                <SectionList
                  title="Context"
                  items={study.context}
                  images={study.images}
                  onOpen={setOpenImg}
                />
                <SectionList
                  title="Challenge"
                  items={study.challenge}
                  images={study.images}
                  onOpen={setOpenImg}
                />
                <SectionList
                  title="Solution"
                  items={study.solution}
                  images={study.images}
                  onOpen={setOpenImg}
                />
                <SectionList
                  title="Impact"
                  items={study.impact}
                  images={study.images}
                  onOpen={setOpenImg}
                />
                {study.lessons && (
                  <SectionList
                    title="Lessons"
                    items={study.lessons}
                    images={study.images}
                    onOpen={setOpenImg}
                  />
                )}
              </div>

              {/* Right column: images */}
              {study.images?.length > 0 && (
                <div className="lg:w-3/5 mt-8 lg:mt-0">
                  <StudyImages images={study.images} onOpen={setOpenImg} />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <ImageModal openImg={openImg} onClose={() => setOpenImg(null)} />
    </div>
  );
}
