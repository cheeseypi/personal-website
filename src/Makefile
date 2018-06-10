all: clean compile test

clean:
	rm ../docs/index.html
	rm ../docs/contact.html
	rm ../docs/projects.html
	rm ../docs/style.css

compile:
	python main.py
	sass style.sass ../docs/style.css

test:
	cd ../docs; \
	python -m http.server
