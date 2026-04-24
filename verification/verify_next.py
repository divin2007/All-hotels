import asyncio
import os
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Desktop
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        # Next.js app running locally on port 3000
        url = "http://localhost:3000/dining"

        try:
            await page.goto(url)
            await page.wait_for_timeout(3000)

            # Screenshot Sections
            os.makedirs('verification/screenshots_next', exist_ok=True)
            await page.screenshot(path='verification/screenshots_next/desktop_dining.png')

            # Check for key elements
            h1_text = await page.inner_text('h1')
            print(f"H1 Text: {h1_text}")

            # Mobile
            context = await browser.new_context(**p.devices['iPhone 12'])
            mobile_page = await context.new_page()
            await mobile_page.goto(url)
            await mobile_page.wait_for_timeout(3000)
            await mobile_page.screenshot(path='verification/screenshots_next/mobile_dining.png')

            # Check for mobile menu button
            # In our Next.js app, we use a lucide-react Menu icon which renders as an svg
            menu_btn = await mobile_page.is_visible('button.md\\:hidden')
            print(f"Mobile menu button visible: {menu_btn}")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
