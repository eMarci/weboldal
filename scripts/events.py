import json
import requests

def main():
    api_key = "EAAVGbiFIyVMBO4qGWeSZBvZAATIsngfwOlri3iW9GrDOxXaY2xb8F7AzEI1ynXVGKDpuZCcAuGBXDtQ9RscS79reyjXNHDflM1Ytdmt8yqb1qzFrvQ4kXvpAZAZAKrnncZC9oQinu66SVKhSZBizjE1jlxEhSAhycoVQthJNuA789wrTfREZAnteE0ILwdIMwZCUsZCgc34aM5U2j6lUgZD"

    URL = "https://graph.facebook.com/112998758567158?fields=events{name,description,start_time,attending_count,cover}&access_token=" + api_key
    response = requests.get(URL, stream=True)

    data = ""

    for c in response.iter_content():
        data += c.decode()

    with open("events.json", "w+", encoding="utf-8") as file:
        file.write(json.dumps(json.loads(data), indent=4))

if __name__ == "__main__":
    main()