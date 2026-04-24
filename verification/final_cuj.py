from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    print("Navigating to Dining page...")
    page.goto("http://localhost:3000/dining")
    page.wait_for_timeout(1000)

    # Take hero screenshot
    page.screenshot(path="/home/jules/verification/screenshots/dining_hero.png")
    print("Hero screenshot taken.")

    # Scroll to Chef's Table
    print("Scrolling to Chef's Table...")
    chefs_table = page.get_by_text("The Chef's Table")
    chefs_table.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)

    # Interaction: Hover over images
    print("Interacting with images...")
    images = page.locator("section img")
    # The first 3 images are Hero and Atmosphere, the next 3 are Chef's Table
    for i in range(2, 5):
        images.nth(i).hover()
        page.wait_for_timeout(800)

    page.screenshot(path="/home/jules/verification/screenshots/dining_chefs_table.png")

    # Scroll to In-Room Dining
    print("Scrolling to In-Room Dining...")
    in_room = page.get_by_text("In-Room Dining")
    in_room.scroll_into_view_if_needed()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/dining_in_room.png")

    # Mobile Menu check (simulating resize)
    print("Checking mobile menu...")
    page.set_viewport_size({"width": 390, "height": 844})
    page.wait_for_timeout(1000)

    menu_button = page.locator("nav button").last # Usually the hamburger
    menu_button.click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/mobile_menu.png")

    print("CUJ completed.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
