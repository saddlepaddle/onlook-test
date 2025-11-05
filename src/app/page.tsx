import Link from "next/link";
import { Suspense } from "react";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
	const hello = await api.post.hello({ text: "from tRPC" });

	void api.post.getLatest.prefetch();

	return (
		<HydrateClient>
			<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
					<div className="space-y-6 text-center">
						<h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
							Welcome Home
						</h1>
						<p className="text-xl text-slate-300">
							{hello.greeting}
						</p>
						<p className="max-w-2xl text-lg text-slate-400">
							Build amazing applications with modern technologies and real-time capabilities.
						</p>
					</div>

					<div className="grid gap-8 sm:grid-cols-2 w-full max-w-2xl">
						<div className="rounded-lg bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 transition-colors">
							<h3 className="font-semibold text-white mb-2">📚 Learn More</h3>
							<p className="text-slate-300 text-sm">
								Discover documentation and examples to accelerate your development.
							</p>
						</div>
					</div>

					<Link
						href="https://t3.gg"
						className="rounded-lg bg-white px-8 py-3 font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
					>
						Explore T3 Stack
					</Link>

					<Suspense fallback={<p className="text-slate-400">Loading posts...</p>}>
						<LatestPost />
					</Suspense>

					<div className="rounded-lg bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 transition-colors">
						<h3 className="font-semibold text-white mb-2">🚀 Get Started</h3>
						<p className="text-slate-300 text-sm">
							Explore the latest features and create your first project.
						</p>
					</div>

					<div className="rounded-lg bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 transition-colors">
						<h3 className="font-semibold text-white mb-2">🚀 Get Started</h3>
						<p className="text-slate-300 text-sm">
							Explore the latest features and create your first project.
						</p>
					</div>

					<div className="rounded-lg bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 transition-colors">
						<h3 className="font-semibold text-white mb-2">🚀 Get Started</h3>
						<p className="text-slate-300 text-sm">
							Explore the latest features and create your first project.
						</p>
					</div>

					<div className="rounded-lg bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 transition-colors">
						<h3 className="font-semibold text-white mb-2">🚀 Get Started</h3>
						<p className="text-slate-300 text-sm">
							Explore the latest features and create your first project.
						</p>
					</div>

					<div className="rounded-lg bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 transition-colors">
						<h3 className="font-semibold text-white mb-2">🚀 Get Started</h3>
						<p className="text-slate-300 text-sm">
							Explore the latest features and create your first project.
						</p>
					</div>

					<div className="rounded-lg bg-slate-800 p-6 border border-slate-700 hover:border-slate-600 transition-colors">
						<h3 className="font-semibold text-white mb-2">🚀 Get Started</h3>
						<p className="text-slate-300 text-sm">
							Explore the latest features and create your first project.
						</p>
					</div>
				</div>
			</main>
		</HydrateClient>
	);
}
