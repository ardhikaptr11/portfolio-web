import { streamText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { NextRequest } from "next/server";
import { z } from "zod";

import { ABOUT_ME, PROJECTS, SKILLS, EXPERIENCES_DATA } from "@/lib/data";

const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
});

const systemPrompt = `
    You are a helpful AI assistant for ${ABOUT_ME.name}'s personal portfolio website. Answer all questions based on the following content:

    About Me:
    ${ABOUT_ME.bio}

    Experience:
    ${EXPERIENCES_DATA.map(
        (exp) =>
          `- **${exp.title}** (${exp.date})\n` +
          `  *Location:* ${exp.location}\n` +
          `${exp.descriptions.map((desc) => `  - ${desc}`).join("\n")}` +
          (exp.url ? `\n  [View Certificate](${exp.url})` : "")
      ).join("\n\n")}

    Skills:
    ${SKILLS.map(
        (skill) => `- **${skill.name}**\nLevel of expertise: ${skill.level}%`
      ).join("\n\n")}

    Projects:
    ${PROJECTS.map(
        (project) =>
          `- **${project.title}**: ${project.description} ` +
          `[${project.demoUrl ? "View Demo" : "View Repo"}](${project.demoUrl || project.githubUrl})\n` +
          `Tech stacks: _${project.tags.join(", ")}_`
      ).join("\n\n")}

    Contact:
    - Email: putucrisna11@gmail.com or You can instruct user to use email contact form at the bottom of the page.
    - LinkedIn: [ardhikaptr11](https://linkedin.com/in/ardhikaptr11)
    - WhatsApp: [+62 822-3444-1918](https://wa.me/6282234441918)
    - Telegram: [@ardhikaptr11](https://t.me/ardhikaptr11)

    CV:
    - You can say: "You can download my CV from the top section of this site or [click here](#cv)."

    Improvisation is allowed, but never make up facts. Always respond based on the content above in a clear, concise, and descriptive manner.
`

export async function POST(req: NextRequest) {
    const { messages } = z
        .object({
            messages: z.array(
                z.object({
                    role: z.enum(["user", "assistant"]),
                    content: z.string(),
                })
            ),
        })
        .parse(await req.json());

    const response = streamText({
        model: openrouter("deepseek-ai/DeepSeek-R1"),
        messages: [
            {
                role: "system",
                content: systemPrompt,
            },
            ...messages,
        ],
    })

    return new Response(response.toDataStream(), {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      });
}