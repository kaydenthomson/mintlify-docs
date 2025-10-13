# Mintlify documentation

## Working relationship

- You can push back on ideas-this can lead to better documentation. Cite sources and explain your reasoning when you do so
- ALWAYS ask for clarification rather than making assumptions
- NEVER lie, guess, or make up information

## Project context

- Format: MDX files with YAML frontmatter
- Config: docs.json for navigation, theme, settings
- Components: Mintlify components

## Content strategy

- Document just enough for user success - not too much, not too little
- Prioritize accuracy and usability of information
- Make content evergreen when possible
- Search for existing information before adding new content. Avoid duplication unless it is done for a strategic reason
- Check existing patterns for consistency
- Start by making the smallest reasonable changes

## Frontmatter requirements for pages

- title: Clear, descriptive page title
- description: Concise summary for SEO/navigation

## Writing standards

- Second-person voice ("you")
- Prerequisites at start of procedural content
- Test all code examples before publishing
- Match style and formatting of existing pages
- Include both basic and advanced use cases
- Language tags on all code blocks
- Alt text on all images
- Relative paths for internal links

## Git workflow

- NEVER use --no-verify when committing
- Ask how to handle uncommitted changes before starting
- Create a new branch when no clear branch exists for changes
- Commit frequently throughout development
- NEVER skip or disable pre-commit hooks

## Do not

- Skip frontmatter on any MDX file
- Use absolute URLs for internal links
- Include untested code examples
- Make assumptions - always ask for clarification

Writing Style Guidelines for Product Documentation
This document outlines the writing style guidelines for creating clear, consistent, and user-friendly product documentation. These rules are designed for AI agents to produce high-quality content that empowers users to understand and use the product effectively.

1. Purpose and Audience

Purpose: Create documentation that informs, guides, and troubleshoots, enabling users to succeed with minimal friction.
Audience: Target users from beginners to advanced, ensuring accessibility for novices and depth for experts.

2. Tone and Voice

Tone: Friendly, professional, and approachable, like a knowledgeable colleague.
Voice: Active, confident, and direct (e.g., “Click Save” instead of “The Save button should be clicked”).
Empathy: Acknowledge user challenges (e.g., “If you’re seeing an error, try this…”).
Inclusivity: Use gender-neutral language (e.g., “they” instead of “he/she”) and avoid idioms or culture-specific references.

3. Clarity and Conciseness

Clarity: Use simple, precise language. Define jargon on first use (e.g., “API: Application Programming Interface”).
Conciseness: Eliminate unnecessary words (e.g., “Click Save to start” instead of “In order to begin, click the Save button”).
Sentence Length: Keep sentences to 15–20 words max. Break complex ideas into multiple sentences or lists.
Specificity: Avoid vague terms (e.g., “Enter your email address” instead of “Enter your details”).

4. Structure and Organization

Logical Flow: Structure content to follow the user’s journey (e.g., setup → usage → troubleshooting).
Headings: Use descriptive headings in sentence case (e.g., “Configuring Your Account”).
Chunking: Divide content into small, focused sections, each covering one task or concept.
Lists: Use bulleted lists for options/features and numbered lists for steps.
Tables: Use for comparisons or structured data (e.g., feature plans).
Cross-References: Link to related sections (e.g., “See Troubleshooting”).

5. Formatting and Style

Consistency: Use consistent terms (e.g., always “log in,” not “login” or “sign in”).
Typography:
Bold for UI elements (e.g., “Click Save”).
Code for commands, code snippets, or file names (e.g., “Run npm install”).
Italics for emphasis, used sparingly (e.g., “This must be enabled”).

Capitalization: Use sentence case for headings (e.g., “How to reset your password”).
Punctuation:
Use serial commas (e.g., “red, blue, and green”).
Avoid exclamation points except for critical warnings.

Numbers: Write 1–9 as words in narrative text, 10+ as numerals. Use numerals in technical contexts (e.g., “Enter 5 users”).

