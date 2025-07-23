import dotenv from "dotenv";
dotenv.config();

import { Stagehand } from "@browserbasehq/stagehand";

(async () => {
	// Initialize Stagehand
    const stagehand = new Stagehand({
      env: "BROWSERBASE",
      // env : "LOCAL",
      apiKey: process.env.BROWSERBASE_API_KEY,
      projectId: process.env.BROWSERBASE_PROJECT_ID!
	});
	await stagehand.init();
	const page = stagehand.page;
	await page.goto("https://docs.browserbase.com");
	await stagehand.close();
})().catch((error) => console.error(error.message));