import urllib.request
import json

url = "https://api.github.com/repos/maksumsindet/portofolio/actions/runs?per_page=10"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode())
    for r in data.get("workflow_runs", []):
        print(f"Run ID: {r['id']}, Name: {r['name']}, Status: {r['status']}, Conclusion: {r['conclusion']}, SHA: {r['head_sha'][:7]}")
