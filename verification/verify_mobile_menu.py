import asyncio
from playwright.async_api import async_playwright
import os

async def verify_mobile_menu():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # iPhone 12 Pro viewport
        context = await browser.new_context(
            viewport={'width': 390, 'height': 844},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'
        )
        page = await context.new_page()

        # Use relative path for screenshots
        screenshot_dir = os.path.join(os.getcwd(), 'verification', 'screenshots')
        os.makedirs(screenshot_dir, exist_ok=True)

        try:
            print("Navigating to http://localhost:3000/dining")
            await page.goto('http://localhost:3000/dining', wait_until='networkidle')

            # Wait for any animation
            await asyncio.sleep(2)

            # Find the mobile menu button.
            menu_button = page.locator('nav button.md\\:hidden')

            is_visible = await menu_button.is_visible()
            if not is_visible:
                menu_button = page.locator('button:has(svg)').first

            print("Clicking menu button...")
            await menu_button.click()

            # Wait for overlay
            await asyncio.sleep(1)

            # Capture screenshot of open menu
            await page.screenshot(path=os.path.join(screenshot_dir, 'mobile_menu_open.png'))
            print(f"Screenshot saved to {os.path.join(screenshot_dir, 'mobile_menu_open.png')}")

            # Verify menu content
            suites_link = page.locator('div.fixed.inset-0 a:has-text("Suites")')
            if await suites_link.is_visible():
                print("Mobile menu is open and contains links.")
            else:
                print("Mobile menu links not found.")

        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_mobile_menu())
