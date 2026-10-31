import json
import re

def main():
    json_path = r"d:\Kuliah\Magang\Web\Web Maksum\scripts\generated_gallery.json"
    data_path = r"d:\Kuliah\Magang\Web\Web Maksum\src\data\portfolioData.ts"
    
    with open(json_path, "r", encoding="utf-8") as f:
        items = json.load(f)
        
    print(f"Loaded {len(items)} items from JSON.")
    
    ts_lines = ["export const documentaryPhotos: DocumentaryPhoto[] = ["]
    for it in items:
        ts_lines.append("  {")
        ts_lines.append(f"    src: {json.dumps(it['src'])},")
        ts_lines.append(f"    alt: {json.dumps(it['alt'])},")
        ts_lines.append(f"    caption: {json.dumps(it['caption'])},")
        ts_lines.append(f"    category: {json.dumps(it['category'])},")
        ts_lines.append(f"    tag: {json.dumps(it['tag'])},")
        ts_lines.append(f"    source: {json.dumps(it['source'])}")
        ts_lines.append("  },")
    ts_lines.append("];")
    
    new_doc_photos = "\n".join(ts_lines)
    
    with open(data_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Find start
    start_tag = "export const documentaryPhotos: DocumentaryPhoto[] = ["
    start_idx = content.find(start_tag)
    if start_idx == -1:
        print("Error: start_tag not found")
        return
        
    # Find the closing ];
    end_tag = "];\n\nexport const galleryEmbeds"
    end_tag_crlf = "];\r\n\r\nexport const galleryEmbeds"
    
    end_idx = content.find(end_tag, start_idx)
    if end_idx == -1:
        end_idx = content.find(end_tag_crlf, start_idx)
        
    if end_idx == -1:
        print("Error: end_tag not found")
        return
        
    updated_content = content[:start_idx] + new_doc_photos + "\n\n" + content[end_idx + (len(end_tag_crlf) - len("export const galleryEmbeds")):]
    
    with open(data_path, "w", encoding="utf-8") as f:
        f.write(updated_content)
        
    print("Success: portfolioData.ts updated with all 101 photos!")

if __name__ == "__main__":
    main()
