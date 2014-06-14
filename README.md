clindsey/marvelSearch - [view the demo](http://clindsey.github.io/marvelSearch/)

Requirements
---
* Marvel developer account key [https://developer.marvel.com/account]
* Add your domain to your Marvel developer account's accepted referrer's list

Dependencies
---
* git
* npm and node

Local Dev
---
Add your Marvel developer account key [https://developer.marvel.com/account]
* `cp app/config_example.coffee app/config.coffee`
* edit `app/config.coffee` and add your own Marvel `apiKey`

Install npm and bower packages:
* `make install`

Start the local development server:
* `make live`

Run the tests in the browser:
* `open http://localhost:8080/test/unit/`

Run it with Docker
---
Add api key to config:
* `cp app/config.example.coffee app/config.coffee`
* `edit app/config.coffee`

Build a container:
* `sudo docker build -t marvelSearch .`

Run the container:
* `sudo docker run -d -p 8080:8080 marvelSearch`

Visit the app:
* `open http://localhost:8080/`

Stop the container:
* `sudo docker ps` (find the Container ID)
* `sudo docker stop <first few characters of Container ID>`

Testing
---
Work in progress, will be adding actual unit tests soon. Will have coverage testings also.
