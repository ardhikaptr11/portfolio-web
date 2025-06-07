"use client";

import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function DevToolsDetector() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const isMobile = window.innerWidth < 1024;

		if (isMobile) return;

		let devtoolsOpen = false;
		const threshold = 160;

		const checkDevTools = () => {
			const widthThreshold = window.outerWidth - window.innerWidth > threshold;
			const heightThreshold = window.outerHeight - window.innerHeight > threshold;

			if (widthThreshold || heightThreshold) {
				if (!devtoolsOpen) {
					devtoolsOpen = true;
					setOpen(true);
				}
			} else {
				devtoolsOpen = false;
			}
		};

		const interval = setInterval(checkDevTools, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const handleContextMenu = (e: MouseEvent) => {
			e.preventDefault();
			setOpen(true);
		};
		document.addEventListener("contextmenu", handleContextMenu);
		return () => {
			document.removeEventListener("contextmenu", handleContextMenu);
		};
	}, []);

	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
				e.preventDefault();
				setOpen(true);
			}
		};
		document.addEventListener("keydown", handleKeydown);
		return () => {
			document.removeEventListener("keydown", handleKeydown);
		};
	}, []);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader className="flex flex-col justify-center gap-2">
					<div className="flex flex-col justify-center items-center gap-1">
						<AlertTriangle className="size-15" />
						<DialogTitle>Access Denied</DialogTitle>
					</div>
					<DialogDescription className="text-center">
						Please refrain from inspecting or modifying this page for security reasons.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
