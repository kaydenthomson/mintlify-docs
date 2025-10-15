# Writing Style Guidelines for Product Documentation

This document outlines the writing style guidelines for creating clear, consistent, and user-friendly product documentation. These rules are designed for AI agents to produce high-quality content that empowers users to understand and use the product effectively.

## 1. Purpose and Audience

- **Purpose**: Create documentation that informs, guides, and troubleshoots, enabling users to succeed with minimal friction.
- **Audience**: Target users from beginners to advanced, ensuring accessibility for novices and depth for experts.

## 2. Tone and Voice

- **Tone**: Friendly, professional, and approachable, like a knowledgeable colleague.
- **Voice**: Active, confident, and direct (e.g., “Click **Save**” instead of “The Save button should be clicked”).
- **Empathy**: Acknowledge user challenges (e.g., “If you’re seeing an error, try this…”).
- **Inclusivity**: Use gender-neutral language (e.g., “they” instead of “he/she”) and avoid idioms or culture-specific references.

## 3. Clarity and Conciseness

- **Clarity**: Use simple, precise language. Define jargon on first use (e.g., “API: Application Programming Interface”).
- **Conciseness**: Eliminate unnecessary words (e.g., “Click **Save** to start” instead of “In order to begin, click the Save button”).
- **Sentence Length**: Keep sentences to 15–20 words max. Break complex ideas into multiple sentences or lists.
- **Specificity**: Avoid vague terms (e.g., “Enter your email address” instead of “Enter your details”).

## 4. Structure and Organization

- **Logical Flow**: Structure content to follow the user’s journey (e.g., setup → usage → troubleshooting).
- **Headings**: Use descriptive headings in sentence case (e.g., “Configuring Your Account”).
- **Chunking**: Divide content into small, focused sections, each covering one task or concept.
- **Lists**: Use bulleted lists for options/features and numbered lists for steps.
- **Tables**: Use for comparisons or structured data (e.g., feature plans).
- **Cross-References**: Link to related sections (e.g., “See [Troubleshooting](#troubleshooting)”).

## 5. Formatting and Style

- **Consistency**: Use consistent terms (e.g., always “log in,” not “login” or “sign in”).
- **Typography**:
  - **Bold** for UI elements (e.g., “Click **Save**”).
  - `Code` for commands, code snippets, or file names (e.g., “Run `npm install`”).
  - _Italics_ for emphasis, used sparingly (e.g., “This _must_ be enabled”).
- **Capitalization**: Use sentence case for headings (e.g., “How to reset your password”).
- **Punctuation**:
  - Use serial commas (e.g., “red, blue, and green”).
  - Avoid exclamation points except for critical warnings.
- **Numbers**: Write 1–9 as words in narrative text, 10+ as numerals. Use numerals in technical contexts (e.g., “Enter 5 users”).

## 6. Instructional Writing

- **Action-Oriented**: Start steps with verbs (e.g., “Download the file”).
- **Step-by-Step**: Use numbered lists for sequential tasks, with one action per step.
- **Context**: Provide brief context before steps (e.g., “To share your project, follow these steps:”).
- **Results**: State outcomes (e.g., “After clicking **Save**, the settings page refreshes”).
- **Visuals**: Include annotated screenshots or diagrams when they clarify steps. Add descriptive alt text (e.g., “Screenshot of dashboard with Save button highlighted”).

## 7. Error Handling and Troubleshooting

- **Anticipate Issues**: Include sections for common errors or FAQs.
- **Clear Solutions**: Provide specific steps (e.g., “For ‘Error 404,’ check your URL”).
- **Error Messages**: Quote errors exactly and explain their meaning.

## 8. Accessibility

- **Plain Language**: Use simple words for non-native speakers and screen readers (e.g., “Find” instead of “Locate”).
- **Alt Text**: Provide descriptive alt text for images.
- **Color Contrast**: Ensure visuals are readable for all users.
- **Avoid Directional Language**: Pair visual cues with labels (e.g., “Click **Save**” instead of “Click the button on the right”).

## 9. Code and Technical Content

- **Code Blocks**: Use syntax highlighting and specify language (e.g., ```python).
- **Comments**: Add comments to explain code purpose (e.g., `# Connect to database`).
- **Examples**: Provide practical, real-world examples.
- **Versioning**: Note product versions (e.g., “Available in v2.1+”).

## 10. Global and Cultural Considerations

- **Localization**: Avoid idioms or slang (e.g., “Click to begin” instead of “Hit the ground running”).
- **Units**: Use metric or include both metric/imperial (e.g., “5 km (3.1 miles)”).
- **Date Formats**: Use unambiguous formats (e.g., “13 October 2025”).

## 11. Example Phrasing

- **Good**: “To reset your password, go to **Settings > Account > Reset Password** and follow the prompts.”
- **Bad**: “Password reset is available in the settings menu.”
- **Good**: “If the app crashes, restart your device and try again.”
- **Bad**: “Application failure may require a device restart.”

## 12. Prohibited Practices

- **No Humor**: Avoid humor, as it may confuse or alienate users.
- **No Assumptions**: Define technical terms unless specified otherwise.
- **No Overloading**: Cover one task per section unless clearly separated.
- **No Vague Terms**: Avoid “stuff,” “things,” or “etc.”

## 13. AI-Specific Guidelines

- **Prompt Consistency**: Reference a glossary for consistent terminology.
- **Context Awareness**: Adjust complexity based on user expertise (e.g., simpler for beginners).
- **Error Recovery**: Ask clarifying questions for unclear queries (e.g., “Which feature do you mean?”).
- **Dynamic Updates**: Pull from real-time changelogs or FAQs for accuracy.

## 14. Implementation for AI Agents

- **Style Sheet**: Store guidelines in JSON/YAML for reference.
- **Training**: Provide sample inputs/outputs aligned with these rules.
- **Glossary**: Maintain a term database (e.g., “log in” vs. “login”).
- **Feedback**: Enable users to flag unclear content for AI improvement.
- **Prompts**: Use prompts like: “Write a concise, user-friendly guide for [task] using active voice, numbered steps, and clear headings.”

## Example: Logging In to the Product

### Log In to Your Account

To access your account, follow these steps:

1. Go to the **Login** page at `https://app.example.com/login`.
2. Enter your **email address** and **password** in the provided fields.
3. Click **Log In**.
   - If successful, you’ll see the dashboard.
   - If you see “Invalid Credentials,” verify your email and password or reset your password (see [Resetting Your Password](#reset-password)).

**Note**: If using two-factor authentication, enter the code from your authenticator app.
