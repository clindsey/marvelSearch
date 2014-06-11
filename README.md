Dependencies
---
* git
* npm and node

Local Dev
---
Install npm and bower packages:
`make install`

Add your Marvel developer account key [https://developer.marvel.com/account]
copy `app/config.example.coffee` to `app/config.coffee`
edit `app/config.coffee` and add your own Marvel `apiKey`

Start the local development server:
`make live`

Run the tests in the browser:
`open http://localhost:8080/test/unit/`

Run it with Docker
---
Build a container:
`sudo docker build -t <your username>/marvelSearch .`

Run the container:
`sudo docker run -d -p 8080:8080 <your username>/marvelSearch`
`open http://localhost:8080/`

Stop the container:
`sudo docker ps` (find the Container ID)
`sudo docker stop <first few characters of Container ID>`
