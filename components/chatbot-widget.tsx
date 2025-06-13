"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useChat } from "ai/react";
import { X } from "lucide-react";

export function ChatbotWidget() {
	const [open, setOpen] = useState(false);
	const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-50 hover:bg-blue-700 transition">
					💬
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
				<Dialog.Content className="fixed bottom-20 right-4 w-[22rem] max-h-[75vh] rounded-lg bg-white shadow-xl flex flex-col z-50">
					<div className="flex items-center justify-between p-3 border-b">
						<h2 className="font-semibold text-sm">Ask Me Anything</h2>
						<Dialog.Close asChild>
							<button className="text-gray-500 hover:text-gray-700">
								<X size={16} />
							</button>
						</Dialog.Close>
					</div>

					<div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
						{messages.map((m) => (
							<div
								key={m.id}
								className={`p-2 rounded ${
									m.role === "user"
										? "bg-blue-100 text-right ml-auto max-w-[85%]"
										: "bg-gray-100 text-left mr-auto max-w-[85%]"
								}`}>
								{m.content}
							</div>
						))}
					</div>

					<form onSubmit={handleSubmit} className="p-3 border-t flex gap-2">
						<input
							value={input}
							onChange={handleInputChange}
							className="flex-1 border rounded px-2 py-1 text-sm"
							placeholder="Tanyakan sesuatu..."
							disabled={isLoading}
						/>
						<button
							type="submit"
							className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
							disabled={isLoading}>
							Kirim
						</button>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
