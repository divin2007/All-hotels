import asyncio
from playwright.async_api import async_playwright
import os

async def verify_cuj():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        screenshot_dir = os.path.join(os.getcwd(), 'verification', 'screenshots')
        os.makedirs(screenshot_dir, exist_ok=True)

        try:
            print("Navigating to http://localhost:3000/dining")
            await page.goto('http://localhost:3000/dining', wait_until='networkidle')

            # 1. Verify Header
            header = page.locator('h1')
            await asyncio.sleep(1)
            await page.screenshot(path=os.path.join(screenshot_dir, 'cuj_hero.png'))

            # 2. Scroll to Chef's Table and verify hover
            chefs_table = page.locator('text=The Chef\'s Table')
            await chefs_table.scroll_into_view_if_needed()
            await asyncio.sleep(1)

            first_image = page.locator('section img').nth(2) # Third image on page is first in Chef's Table grid
            await first_image.hover()
            await asyncio.sleep(1)
            await page.screenshot(path=os.path.join(screenshot_dir, 'cuj_hover_effect.png'))

            print("CUJ Verification completed. Screenshots saved.")

        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_cuj())