6. Instructional Writing

Action-Oriented: Start steps with verbs (e.g., “Download the file”).
Step-by-Step: Use numbered lists for sequential tasks, with one action per step.
Context: Provide brief context before steps (e.g., “To share your project, follow these steps:”).
Results: State outcomes (e.g., “After clicking Save, the settings page refreshes”).
Visuals: Include annotated screenshots or diagrams when they clarify steps. Add descriptive alt text (e.g., “Screenshot of dashboard with Save button highlighted”).

7. Error Handling and Troubleshooting

Anticipate Issues: Include sections for common errors or FAQs.
Clear Solutions: Provide specific steps (e.g., “For ‘Error 404,’ check your URL”).
Error Messages: Quote errors exactly and explain their meaning.

8. Accessibility

Plain Language: Use simple words for non-native speakers and screen readers (e.g., “Find” instead of “Locate”).
Alt Text: Provide descriptive alt text for images.
Color Contrast: Ensure visuals are readable for all users.
Avoid Directional Language: Pair visual cues with labels (e.g., “Click Save” instead of “Click the button on the right”).

9. Code and Technical Content

Code Blocks: Use syntax highlighting and specify language (e.g., ```python).
Comments: Add comments to explain code purpose (e.g., # Connect to database).
Examples: Provide practical, real-world examples.
Versioning: Note product versions (e.g., “Available in v2.1+”).

10. Global and Cultural Considerations

Localization: Avoid idioms or slang (e.g., “Click to begin” instead of “Hit the ground running”).
Units: Use metric or include both metric/imperial (e.g., “5 km (3.1 miles)”).
Date Formats: Use unambiguous formats (e.g., “13 October 2025”).

11. Maintenance and Updates

Version Control: Mark documentation with version or date (e.g., “Last updated: October 2025”).
Feedback Loop: Include a feedback mechanism (e.g., “Was this helpful? Submit feedback”).
Regular Reviews: Flag content for periodic updates.

12. Example Phrasing

Good: “To reset your password, go to Settings > Account > Reset Password and follow the prompts.”
Bad: “Password reset is available in the settings menu.”
Good: “If the app crashes, restart your device and try again.”
Bad: “Application failure may require a device restart.”

13. Prohibited Practices

No Humor: Avoid humor, as it may confuse or alienate users.
No Assumptions: Define technical terms unless specified otherwise.
No Overloading: Cover one task per section unless clearly separated.
No Vague Terms: Avoid “stuff,” “things,” or “etc.”

14. AI-Specific Guidelines

Prompt Consistency: Reference a glossary for consistent terminology.
Context Awareness: Adjust complexity based on user expertise (e.g., simpler for beginners).
Error Recovery: Ask clarifying questions for unclear queries (e.g., “Which feature do you mean?”).
Dynamic Updates: Pull from real-time changelogs or FAQs for accuracy.

15. Implementation for AI Agents

Style Sheet: Store guidelines in JSON/YAML for reference.
Training: Provide sample inputs/outputs aligned with these rules.
Glossary: Maintain a term database (e.g., “log in” vs. “login”).
Feedback: Enable users to flag unclear content for AI improvement.
Prompts: Use prompts like: “Write a concise, user-friendly guide for [task] using active voice, numbered steps, and clear headings.”

16. Inspiration Sources
    These guidelines draw from:

Microsoft Style Guide (clarity and user-centricity).
Google Developer Documentation Style Guide (technical accuracy).
GitLab Documentation Guidelines (actionable steps).
Atlassian Documentation (engaging tone and visuals).

Example: Logging In to the Product
Log In to Your Account
To access your account, follow these steps:

Go to the Login page at https://app.example.com/login.
Enter your email address and password in the provided fields.
Click Log In.
If successful, you’ll see the dashboard.
If you see “Invalid Credentials,” verify your email and password or reset your password (see Resetting Your Password).

Note: If using two-factor authentication, enter the code from your authenticator app.
Last updated: October 2025
