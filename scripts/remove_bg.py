import os
import sys
from PIL import Image
import rembg

def main():
    input_path = r"C:\Users\Muhammad Dahron\.gemini\antigravity\brain\986810fd-40b9-44c2-b4f2-741fef2f06fc\.user_uploaded\media_1793414884021_309f8279.jpg"
    output_dir = r"d:\Kuliah\Magang\Web\Web Maksum\public\assets\images"
    output_png = os.path.join(output_dir, "profile-hero-transparent.png")
    output_webp = os.path.join(output_dir, "profile-hero-transparent.webp")

    print(f"Loading input image: {input_path}")
    img = Image.open(input_path)
    print(f"Image format: {img.format}, size: {img.size}, mode: {img.mode}")

    print("Initializing u2net_human_seg session...")
    session = rembg.new_session("u2net_human_seg")

    print("Executing background removal (with post-process)...")
    result = rembg.remove(
        img,
        session=session,
        post_process_mask=True
    )

    print("Saving transparent PNG...")
    result.save(output_png, "PNG", optimize=True)

    print("Saving transparent WebP...")
    result.save(output_webp, "WEBP", quality=95)

    print(f"Success! Output PNG size: {os.path.getsize(output_png):,} bytes")
    print(f"Output WebP size: {os.path.getsize(output_webp):,} bytes")

if __name__ == "__main__":
    main()
