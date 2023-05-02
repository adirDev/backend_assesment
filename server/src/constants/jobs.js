const JOB_NAMES = {
    FULL_STACK: 'FullStack Developer',
    SENIOR_FULL_STACK: 'Senior FullStack Developer',
    FRONT_END: 'FrontEnd Developer',
    SENIOR_FRONT_END: 'Senior FrontEnd Developer',
    JAVA: 'Java Developer',
    SENIOR_JAVA: 'Senior Java Developer',
    BACKEND_TECH_LEAD: 'Backend Tech Lead',
    BUSINESS_DEVELOPMENT_REPRESENTATIVE: 'Business Development Representative',
    CONTENT_MARKETING_MANAGER: 'Content Marketing Manager',
    PRODUCT_MANAGER: 'Product Manager',
    VP_PRODUCT: 'VP Product'
}

const JOB_LOCATIONS = {
    TA_IL: 'Tel-Aviv, IL',
    NY: 'New York, NY'
}

const DEPARTMENTS = {
    RND: 'RnD',
    MARKETING: 'Marketing',
    PRODUCT: 'Product'
}

const JOONKOS_DESCRIPTION = 'Joonko is on a mission to push real fairness in the workplace to the next level. Using Artificial Intelligence and machine learning, Joonko enables companies to achieve diversity, inclusion and belonging throughout the employee’s lifecycle. Being Joonko’s developer is an exciting and meaningful opportunity to join a dedicated and passionate team focused on tackling one of the most urgent and important challenges facing our generation. Every company now says they care about D&I, but no one has achieved it; Joonko is on a mission to build the tools that let leaders who have a genuine commitment to building inclusive cultures achieve their goals.'

