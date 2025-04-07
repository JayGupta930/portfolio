class PortfolioKnowledge {
  constructor() {
    this.knowledge = [
      {
        keywords: ['hi', 'hello', 'hey'],
        response: "Hello! I'm your portfolio assistant. How can I help you today?"
      },
      {
        keywords: ['project', 'projects', 'work'],
        response: "I can tell you about various projects in this portfolio. Would you like to know about specific technologies or types of projects?"
      },
      {
        keywords: ['skills', 'technologies', 'tech stack'],
        response: "The portfolio showcases expertise in React, JavaScript, Node.js, and modern web development practices. Which technology would you like to know more about?"
      },
      {
        keywords: ['contact', 'email', 'reach'],
        response: "You can reach out through the contact form or directly via email. Would you like the contact information?"
      }
    ];
  }

  getResponse(input) {
    const lowerInput = input.toLowerCase();
    for (const item of this.knowledge) {
      if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
        return item.response;
      }
    }
    return "I'm not sure about that. Could you rephrase your question or ask about projects, skills, or contact information?";
  }
}

export const portfolioKnowledge = new PortfolioKnowledge();
