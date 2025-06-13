"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { X, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function ChatbotWidget() {
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [dots, setDots] = useState(1);

	const { messages, input, setInput, append } = useChat({
		initialMessages: [
			{
				id: "initial-message",
				role: "assistant",
				content: "Hi, I'm here to assist you in getting to know Ardhika more efficiently."
			}
		]
	});

	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((d) => (d === 3 ? 1 : d + 1));
		}, 500);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [messages, isLoading]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!input.trim()) return;

		setIsLoading(true);
		await append({ content: input, role: "user" });
		setInput("");
		setIsLoading(false);
	};

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-muted flex items-center justify-center shadow-lg z-50 md:z-99 hover:bg-muted/80 transition-colors duration-200">
					🤖
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
				<Dialog.Content
					className="fixed w-full h-full top-0 rounded-none md:top-20 md:bottom-20 md:right-4 md:w-[22rem] md:max-h-[75vh] md:rounded-lg bg-primary-foreground shadow-xl flex flex-col z-99 md:z-50"
					aria-describedby="chatbot-dialog">
					<div className="flex items-center justify-between p-3">
						<Dialog.Title className="text-lg font-semibold">Chatbot</Dialog.Title>
						<Dialog.Close asChild>
							<button className="text-gray-500 hover:text-gray-700">
								<X size={16} />
							</button>
						</Dialog.Close>
					</div>

					<div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-2 space-y-6 text-sm">
						{messages.map((m) => (
							<div key={m.id} className={`${m.role === "user" ? "ml-auto" : "mr-auto"}`}>
								{typeof m.content === "string" ? (
									<>
										<h3
											className={`font-semibold ${
												m.role === "user" ? "text-right" : "text-left"
											} mb-2`}>
											{m.role === "user" ? "You" : "Assistant"}
										</h3>
										<div
											className={`text-sm p-2 rounded bg-secondary ${
												m.role === "user" ? "text-right" : "text-left"
											} flex flex-col gap-4`}>
											<ReactMarkdown>{m.content}</ReactMarkdown>
										</div>
									</>
								) : (
									(m.content as Array<{ type: string; text?: string }>).map((part, index) =>
										part.type === "text" ? <div key={index}>{part.text}</div> : null
									)
								)}
							</div>
						))}
						{isLoading && (
							<div className="p-2 rounded bg-secondary text-left mr-auto w-fit">
								<div className="flex items-center gap-2">
									<Loader2 className="animate-spin w-4 h-4" />
									<span>{`Loading${".".repeat(dots)}`}</span>
								</div>
							</div>
						)}
					</div>

					<form className="p-3 border-t flex gap-2" onSubmit={handleSubmit}>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="flex-1 rounded px-2 py-1 text-sm"
							placeholder="Ask me about anything related to him"
							disabled={isLoading}
						/>
						<button type="submit" className="px-3 py-1 rounded text-sm" disabled={isLoading}>
							{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Send"}
						</button>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
