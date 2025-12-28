from playwright.sync_api import sync_playwright
import json

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        iphone_12 = p.devices['iPhone 12']
        context = browser.new_context(**iphone_12)
        page = context.new_page()

        try:
            print("Navigating to blog post...")
            # Ensure we are hitting the preview server port
            page.goto("http://localhost:4173/blog/solana-meme-coin-guide")
            page.wait_for_load_state("networkidle")

            # --- 1. Verify Padding ---
            # Use the specific header container class structure
            blog_header = page.locator("header.relative").first
            padding_top = blog_header.evaluate("el => getComputedStyle(el).paddingTop")
            print(f"Header Padding Top: {padding_top}")

            # --- 2. Verify Schema ---
            scripts = page.locator('script[type="application/ld+json"]').all()
            found_faq = False
            found_article = False

            print(f"Found {len(scripts)} JSON-LD scripts.")
            for s in scripts:
                content = s.text_content()
                try:
                    data = json.loads(content)
                    if isinstance(data, list):
                        for item in data:
                            if item.get('@type') == 'FAQPage': found_faq = True
                            if item.get('@type') == 'BlogPosting': found_article = True
                    else:
                        if data.get('@type') == 'FAQPage': found_faq = True
                        if data.get('@type') == 'BlogPosting': found_article = True
                except:
                    pass

            if found_faq: print("✅ FAQPage Schema found.")
            else: print("❌ FAQPage Schema NOT found.")

            if found_article: print("✅ BlogPosting Schema found.")
            else: print("❌ BlogPosting Schema NOT found.")

            # --- 3. Verify Hero Image ---
            # Try to find the featured image which should be an Unsplash URL
            images = page.locator("img").all()
            unsplash_found = False
            for img in images:
                src = img.get_attribute("src")
                if src and "images.unsplash.com" in src:
                    print(f"✅ Found Unsplash Image: {src[:50]}...")
                    unsplash_found = True
                    break

            if not unsplash_found:
                 print("⚠️ No Unsplash image found (Hero image might be missing).")

            # Screenshot
            page.screenshot(path="verification/mobile_final.png")
            print("Captured mobile_final.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_changes()
