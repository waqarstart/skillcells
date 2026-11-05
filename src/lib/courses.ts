export type Course = {
  slug: string;
  category: string;
  title: string;
  shortIntro: string;
  image: string;
  imageAlt: string;
  introduction: string;
  whyTitle: string;
  whyParagraphs: string[];
  topics: string[];
};

const image = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1400&q=85`;

export const courses: Course[] = [
  {
    slug: "artificial-intelligence",
    category: "Artificial Intelligence",
    title: "Artificial Intelligence",
    shortIntro: "Learn how AI and machine learning are changing how people live and work, and explore a path into this fast-growing field.",
    image: image("photo-1677442136019-21780ecad995"),
    imageAlt: "Abstract artificial intelligence network visualization",
    introduction:
      "Technology has changed the whole concept of doing business and managing day-to-day affairs. The next technological upgrade is the progress in artificial intelligence and machine learning. AI has slowly seeped into our professional and individual lives, from managing home appliances to driving cars. The future belongs to artificial intelligence, making a career in AI and ML a promising decision for professionals who want to remain relevant.",
    whyTitle: "Why study an Artificial Intelligence course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam understands the importance of artificial intelligence and has introduced valuable artificial intelligence courses in Lahore. The course develops skills related to AI, machine learning, AI engineering, intelligent applications, predictive analysis, reinforcement learning, cognitive computing, and quantum computing.",
      "Kanzul Islam aims to prepare AI professionals and help businesses find skilled experts to improve their operations. If you are looking for a professional career with high earnings, join us and become an AI professional.",
    ],
    topics: ["Artificial intelligence", "Machine learning", "AI engineering", "Intelligent applications", "Predictive analysis", "Reinforcement learning", "Cognitive computing", "Quantum computing"],
  },
  {
    slug: "full-stack-development",
    category: "Web Development",
    title: "Full Stack Development",
    shortIntro: "Learn to build complete web applications across front-end interfaces, back-end logic, databases, and APIs.",
    image: image("photo-1498050108023-c5249f4df085"),
    imageAlt: "Developer working on code at a laptop",
    introduction:
      "Full Stack Development is one of the most valuable skills in today’s technology-driven world. Businesses need professional websites and web applications to connect with customers, manage operations, and grow online. Full stack developers build complete web solutions across the front end users interact with and the back end that manages application logic, databases, and server-side operations.",
    whyTitle: "Why study a Full Stack Development course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers professional Full Stack Development training designed around modern industry requirements. The course focuses on practical learning and develops skills in front-end and back-end development, database management, API integration, and web application development. Students gain hands-on experience with HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Git, and GitHub.",
      "Our goal is to prepare job-ready developers who can build, test, deploy, and maintain modern web applications. Whether you are starting your career, upgrading your skills, or preparing to freelance, this course provides a practical path toward your goals.",
    ],
    topics: ["HTML, CSS & JavaScript", "React.js", "Node.js & Express.js", "MongoDB", "API integration", "Git & GitHub", "Front-end development", "Back-end development"],
  },
  {
    slug: "web-designing",
    category: "Web Development",
    title: "Web Designing",
    shortIntro: "Develop creative and technical skills to design attractive, responsive websites with a clear user experience.",
    image: image("photo-1547658719-da2b51169166"),
    imageAlt: "Website design shown on a desktop display",
    introduction:
      "A website is more than an online presence; it is a tool for building a brand, attracting customers, and growing a business. Web Designing helps create visually appealing, user-friendly, and responsive websites. Designers bring together layouts, colors, typography, content, and navigation to help businesses communicate their identity effectively.",
    whyTitle: "Why study a Web Designing course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers professional Web Designing training to help students develop industry-relevant skills. The course focuses on HTML, CSS, responsive design, website layouts, typography, color theory, UI/UX principles, and modern design practices. Students learn to create attractive, mobile-friendly websites that provide smooth navigation across devices.",
      "Whether you are a beginner, a student exploring technology, or an aspiring freelancer, this course provides a practical foundation. Develop the creative and technical skills to design modern websites, build a portfolio, and explore opportunities in the digital industry.",
    ],
    topics: ["HTML & CSS", "Responsive design", "Website layouts", "Typography & color theory", "UI/UX principles", "Mobile-friendly websites", "Navigation & usability"],
  },
  {
    slug: "devops",
    category: "Cloud & IT Operations",
    title: "DevOps",
    shortIntro: "Build practical skills in automation, cloud infrastructure, deployment pipelines, and reliable software delivery.",
    image: image("photo-1667372393119-3d4c48d07fc9"),
    imageAlt: "Cloud infrastructure and DevOps technology illustration",
    introduction:
      "Businesses need reliable, scalable, and efficient ways to develop, test, and deliver software. DevOps brings development and IT operations together to improve collaboration, automate workflows, and accelerate software delivery. It plays a key role in cloud infrastructure, automated deployments, application monitoring, and system reliability.",
    whyTitle: "Why study a DevOps course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers professional DevOps training designed to develop practical, industry-relevant skills. The course introduces Linux, Git and GitHub, Docker, Kubernetes, Jenkins, CI/CD pipelines, cloud computing, infrastructure automation, and application monitoring. Through hands-on exercises and projects, students learn to automate tasks, manage deployment pipelines, and work with containerized applications.",
      "Our goal is to prepare skilled DevOps professionals who can streamline development, reduce deployment time, and maintain reliable digital infrastructure. The course is suited to students, developers, and IT professionals looking to specialize in cloud and automation technologies.",
    ],
    topics: ["Linux & Git", "Docker", "Kubernetes", "Jenkins", "CI/CD pipelines", "Cloud computing", "Infrastructure automation", "Application monitoring"],
  },
  {
    slug: "seo-digital-marketing",
    category: "Digital Marketing",
    title: "SEO & Digital Marketing",
    shortIntro: "Learn practical ways to improve search visibility, reach audiences, manage campaigns, and measure results.",
    image: image("photo-1460925895917-afdab827c52f"),
    imageAlt: "Digital marketing analytics dashboard on a computer",
    introduction:
      "Businesses need more than a website to succeed; they need effective strategies to reach the right audience, build brand awareness, and generate leads. SEO and Digital Marketing help businesses improve online visibility, attract potential customers, and increase sales through search optimization, engaging content, targeted campaigns, and performance analysis.",
    whyTitle: "Why study an SEO & Digital Marketing course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers professional SEO and Digital Marketing training designed to develop practical, industry-relevant skills. The supplied course content highlights keyword research, on-page and off-page SEO, technical SEO, content marketing, social media marketing, Google Ads, email marketing, website analytics, and campaign optimization.",
      "Explore practical ways to improve search visibility, reach audiences, manage digital campaigns, and review performance. Contact the team to confirm the complete syllabus and current training schedule.",
    ],
    topics: ["Keyword research", "On-page & off-page SEO", "Technical SEO", "Content marketing", "Social media marketing", "Google Ads", "Email marketing", "Analytics & optimization"],
  },
  {
    slug: "graphic-designing-video-editing",
    category: "Creative Technology",
    title: "Graphic Designing & Video Editing",
    shortIntro: "Create professional graphics and engaging video content using design principles and industry-standard tools.",
    image: image("photo-1626785774573-4b799315345d"),
    imageAlt: "Creative graphic design work in progress",
    introduction:
      "Visual content is a powerful way to communicate ideas, promote businesses, and capture attention. Graphic Designing and Video Editing help create engaging visuals, strong brand identities, and compelling stories across digital platforms—from logos and social media posts to promotional videos and reels.",
    whyTitle: "Why study Graphic Designing & Video Editing at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers practical training designed to develop industry-relevant creative skills. The course focuses on design principles, color theory, typography, visual composition, branding, image editing, video editing, transitions, audio synchronization, and visual storytelling. Students work with tools such as Adobe Photoshop, Illustrator, Premiere Pro, and After Effects.",
      "Whether you are starting a creative career, promoting your business, or preparing to freelance, this course provides a practical foundation to build a professional portfolio and explore opportunities in the creative industry.",
    ],
    topics: ["Design principles & composition", "Color theory & typography", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects", "Video editing & storytelling"],
  },
  {
    slug: "wordpress-development",
    category: "Web Development",
    title: "WordPress Development",
    shortIntro: "Build and manage professional websites, from setup and customization to security, performance, and online stores.",
    image: image("photo-1498050108023-c5249f4df085"),
    imageAlt: "Website developer working at a computer",
    introduction:
      "A professional website is essential for businesses, entrepreneurs, and individuals who want a strong online presence. WordPress enables users to create and manage websites, portfolios, blogs, online stores, and corporate platforms using flexible themes, plugins, and customization options.",
    whyTitle: "Why study a WordPress Development course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers practical WordPress training designed for modern industry requirements. Topics include WordPress installation and configuration, theme customization, plugin management, responsive layouts, domain and hosting setup, website security, performance optimization, and SEO. Students create business websites, landing pages, blogs, portfolios, and e-commerce stores using WooCommerce.",
      "Through hands-on projects, students gain experience building, managing, and maintaining websites. The course is suitable for beginners, business owners, and aspiring freelancers who want to develop professional website skills.",
    ],
    topics: ["WordPress setup", "Themes & plugins", "Responsive website design", "Domain & hosting", "Security & performance", "SEO", "WooCommerce"],
  },
  {
    slug: "shopify-development",
    category: "E-commerce",
    title: "Shopify Development",
    shortIntro: "Learn to configure, customize, and manage online stores, products, payments, and the customer experience.",
    image: image("photo-1556742049-0cfed4f6a45d"),
    imageAlt: "Online shopping and e-commerce payment experience",
    introduction:
      "Businesses need reliable, user-friendly online stores to sell products and grow revenue. Shopify helps entrepreneurs create and manage online stores, design storefronts, manage product catalogs, configure payments, and handle orders without building an e-commerce system from scratch.",
    whyTitle: "Why study a Shopify Development course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers practical Shopify training covering store setup, theme customization, product management, collections, payment and shipping configuration, domain integration, store design, and mobile responsiveness. Students also learn about discounts, order management, apps, SEO, and improving the shopping experience.",
      "Hands-on projects provide experience creating and managing online stores. This course is for students, business owners, and aspiring freelancers who want practical e-commerce skills.",
    ],
    topics: ["Store setup", "Theme customization", "Products & collections", "Payments & shipping", "Domains & apps", "Mobile responsiveness", "SEO & product pages"],
  },
  {
    slug: "software-quality-assurance",
    category: "Software Quality",
    title: "Software Quality Assurance (SQA)",
    shortIntro: "Build practical testing skills to plan tests, identify defects, and help deliver reliable software.",
    image: image("photo-1518770660439-4636190af475"),
    imageAlt: "Computer hardware and software testing equipment",
    introduction:
      "Software quality is essential to reliable, secure, and user-friendly digital products. Software Quality Assurance helps ensure applications meet quality standards, function as expected, and work across devices by identifying defects, validating functionality, and testing performance.",
    whyTitle: "Why study an SQA course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers professional SQA training designed to build practical, industry-relevant skills. Topics include testing fundamentals, test case design, test planning, bug reporting, functional, regression, integration, and system testing, and user acceptance testing. Students are introduced to API testing with Postman, performance testing fundamentals with JMeter, Agile and Scrum, and test automation.",
      "Through hands-on exercises and projects, learners practice identifying defects, documenting results, and verifying functionality. The course provides a foundation for students, graduates, and professionals interested in software testing.",
    ],
    topics: ["Testing fundamentals", "Test cases & planning", "Bug reporting", "Functional & regression testing", "Postman API testing", "JMeter fundamentals", "Agile & Scrum", "Test automation introduction"],
  },
  {
    slug: "ui-ux-design-figma",
    category: "Creative Technology",
    title: "UI/UX Design with Figma",
    shortIntro: "Design useful digital experiences with user research, clear flows, responsive layouts, and interactive prototypes.",
    image: image("photo-1561070791-2526d30994b5"),
    imageAlt: "Designer creating a digital interface prototype",
    introduction:
      "Successful websites and mobile applications need more than attractive visuals; they need intuitive, user-friendly experiences. UI and UX Design help make digital products visually appealing, easy to navigate, and enjoyable to use. Figma supports website layouts, mobile interfaces, interactive prototypes, and collaborative design systems.",
    whyTitle: "Why study UI/UX Design with Figma at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers practical UI/UX Design training using Figma. The course covers UI/UX fundamentals, user research, personas, information architecture, user flows, wireframing, visual design principles, typography, color theory, responsive layouts, and interactive prototyping. Students learn Figma tools, components, auto layout, reusable styles, and collaboration features.",
      "Through hands-on projects, learners design user-friendly digital products and present their solutions. This course is suited to students, graphic designers expanding their skills, and aspiring freelancers.",
    ],
    topics: ["User research & personas", "Information architecture", "User flows & wireframes", "Visual design", "Responsive layouts", "Figma components & auto layout", "Interactive prototypes"],
  },
  {
    slug: "business-analysis",
    category: "Business & Professional Skills",
    title: "Business Analysis",
    shortIntro: "Learn to understand business needs, document requirements, analyze processes, and support effective technology projects.",
    image: image("photo-1454165804606-c3d57bc86b40"),
    imageAlt: "Business professionals reviewing project documents together",
    introduction:
      "Organizations need clear strategies, well-defined requirements, and effective solutions. Business Analysis helps identify challenges, improve processes, and guide decisions. Business Analysts bridge stakeholders, business teams, and technical professionals by translating business needs into practical solutions.",
    whyTitle: "Why study a Business Analysis course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers practical Business Analysis training covering requirements gathering, stakeholder management, process modeling, documentation, gap and feasibility analysis, and solution evaluation. Students learn to prepare BRDs, SRS documents, use cases, user stories, and acceptance criteria. The course also introduces process mapping, Agile and Scrum, Jira, Confluence, and stakeholder communication.",
      "The course prepares learners to understand business needs, define requirements, and support technology solutions. It is suitable for students, IT professionals, and aspiring Business Analysts.",
    ],
    topics: ["Requirements gathering", "Stakeholder management", "Process modeling", "BRD & SRS documentation", "Use cases & user stories", "Gap & feasibility analysis", "Agile, Jira & Confluence"],
  },
  {
    slug: "typing-course",
    category: "Business & Professional Skills",
    title: "Typing Course",
    shortIntro: "Improve typing speed, accuracy, and confidence with structured practice and correct keyboard techniques.",
    image: image("photo-1516321318423-f06f85e504b3"),
    imageAlt: "Student practicing typing on a laptop keyboard",
    introduction:
      "Typing is an essential skill for students, professionals, and people who work with computers. Speed and accuracy improve productivity in everyday tasks such as preparing documents, entering data, writing emails, and managing office work. Learning keyboard techniques, finger placement, and touch typing helps people type without constantly looking at the keyboard.",
    whyTitle: "Why study a Typing course at Kanzul Islam?",
    whyParagraphs: [
      "Kanzul Islam offers practical typing training for beginners and learners who want to improve speed and accuracy. The course focuses on keyboard familiarity, correct finger placement, touch typing, typing without looking at the keyboard, speed development, accuracy, and posture. Structured exercises, timed tests, and regular assessments help students track progress.",
      "The course helps students develop typing skills for academic work, office administration, data entry, and other computer-based tasks. It provides a practical foundation for school students, beginners, and job seekers.",
    ],
    topics: ["Keyboard familiarity", "Finger placement", "Touch typing", "Typing posture", "Speed & accuracy", "Timed typing tests", "Progress assessments"],
  },
];

export function getCourseBySlug(slug: string | undefined) {
  return courses.find((course) => course.slug === slug);
}
