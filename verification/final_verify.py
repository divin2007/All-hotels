import asyncio
import os
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Desktop
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        # Use relative path via os.path.abspath
        index_path = f"file://{os.path.abspath('index.html')}"
        await page.goto(index_path)
        await page.wait_for_timeout(3000)

        # Screenshot Sections
        os.makedirs('verification/screenshots', exist_ok=True)
        await page.screenshot(path='verification/screenshots/desktop_home.png')
        await page.locator('#reservations').scroll_into_view_if_needed()
        await page.wait_for_timeout(1000)
        await page.screenshot(path='verification/screenshots/desktop_booking.png')

        # Mobile
        context = await browser.new_context(**p.devices['iPhone 12'])
        mobile_page = await context.new_page()
        await mobile_page.goto(index_path)
        await mobile_page.wait_for_timeout(3000)
        await mobile_page.screenshot(path='verification/screenshots/mobile_home.png')

        # Check for mobile menu button visibility
        menu_btn = await mobile_page.is_visible('#mobile-menu-toggle')
        print(f"Mobile menu button visible: {menu_btn}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