const OPEN_JOBS = [
    {
        id: 0,
        name: JOB_NAMES.FULL_STACK,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.RND,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Thoughtful and fun to work with",
            "Imaginative and curious about learning more and develop her/his skills",
            "Responsible, open-minded and has a mission-driven, do-good mentality",
            "In-depth knowledge in HTML, CSS, and JavaScript",
            "3-4 years of experience in building web applications",
            "Have 2+ years of React experience building projects from the ground up",
            "Have 2+ years of Node.js experience, building end to end products",
            "Experience with Redux The following experience will be helpful but isn’t required.",
            "Academic degree",
            "Experience with AWS - Cloudfront, S3, EBS Lambda, etc.",
            "Experience with developing integration-tests",
            "Knowledge in CI/CD tools",
            "Experience of working in Serverless architecture"
        ],
        applyUrl: 'https://joonko.breezy.hr/p/4427c41de38c-fullstack-engineer?source=joonko.co/careers&popup=true'
    },
    {
        id: 1,
        name: JOB_NAMES.FRONT_END,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.RND,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Thoughtful and fun to work with",
            "Imaginative and curious about learning more and develop her/his skills",
            "Responsible, open-minded and has a mission-driven, do-good mentality",
            "In-depth knowledge in HTML, CSS, and JavaScript",
            "At least 3 years of experience in building web applications",
            "Have 2+ years of React experience building projects from the ground up",
            "Have 2+ years of Node.js experience, building end to end products",
            "Experience with Redux."
        ],
        applyUrl: 'https://joonko.breezy.hr/p/0bcfc75e1b51-frontend-developer?source=joonko.co/careers&popup=true'
    },
    {
        id: 2,
        name: JOB_NAMES.SENIOR_FULL_STACK,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.RND,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Thoughtful and fun to work with",
            "Imaginative and curious about learning more and develop her/his skills",
            "Responsible, open-minded and has a mission-driven, do-good mentality",
            "In-depth knowledge in HTML, CSS, and JavaScript",
            "4+ years of experience in building web applications",
            "Have 3+ years of React experience building projects from the ground up",
            "Have 3+ years of Node.js experience, building end to end products",
            "Experience with Typescript and Redux",
            "Academic degree",
            "Experience with AWS - Cloudfront, S3, EBS Lambda, etc.",
            "Experience with developing integration-tests",
            "Knowledge in CI/CD tools",
            "Experience of working in Serverless architecture"
        ],
        applyUrl: 'https://joonko.breezy.hr/p/91e6a19d502d-fullstack-tech-lead?source=joonko.co/careers&popup=true'
    },
    {
        id: 3,
        name: JOB_NAMES.SENIOR_FRONT_END,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.RND,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Thoughtful and fun to work with",
            "Imaginative and curious about learning more and develop her/his skills",
            "Responsible, open-minded and has a mission-driven, do-good mentality",
            "In-depth knowledge in HTML, CSS, and JavaScript",
            "5 years of experience in building web applications",
            "Have 3+ years of React experience building projects from the ground up",
            "Experience with Typescript and Redux",
            "Experience with developing integration-tests",
        ],
        applyUrl: 'https://joonko.breezy.hr/p/53e2d924ce1c-frontend-tech-lead?source=joonko.co/careers&popup=true'
    },
    {
        id: 4,
        name: JOB_NAMES.JAVA,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.RND,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Thoughtful and fun to work with",
            "Imaginative and curious about learning more and develop her/his skills",
            "Responsible, open-minded and has a mission-driven, do-good mentality",
            "Have 2+ years of out of class Java experience building projects from the ground up",
            "Proficient in working with web protocols especially REST API’s",
            "Hands-on experience working with AWS",
            "Gradle/Maven, Spring, and SQL."
        ],
        applyUrl: 'https://joonko.breezy.hr/p/74062742e7df-java-developer?source=joonko.co/careers&popup=true'
    },
    {
        id: 5,
        name: JOB_NAMES.SENIOR_JAVA,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.RND,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Thoughtful and fun to work with",
            "Imaginative and curious about learning more and develop her/his skills",
            "Responsible, open-minded and has a mission-driven, do-good mentality",
            "Have 4+ years of out of class Java experience building projects from the ground up",
            "Proficient in working with web protocols especially REST API’s",
            "Hands-on experience working with AWS",
            "Gradle/Maven, Spring, and SQL."
        ],
        applyUrl: 'https://joonko.breezy.hr/p/5abd6e70d2c2-senior-java-developer?source=joonko.co/careers&popup=true'
    },
    {
        id: 6,
        name: JOB_NAMES.BACKEND_TECH_LEAD,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.RND,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Thoughtful and fun to work with",
            "Imaginative and curious about learning more and develop her/his skills",
            "Responsible, open-minded and has a mission-driven, do-good mentality",
            "Have 4+ years of out of class Java experience building projects from the ground up",
            "Proficient in working with web protocols especially REST API’s",
            "Hands-on experience working with AWS",
            "Gradle/Maven, Spring, and SQL."
        ],
        applyUrl: 'https://joonko.breezy.hr/p/7263d97265da-backend-tech-lead?source=joonko.co/careers&popup=true'
    },
    {
        id: 7,
        name: JOB_NAMES.BUSINESS_DEVELOPMENT_REPRESENTATIVE,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.MARKETING,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Thoughtful and fun to work with",
            "Flawless communication skills, both written and oral, with extensive public speaking experience",
            "Track record of success in developing and managing an outbound pipeline. Having been a part of a successful software/SaaS sales organization, from its early stages – is a big plus",
            "You want to win and you find motivation in temporary setbacks",
            "You don’t believe in settling, you find ways to overachieve and keep improving",
            "Your ability to learn is off the charts and you are hungry for more",
            "You love connecting with people online, on the phone, and face-to-face",
            "Familiarity and relationships within the Tech industry"
        ],
        applyUrl: 'https://joonko.breezy.hr/p/ff271026f758-business-development-representative?&popup=true'
    },
    {
        id: 8,
        name: JOB_NAMES.CONTENT_MARKETING_MANAGER,
        location: JOB_LOCATIONS.NY,
        department: DEPARTMENTS.MARKETING,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "+3 years of experience in B2B SaaS content production, preferably at a start-up",
            "Hands-on experience with SEO and web traffic metrics",
            "Excellent communication skills",
            "Comfortable working with new marketing and analytics tools",
            "Self-starter and detail-oriented with an ability to organize, prioritize and execute multiple, ongoing projects under deadline, with an eye on business impact and quality"
        ],
        applyUrl: 'https://joonko.breezy.hr/p/1c3e621d9b8e-content-marketing-manager?&popup=true'
    },
    {
        id: 9,
        name: JOB_NAMES.PRODUCT_MANAGER,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.PRODUCT,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Passion, real passion, genuine and sincere passion, for our cause",
            "Interpersonal and communication skills: integrity, positivity, and empathy",
            "Experience leading design and product team, including managing product roadmap",
            "4+ years experience as a PM for both back-end and non-UI & UI products in a B2B Startup environment",
            "Ability to conceptualize new ideas and translate them into a sustainable strategy plan",
            "Ability to function as a bridge across disciplines, such as Design, Product, Engineering, and Marketing",
            "Relevant Bachelor's degree"
        ],
        applyUrl: 'https://joonko.breezy.hr/p/7f97affe5469-product-manager?&popup=true'
    },
    {
        id: 10,
        name: JOB_NAMES.VP_PRODUCT,
        location: JOB_LOCATIONS.TA_IL,
        department: DEPARTMENTS.PRODUCT,
        description: JOONKOS_DESCRIPTION,
        requirements: [
            "Passion, real passion, genuine and sincere passion, for our cause",
            "Interpersonal and communication skills: integrity, positivity, and empathy",
            "Experience leading design and product team, including managing product roadmap",
            "4+ years experience as a PM for both back-end and non-UI & UI products in a B2B Startup environment",
            "Ability to conceptualize new ideas and translate them into a sustainable strategy plan",
            "Ability to function as a bridge across disciplines, such as Design, Product, Engineering, and Marketing",
            "Relevant Bachelor's degree"
        ],
        applyUrl: 'https://joonko.breezy.hr/p/546273580978-vp-product?&popup=true'
    },
]

module.exports = {OPEN_JOBS, DEPARTMENTS};