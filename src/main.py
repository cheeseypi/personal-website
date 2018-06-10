import json

from jinja2 import FileSystemLoader, Environment

COMPILE_LOCATION = "../docs/"

templateLoader = FileSystemLoader(searchpath="./templates")
templateEnv = Environment(loader=templateLoader)
template = templateEnv.get_template("base.html")

with open("content.json", "r") as cont:
    info = json.load(cont)

links = info['links']

content = info['content']
for page, details in content.items():
    with open(COMPILE_LOCATION+page+".html", "w+") as newPage:
        newPage.write(template.render(links=links, content=details))
