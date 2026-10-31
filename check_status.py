import urllib.request
import json

def check(repo):
    url = f"https://api.github.com/repos/maksumsindet/{repo}/actions/runs?per_page=3"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
            print(f"=== {repo} runs ===")
            for r in data.get("workflow_runs", []):
                print(f"  {r['name']}: status={r['status']}, conclusion={r['conclusion']}, sha={r['head_sha'][:7]}, title={r['head_commit']['message'][:40]}")
    except Exception as e:
        print(f"Error {repo}: {e}")

check("portofolio")
check("agrialert")
