interface PhaseInfo {
  name: string;
  description: string;
  objectives: string[];
}

export const phaseData: Record<string, PhaseInfo> = {
  SETTLING_IN: {
    name: "Settling In",
    description: "Welcome to San Francisco! As a new founder in the city, you'll need to establish your routine, set up your workspace, and lay the groundwork for your startup journey. Your initial decisions will shape both your personal well-being and your company's foundation.",
    objectives: [
      "Establish a healthy work-life routine",
      "Set up your initial workspace",
      "Begin networking in the SF tech scene",
      "Validate your initial business concept",
      "Build foundational skills for the journey ahead"
    ]
  },
  IDEATION: {
    name: "Ideation Phase",
    description: "Time to transform your idea into reality. This crucial phase is about validating your concept, building your initial prototype, and gathering feedback from potential users. Your ability to iterate and adapt will be key to finding product-market fit.",
    objectives: [
      "Develop and validate your MVP",
      "Gather meaningful user feedback",
      "Build initial customer relationships",
      "Refine your product vision",
      "Start building a founding team"
    ]
  },
  BOOTSTRAPPING: {
    name: "Bootstrapping Phase",
    description: "With your MVP showing promise, it's time to turn it into a real business. You'll need to make every dollar count while building a product that users love. This phase tests your ability to grow with limited resources.",
    objectives: [
      "Achieve sustainable user growth",
      "Establish initial revenue streams",
      "Build a core team",
      "Optimize product-market fit",
      "Create efficient operational processes"
    ]
  },
  FUNDRAISING: {
    name: "Fundraising Phase",
    description: "Your startup has proven its potential, and now it's time to raise capital for growth. You'll navigate the complex world of venture capital, pitch to investors, and prepare your company for rapid scaling.",
    objectives: [
      "Perfect your pitch deck",
      "Build relationships with investors",
      "Secure seed funding",
      "Develop a scaling strategy",
      "Prepare company infrastructure for growth"
    ]
  },
  SCALING: {
    name: "Scaling Phase",
    description: "With funding secured and a proven model, it's time to accelerate growth. This phase is about expanding your team, entering new markets, and establishing your company as a significant player in the industry.",
    objectives: [
      "Expand into new markets",
      "Build a world-class team",
      "Optimize operations for scale",
      "Establish market leadership",
      "Maintain culture during rapid growth"
    ]
  }
}; 