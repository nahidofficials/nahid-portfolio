/* =====================================================================
   SKILLS DATA - the one place to edit every skill page.

   Each skill below becomes:
     - a card on the Skills overview page  (/skills/)
     - its own page                        (/skills/<slug>/)
   All pages use the same template, so you only change text here.

   Fields
     slug                 URL name. Must match the folder name in /skills/<slug>/
     number               Label shown on the card ("01" ...)
     title                Skill name
     icon                 Icon name (see ICONS in site.js, e.g. "target", "palette")
     short                One line shown on cards
     featured             true = also shown in the small preview on the home page
     metaDescription      Search-engine description for the page
     intro                Short introduction at the top of the page
     approach             "My Approach" paragraph
     includes             List of services/tasks ("What This Skill Includes")
     workflow             Steps: { title, text }
     tools                Tools you really use for this skill
     portfolioCategories  Categories from portfolio-data.js to show as examples.
                          Leave [] to show an editable placeholder instead.
     cta                  Button text on the call-to-action

   Keep this honest: only list tools and services you can genuinely deliver.
   ===================================================================== */

window.SKILLS = [
  {
    slug: "social-media-strategy",
    number: "01",
    title: "Social Media Strategy",
    icon: "target",
    short: "Clear goals, audience and direction for your social media presence.",
    featured: true,
    metaDescription: "Social media strategy by Md Nahid: business goals, audience research, content strategy and growth planning for small and growing brands.",
    intro: "A strong social media presence starts with knowing what it needs to achieve. I turn your business goals into a simple, practical strategy that guides what you post, who you speak to and how you measure progress.",
    approach: "I start with your business, not with trends. I look at your goals, your customers and what you can realistically keep up with, then build a strategy that is simple enough to follow every week. The aim is a clear direction your whole content plan can rely on.",
    includes: [
      "Business goals and social media objectives",
      "Target audience research",
      "Content strategy development",
      "Brand awareness and engagement planning",
      "Social media growth planning"
    ],
    workflow: [
      { title: "Understand your business", text: "Learn about your products or services, goals and current social media presence." },
      { title: "Define your audience", text: "Describe who you want to reach and what matters to them." },
      { title: "Shape the content direction", text: "Choose the topics, formats and tone that fit your brand and goals." },
      { title: "Plan the next steps", text: "Turn the strategy into a clear, practical growth plan you can follow." }
    ],
    tools: ["Google Sheets", "Meta Business Suite"],
    portfolioCategories: [],
    cta: "Discuss Your Project"
  },
  {
    slug: "content-planning",
    number: "02",
    title: "Content Planning & Calendar",
    icon: "calendar-days",
    short: "7, 14 and 30-day content calendars that remove the guesswork.",
    featured: true,
    metaDescription: "Content planning and calendar creation by Md Nahid: 7, 14 and 30-day social media content calendars with content pillars and approval workflow.",
    intro: "Consistent posting is easier when the plan is already made. I create clear content calendars that organize your ideas, formats and publishing dates, so every post has a purpose.",
    approach: "I plan around a few strong content pillars instead of random post ideas. Each calendar balances education, promotion and engagement, and is shared with you for approval before anything is scheduled, so you always stay in control.",
    includes: [
      "7-day, 14-day, and 30-day content calendars",
      "Content pillars and topic planning",
      "Post scheduling plans",
      "Content objectives and post strategy",
      "Client approval workflow"
    ],
    workflow: [
      { title: "Set content pillars", text: "Decide the main themes your content will return to." },
      { title: "Build the calendar", text: "Place post ideas, formats and dates into a 7, 14 or 30-day plan." },
      { title: "Share for approval", text: "Send the plan for your feedback and make changes where needed." },
      { title: "Prepare for scheduling", text: "Finalize the approved plan so content can be created and scheduled." }
    ],
    tools: ["Google Sheets", "Microsoft Excel"],
    portfolioCategories: ["Content Calendars"],
    cta: "Discuss Your Project"
  },
  {
    slug: "canva-design",
    number: "03",
    title: "Content Creation & Canva Design",
    icon: "palette",
    short: "Clean, on-brand post, carousel and story designs made in Canva.",
    featured: true,
    metaDescription: "Social media design by Md Nahid: Instagram posts, carousels, Facebook graphics and promotional creatives designed in Canva.",
    intro: "Good design helps your message get noticed and keeps your feed looking consistent. I create clean, readable social media graphics that match your brand.",
    approach: "I keep designs simple, clear and consistent. Every graphic starts from your brand colors, fonts and message, so your posts look like they belong together. Designs are made in Canva, which also means you can edit them later if you wish.",
    includes: [
      "Social media post design",
      "Instagram carousel design",
      "Facebook post graphics",
      "Stories and promotional creatives",
      "Brand consistency and visual presentation"
    ],
    workflow: [
      { title: "Review the brief", text: "Collect your brand assets, message and content goals." },
      { title: "Create the first designs", text: "Design the posts in the right size for each platform." },
      { title: "Refine with feedback", text: "Adjust text, layout and colors until you are happy." },
      { title: "Deliver the files", text: "Share final designs ready to publish or schedule." }
    ],
    tools: ["Canva"],
    portfolioCategories: ["Social Media Designs", "Carousel Posts"],
    cta: "Discuss Your Project"
  },
  {
    slug: "copywriting",
    number: "04",
    title: "Copywriting & Caption Writing",
    icon: "pen-line",
    short: "Hooks, captions and calls to action written for your audience.",
    featured: false,
    metaDescription: "Social media copywriting by Md Nahid: engaging hooks, captions, calls to action and hashtag research.",
    intro: "Words decide whether people stop, read and respond. I write clear, audience-focused captions that sound like your brand and give readers a reason to act.",
    approach: "I write for the reader first. A strong opening line, a clear message and one simple next step make a caption work. I keep your brand voice consistent and use hashtags and keywords that are relevant to your content.",
    includes: [
      "Engaging content hooks",
      "Social media captions",
      "Call-to-action writing",
      "Hashtag and keyword research",
      "Audience-focused content writing"
    ],
    workflow: [
      { title: "Learn your voice", text: "Understand how your brand speaks and who it speaks to." },
      { title: "Write the captions", text: "Draft hooks, captions and calls to action for each planned post." },
      { title: "Add hashtags", text: "Research relevant hashtags and keywords for each topic." },
      { title: "Revise and finalize", text: "Update the copy based on your feedback." }
    ],
    tools: ["Google Sheets", "Meta Business Suite"],
    portfolioCategories: [],
    cta: "Discuss Your Project"
  },
  {
    slug: "social-media-management",
    number: "05",
    title: "Social Media Scheduling & Management",
    icon: "layout-dashboard",
    short: "Organized Facebook and Instagram management with consistent publishing.",
    featured: true,
    metaDescription: "Social media management by Md Nahid: Facebook Page and Instagram management, scheduling, publishing and profile optimization with Meta Business Suite.",
    intro: "A steady posting routine keeps your brand visible. I manage your Facebook Page and Instagram account, schedule approved content and keep your profiles organized and professional.",
    approach: "I work from an agreed plan and publish only approved content. Profiles are kept tidy and up to date, and posts go out on a consistent schedule so you do not have to manage it day to day.",
    includes: [
      "Facebook Page Management",
      "Instagram Account Management",
      "Content scheduling and publishing",
      "Meta Business Suite",
      "Social media profile optimization"
    ],
    workflow: [
      { title: "Review your profiles", text: "Check bio, links, highlights and page information." },
      { title: "Set up the schedule", text: "Load approved content into the publishing schedule." },
      { title: "Publish consistently", text: "Post on the agreed days and times." },
      { title: "Keep things updated", text: "Maintain profiles and adjust the plan as needed." }
    ],
    tools: ["Meta Business Suite", "Facebook", "Instagram"],
    portfolioCategories: [],
    cta: "Discuss Your Project"
  },
  {
    slug: "analytics-reporting",
    number: "06",
    title: "Analytics & Reporting",
    icon: "chart-column",
    short: "Simple reviews of reach, engagement and growth to improve what you post.",
    featured: false,
    metaDescription: "Social media analytics and reporting by Md Nahid: reach, engagement and follower growth reviews and social media audits.",
    intro: "Numbers help you understand what is working. I review your available performance data and explain it in plain language, with practical suggestions for future content.",
    approach: "I focus on a few useful measures, such as reach, engagement and follower growth, instead of overwhelming you with data. Each report ends with clear, realistic next steps based on what the data shows.",
    includes: [
      "Reach and impressions analysis",
      "Engagement analysis",
      "Follower growth tracking",
      "Content performance evaluation",
      "Social media audit and reporting"
    ],
    workflow: [
      { title: "Collect the data", text: "Gather available insights from your accounts." },
      { title: "Review performance", text: "Look at reach, engagement and which content performed best." },
      { title: "Summarize in a report", text: "Present findings clearly in an easy-to-read report." },
      { title: "Suggest improvements", text: "Recommend practical changes for upcoming content." }
    ],
    tools: ["Meta Business Suite", "Google Sheets", "Microsoft Excel"],
    portfolioCategories: [],
    cta: "Discuss Your Project"
  },
  {
    slug: "community-management",
    number: "07",
    title: "Community Management",
    icon: "messages-square",
    short: "Friendly, professional replies and real engagement with your audience.",
    featured: false,
    metaDescription: "Community management by Md Nahid: comment and message management, audience engagement and professional response handling.",
    intro: "People notice how a brand responds. I help you reply to comments and messages in a friendly, professional way and build a positive relationship with your audience.",
    approach: "I reply in your brand's tone, keep answers helpful and short, and pass anything sensitive or unclear to you instead of guessing. The goal is an audience that feels heard.",
    includes: [
      "Comment and message management",
      "Audience engagement",
      "Professional response handling",
      "Community relationship building"
    ],
    workflow: [
      { title: "Agree on tone and rules", text: "Decide how replies should sound and what needs your approval." },
      { title: "Monitor activity", text: "Check comments and messages regularly." },
      { title: "Respond and engage", text: "Reply helpfully and start conversations with your audience." },
      { title: "Flag important items", text: "Pass complaints or special requests to you." }
    ],
    tools: ["Meta Business Suite", "Facebook", "Instagram"],
    portfolioCategories: [],
    cta: "Discuss Your Project"
  },
  {
    slug: "audience-research",
    number: "08",
    title: "Audience & Competitor Research",
    icon: "search",
    short: "Understand your audience, see what others do, and find new content ideas.",
    featured: false,
    metaDescription: "Audience and competitor research by Md Nahid: audience analysis, competitor content research, content gaps and trend research.",
    intro: "Better content comes from understanding who you are speaking to and what others in your space are doing. I research both and turn the findings into clear content opportunities.",
    approach: "I look at your audience and a handful of relevant competitors, note what works and what is missing, and summarize it in a short document you can actually use. The result is ideas that are specific to your brand.",
    includes: [
      "Target audience analysis",
      "Competitor content research",
      "Content gap identification",
      "Trend research",
      "New content opportunities"
    ],
    workflow: [
      { title: "Define the focus", text: "Agree on your audience and the competitors worth studying." },
      { title: "Research the space", text: "Review competitor content and relevant trends." },
      { title: "Find the gaps", text: "Identify topics and formats that are not being used well." },
      { title: "Share the findings", text: "Provide a clear summary with content opportunities." }
    ],
    tools: ["Google Sheets", "Meta Business Suite"],
    portfolioCategories: [],
    cta: "Discuss Your Project"
  },
  {
    slug: "reels-video",
    number: "09",
    title: "Reels & Short-form Video",
    icon: "video",
    short: "Reel ideas, hooks and scripts, plus basic editing for short videos.",
    featured: false,
    metaDescription: "Reels and short-form video support by Md Nahid: reel content planning, hooks, scripts, basic editing, on-screen text and subtitles.",
    intro: "Short videos are a great way to reach new people. I help you plan reel ideas, write hooks and scripts, and prepare simple, clear short-form videos.",
    approach: "I keep videos short and focused on one idea, with a strong first few seconds and readable on-screen text. My video editing is basic, so I focus on simple, clean edits rather than complex production.",
    includes: [
      "Reel content planning",
      "Hook and script development",
      "Basic video editing",
      "On-screen text and subtitles",
      "Short-form content optimization"
    ],
    workflow: [
      { title: "Plan the idea", text: "Choose a topic and a clear goal for each reel." },
      { title: "Write the hook and script", text: "Draft the opening line and the main points." },
      { title: "Edit the video", text: "Do basic edits, add on-screen text and subtitles." },
      { title: "Prepare for posting", text: "Add a caption and finalize the reel for publishing." }
    ],
    // Add your video editing app here if you want it shown, e.g. "CapCut"
    tools: ["Canva"],
    portfolioCategories: ["Reels"],
    cta: "Discuss Your Project"
  },
  {
    slug: "client-management",
    number: "10",
    title: "Client Communication & Project Management",
    icon: "briefcase",
    short: "Clear briefs, organized delivery and professional communication.",
    featured: false,
    metaDescription: "Client communication and project management by Md Nahid: briefing, approvals and revisions, project organization and delivery planning.",
    intro: "Good results depend on clear communication. I keep every project organized, from the first brief to final delivery, so you always know what is happening and what comes next.",
    approach: "I ask the right questions at the start, confirm the scope in writing and keep updates simple and timely. Work is shared for approval before it goes live, and revisions are handled in an organized way.",
    includes: [
      "Client briefing",
      "Content approval and revisions",
      "Project organization",
      "Delivery planning",
      "Professional client communication"
    ],
    workflow: [
      { title: "Brief", text: "Gather your needs, goals and expectations." },
      { title: "Plan the delivery", text: "Agree on deliverables, timing and how work is shared." },
      { title: "Share and revise", text: "Send work for approval and apply your feedback." },
      { title: "Deliver and follow up", text: "Hand over the final work and check everything is clear." }
    ],
    tools: ["Google Sheets", "Fiverr", "Email"],
    portfolioCategories: [],
    cta: "Discuss Your Project"
  }
];
