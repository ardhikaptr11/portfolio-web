"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { X, Loader2 } from "lucide-react";

export function ChatbotWidget() {
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { messages, input, setInput, append } = useChat();

	const scrollRef = useRef<HTMLDivElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!input.trim()) return;

		setIsLoading(true);
		await append({ content: input, role: "user" });
		setInput("");
		setIsLoading(false);
	};

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-50 hover:bg-blue-700 transition">
					🤖
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
				<Dialog.Content className="fixed bottom-20 right-4 w-[22rem] max-h-[75vh] rounded-lg bg-white shadow-xl flex flex-col z-50">
					<div className="flex items-center justify-between p-3 border-b">
						<Dialog.Title className="text-lg font-semibold">Chatbot</Dialog.Title>
						<Dialog.Close asChild>
							<button className="text-gray-500 hover:text-gray-700">
								<X size={16} />
							</button>
						</Dialog.Close>
					</div>

					<div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
						{messages.map((m) => (
							<div
								key={m.id}
								className={`p-2 rounded ${
									m.role === "user"
										? "bg-background text-right ml-auto max-w-[85%]"
										: "bg-background text-left mr-auto max-w-[85%]"
								}`}>
								{m.content}
							</div>
						))}
						{isLoading && (
							<div className="p-2 rounded bg-muted text-left mr-auto max-w-[85%] italic text-gray-500">
								Typing...
							</div>
						)}
					</div>

					<form className="p-3 border-t flex gap-2" onSubmit={handleSubmit}>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className="flex-1 border rounded px-2 py-1 text-sm"
							placeholder="Ask me anything about Ardhika"
							disabled={isLoading}
						/>
						<button
							type="submit"
							className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
							disabled={isLoading}>
							{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Send"}
						</button>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
