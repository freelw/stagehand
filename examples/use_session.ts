import dotenv from "dotenv";
dotenv.config();

import { Stagehand } from "@browserbasehq/stagehand";

(async () => {
	// Initialize Stagehand
    const stagehand = new Stagehand({
      env: "BROWSERBASE",
      // env : "LOCAL",
      apiKey: process.env.BROWSERBASE_API_KEY,
      projectId: process.env.BROWSERBASE_PROJECT_ID!,
      browserbaseSessionID:'df4d0629-3903-48a0-aa14-15d3f9ff9ae5',
	});
	await stagehand.init();
	const page = stagehand.page;
	await page.goto("https://bilibili.com");
	// await stagehand.close();
})().catch((error) => console.error(error.message));