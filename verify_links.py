import os
from playwright.sync_api import sync_playwright

def verify_pages():
    pages = ["index.html", "suites.html", "wellness.html", "dining.html", "experiences.html", "gallery.html"]

    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context()

        for page_name in pages:
            page = context.new_page()
            path = os.path.abspath(page_name)
            page.goto(f"file://{path}")

            title = page.title()
            print(f"Verified {page_name}: Title is '{title}'")

            # Check if navigation links are present
            links = page.query_selector_all("nav a")
            if len(links) > 0:
                print(f"  Found {len(links)} navigation links in {page_name}")
            else:
                print(f"  Warning: No navigation links found in {page_name}")

            page.close()

        browser.close()

if __name__ == "__main__":
    verify_pages()
