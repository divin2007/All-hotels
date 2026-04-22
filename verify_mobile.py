import asyncio
from playwright.async_api import async_playwright

async def verify_mobile():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # iPhone 12 Pro Max
        device = p.devices['iPhone 12 Pro Max']
        context = await browser.new_context(**device)
        page = await context.new_page()

        # Load local server (assuming it's running, or just open file)
        # To be safe, we'll open the file directly since we're in the same dir
        import os
        path = f"file://{os.getcwd()}/index.html"

        await page.goto(path)
        await page.wait_for_timeout(2000)

        # Take screenshot of hero
        await page.screenshot(path='/home/jules/verification/screenshots/mobile_home.png')

        # Scroll to reservations
        await page.locator('#reservations').scroll_into_view_if_needed()
        await page.wait_for_timeout(2000)
        await page.screenshot(path='/home/jules/verification/screenshots/mobile_booking.png')

        # Open mobile menu if it exists (it should be hidden by default in desktop)
        # Note: I didn't explicitly implement a burger menu toggle JS yet,
        # let's see how the header looks.

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_mobile())
