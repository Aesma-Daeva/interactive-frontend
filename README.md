# Map and Weather API
## Interactive Frontend Project
This is a single page application (SPA) made by combining Google Map and OpenWeatherMap API. Using Google Map API, users can search for a city they want to visit; find attractions, hotels, bars, restaurants, stores, and bus or tram stations. The OpenWeatherMap API provides information about the current weather and temperature at the city the user searched.

Link for deployed site: [Map and Weather API](https://aesma-daeva.github.io/map-weather-api/ "Map and Weather API")

This is for educational purposes only and not intended for commercial use.

---

# UX

I wanted a colorful SPA that will inspire users to go on adventure but also practical to use. So I decided to include a weather API along with providing information they would typically need to get around unfamiliar places.

In this SPA, users will be able to do the following:

* Users that want to travel can search for a city they want to visit;

* Once they choose a city they will be able to search for:
    * Accommodation - Hotels, B&B, Hostels
    * Attractions - Museums and Galleries
    * Bars, Pubs and Coffee Shops
    * Restaurants
    * Stores
    * Public Transportations - Bus Stops and Tram Stations
* User can also draw on the map to make their custom routes, markers or highlight areas they want to remember.
* Users can also see the temperature for that city right at the current time they searched.
* Users will also see the weather for that city at that specific time.
    
Update for weather and temperature is every 2 hours. Don't worry, the weather forecast is reliable and accurate. :relaxed:

Link to [Map and Weather API  Wireframe](https://github.com/Aesma-Daeva/map-weather-api/blob/master/wireframe/map-weather-api-wireframe.pdf "Map and Weather API Wireframe")

---

### User Stories

1. User wants to search for a place to visit. The page asks user to type a city. User types a country, google map shows a dropdown list of places that have the keyword of places with that country name. User gets options of places mostly in the USA. User really needs to type a specific city to get accurate results.
2. User types a particular city. User pressed enter key, nothing happened. User clicks on the drop down list and chose a city, user immediately sees map markers on the map showing accommodations and a table that shows a list that the user can click.
3. User clicks one of the hotels shown on the table. User can see a marker bouncing on the map. User knows that's the exact location of that hotel.
4. User can also click on the map marker and it will also show an info window.
5. User can see an info window with the hotel website, address, telephone number and rating for that place. This will all show in the info window if that information is available.
6. User can click the website link and it will immediately open on google maps app if using the SPA on mobile or tablet OS. If user is viewing the SPA in a desktop or laptop, it will open on a new browser window.
7. If user clicks on a bouncing marker, it will stop bouncing. If each marker is clicked just once, it will just keep bouncing.
8. Once the user types a city, the user can choose markers to show by clicking on the dropdown menu. User can choose accommodations, attractions, bars, restaurants, stores or transportation.
9. User typed a city but there was no markers showing on the map if the user search for accommodations, bars, stores etc. This means there is no establishment like that on that particular place. User will see a pop up window (modal) that will show a message saying, "Sorry! No result was found for this request." and then user needs to click "Close" button to close the window. User can also see the same message on table where marker results show if there were anything to show. This lets the user know there is no information to show about that type of establishment.
10. User moves the map. The markers don't automatically pop up. The user needs to click the dropdown menu again to show new markers for the information they want to see.
11. User can see Google Map Drawing controls. User clicks "Add a marker" and puts it on the map to remember that location.
12. User also see other drawing control and click "Draw a line" to connect the map marker and the lines. User made a route to follow and took a screenshot using their mobile phone.
13. User clicked "Draw a Shape" on the drawing controls. User clicked "Attractions" and made markers of places that user wants to visit. User used "Draw a Shape" to mark the vicinity of places to visit. User then takes a screenshot using their mobile phone to save the information.
14. User searched for a new place. All drawing markers are gone.
15. User searched for "Stores" then clicked "Draw a circle" on the drawing controls to highlight the store location.
16. User then click "Draw a Line" on drawing controls  to mark a route to take to get to the store location.
17. User also clicked "Draw a Rectangle" to mark the whole area between the store and other areas that the user wanted to mark on the map.
18. User clicks the "Show Weather" button. User can see an icon for the current weather, a short description and the temperature.
19. User searched for a city, clicked "Show Weather" button but there was no information about weather in that city. The user will see this message instead, "Weather Status: Unpredictable! The weather information is still brewing for that place."

---

## Features

### Existing Features:

![Jumbotron with Quote](http://i67.tinypic.com/2cwmrh5.jpg "Jumbotron Image with a Quote")

* The top of the page has a colorful map image with the quote, "Not all those who wander are lost..." - from a poem by Tolkien, "All That is Gold Does Not Glitter".
* The quote has a text animation that makes the word "lost" disappear. I did not set the animation to repeat indefinitely because some might find it annoying. I just wanted something to catch their attention.
* At the footer are links to social media sites and other relevant webpages.
* There is a "Scroll to Top" button at the lower right corner with an arrow sign so users don't have to keep scrolling up again which is great to use on mobile view.

#### Map Features

* On the top left is the search field where the user can type a city and click one of the options google map shows on the vertical menu that it generates.
* Next, there is a dropdown list where the user can click and select one of the following:

    <details>
        <summary>6 different types of establishments</summary>
         <p>1. Accommodations</p>
         <p>2. Attractions</p>
         <p>3. Bars</p>
         <p>4. Restaurants</p>
         <p>5. Stores</p>
         <p>6. Transportations</p>
    </details>


* Then by default setting based on first selection from the dropdown menu, the markers on the map for Accommodation will do an animation drop and populate the map with marker locations.
* There will also be a table of results that will show a list of names for the markers on the map so the user can either click on the marker or the name of the establishment.
* The marker has an information window that the user can click to show more information about the establishment.
* The information window can show the name of the establishment, website, address, telephone number and customer rating.
* The establishment name can be clicked and it will open directly on Google Maps app or open in a new browser window if the user is using a desktop or laptop.
* Each establishment has custom icons that will show the type of establishment that the user chose.
    * Accommodation  ![Bed Icon](http://i65.tinypic.com/nefbmh.png "Bed Icon")
    * Attractions ![Camera Icon](http://i68.tinypic.com/vggso.png "Camera Icon")
    * Bar ![Martini Glass Icon](http://i66.tinypic.com/1z4zri8.png "Martini Glass Icon")
    * Restaurant ![Cutlery Icon](http://i67.tinypic.com/6itptu.png "Cutlery Icon")
    * Store ![Shopping Cart Icon](http://i65.tinypic.com/1zc1r1e.png "Shopping Cart Icon")
    * Transportation ![Bus Icon](http://i66.tinypic.com/30kqetd.png "Bus Icon")
    
* The icons for markers also have 6 different colors designated for each type of establishment.

    <details>
        <summary>Custom Icon Colors</summary>
        <p>1. Accommodation - Blue - #0099ff</p>
        <p>2. Attractions - SpringGreen - #00ff8e</p>
        <p>3. Bar - SlateBlue - #8900ff</p>
        <p>4. Restaurant - Yellow - #ffea00</p>
        <p>5. Store - Red - #ff3555</p>
        <p>6. Transportation - Orange - #ffb200</p>
    </details>

* The map can be moved and the user will need to select one of the options for establishments again  to generate new map markers. I did not set the markers to  auto-populate because I did not want to interrupt the user while using the google map in case the user might still be reading the info window, using the Google Map Drawing tool to make routes or just familiarising with the map's vicinity/landmarks.
* The map marker bounces when clicked so the user can see its exact location in case there are other overlapping markers.
* The bouncing marker can be turned off by clicking on the same marker again.
* If all markers are just clicked once, they will all continue to bounce.
* There is also a table of results that gets generated in case the map marker that the user wants to click is overlapped by other markers, the user can still see information about that marker by clicking on the name of the establishment on the table list generated.
* The map can be zoomed in.
* The pegman can be dropped for Google Street View.
* Satellite imagery is also enabled and labels can be turned off.
* Toggle full screen view is also enabled.
* If there is no result for establishment, there is a custom pop up message that will tell the user that there are no results for their query. The user needs to click the "x" or "Close" button to close the modal. The same message will also show in the results table.

    "Sorry! No result was found for this request."
* Google Map Drawing is also enabled so user can draw their own route, add their own marker, highlight certain areas they want to remember and print it or take a screenshot of it.
* The drawing controls will enable the user to add markers, draw a circle, draw a shape, draw a line, draw a rectangle and to also stop drawing.
* The drawing will clear once the user chooses a different place.
* There are no built-in screenshot key to press. The user needs to use their mobile phone's screenshot functionality to take a screenshot.

#### Weather Features

* There is a "Show Weather" button and once the user clicks it, it shows the weather icon, short weather description and temperature for that city.
* If there is no weather data to show, there is a custom message that will show and fade out after 4 seconds. Custom message:

    "Weather Status: Unpredictable! The weather information is still brewing for that place."

### Features Left to Implement

* Make a map version using LeafletJS
* Add images using Unsplash API
* Add wind speed information to weather API
* Figure out a way to make the enter key work when a user types a place

---

## Technologies Used

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5 "HTML5") is the markup language used for rendering the website.
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3 "CSS3") is the style sheet language used to style the HTML elements and website.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript") is the programming language used for Google Map API; creating DOM elements for the map and weather API; HTML event handlers and for making the website interactive.
* [JQuery](https://jquery.com/ "JQuery") is the JS library used for displaying the data for weather API and Ajax to get JSON data.
* [Bootstrap 4 ](https://getbootstrap.com/ "Bootstrap 4") is the framework used for the mobile responsiveness and grid layout of the SPA; I also used its pre-made components - jumbotron, input form, select form, buttons, modal and their utility classes for styling, sizing and alignments.
* [Font Awesome](https://fontawesome.com/ "Font Awesome") is used for the footer social media and website icons. Also for the scroll up button icon.
* [Google Places API](https://developers.google.com/places/web-service/intro "Google Places API") for the map functionality
* [OpenWeatherMap API](https://openweathermap.org/api "OpenWeatherMap API") for the weather information and JSON data
* [Github](https://github.com/) for deploying my project :octocat:
* [Animista](http://animista.net/ "Animista") for CSS text animation

---

## Testing

1. HTML5 Validator found an error about the weather icon image source attribute because there is no src attribute and links to the img element. I can not put a default link because the links dynamically change depending on the weather query. This was purposefully omitted on the HTML part because I use jQuery to push the src attribute to the img tag.

    [Img Src Error](http://i65.tinypic.com/2hpn79f.jpg "Img Src Error")

2. Another error HTML5 Validator found was not having an alt attribute. I purposefully omitted this because it will always show on the page by default because weather icon only gets generated once the user clicks the "Show Weather" button.

    [Img Alt Error](http://i68.tinypic.com/21kfjm8.jpg "Img Alt Error")

    To remedy that issue, I created a noIcon.js. In case the weather API has no icon  to show, that will generate a custom error message saying, "The icon has gone with the wind."
    
    The source of both errors in HTML5:
    
    `<img class="weatherIcon" onerror="noIcon()">`
    
    How the icon link gets generated:
    
    `var weatherIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";`
    
    How the icon gets created as a DOM element:
    
    `$(".weatherIcon").attr("src", weatherIcon).fadeIn(2000);`

3. CSS3 Validator passed

    [CSS3 Validation](http://i65.tinypic.com/zmcbiq.jpg "CSS3 Validation")

4. I ran all scripts at JSHint and these are the results:

    [Map JSHint](http://i68.tinypic.com/2el5nko.jpg)
    
    [Weather JSHint](http://oi68.tinypic.com/14bi2kp.jpg)
    
    [getDate JSHint](http://oi64.tinypic.com/2wq4aom.jpg)
    
    [scrollUp JSHint](http://oi67.tinypic.com/30shmaw.jpg)
    
    [noIcon JSHint](http://oi65.tinypic.com/2by5ci.jpg)
    
5. The SPA is responsive on popular mobile devices. The layout of the SPA is the same for desktop view and tablet devices.
    
#### Manual Testing

1. I typed a country on the text input field. I can see a dropdown list that's automatically generated by Google Places API. 
    
    1. I click one of the city listed and it automatically populates markers for accommodations.
    2. I can also see table list with hotel names.
    3. I can click the map marker and it bounces.
    4. Then I can see an info window that has information about hotel name, address, telephone, customer rating and website information. If those information is not available then I don't see it in the info window.
    5. I can also click on one of the hotel names listed on the table and it also shows an info window on the map. It's great to use when there's other markers overlapping each other. The bounce animation helps me see which one I clicked.
    6. I click on the dropdown list and I can see it show the accurate markers for the type of establishment that I chose.
    7. The appropriate icon is shown as well when I select attractions, bars, restaurants, stores or transportation.
    8. When I choose an option in the dropdown list but there's no establishment like that in the area, I can see a pop up message (modal) that tells me, "Sorry! No result was found for this request."
    9. I get to drag the map, read street signs, read establishment names and I get to find my bearings without any markers auto-populating. I like that it is not a distraction and if there's a particular establishment type I want to search, then I get to populate new markers as needed.
    10. I can add a marker on the map to remember establishments that I want to visit. 
    11. I can draw a line to make a route that I want to take.
    12. I can also draw a circle, a shape or a rectangle to highlight the area that I need to remember.
    13. I can click stop drawing and continue to pan and zoom the marker and check the map. The drawings will still be there.
    14. I can take a screenshot and save that area of the map that I wanted to highlight.
    15. When I search for a new city, the map drawings are gone.
    16. On the top left I can switch to satellite view and hide labels.
    17. I can also switch to terrain view when I choose map.
    18. I can drop the pegman and see street view.

2. I click "Show Weather" button and I can see the weather icon, weather description and temperature.

3. I typed "Dubai" on text field input and clicked "Show Weather" button and it gave me a message, "Weather Status: Unpredictable! The weather information is still brewing for that place."

4. I click on the footer icons and each one opens to a new browser window.

5. I click on the arrow button at the lower right corner and the browser scrolls up.

#### Issues I Encountered:

1. Sometimes, the map will return zero results if there are no establishment of a certain type in the area that the user searched for. There could be no bars or tourist attractions, etc. The map displays no marker because there's nothing to show on the map.

    [DevTools Console Map API Zero Result](http://i63.tinypic.com/rkoeol.jpg)

    My solution was to make a modal and show a message on the result table so the user knows that there's no information to show. If map query returns zero results, the user will see this message, “Sorry! No result was found for this request.”
    
    [Google Map Zero Result Custom Message](http://oi64.tinypic.com/34g8thd.jpg)

2. While testing the weather API I found 2 places that shows an error stating "404 Not Found". If user will type Dubai or Riyadh and click the 1st result option generated by google map API then click the "Show Weather Button" to show weather information, it does not show anything. These 2 places will return a "404 Not Found" in DevTools console.

    [Place Query Selector](http://i63.tinypic.com/nd35gy.jpg)
    
    [DevTools Console 404 Not Found](http://i63.tinypic.com/znacmd.jpg)
    
    If the user just types "Riyadh" in text field input and then clicks "Show Weather" button, it does display the right weather. This is a conflict I found between using weather API and google API.
    
    [Weather API Successful Query](http://oi67.tinypic.com/ke989v.jpg)
    
    My solution was to place a custom error message so the user knows that something happened when they click the "Show Weather" button and they will know that there's no weather information to show. They will see this custom message:
    
    “Weather Status: Unpredictable! The weather information is still brewing for that place.”
    
    I am not sure what other place or city would return a "404 Not Found" result from weather API so I reckon it is best to have a custom error message shown so user is aware there's no information about it.
    
    [Weather API Custom Error Message](http://oi64.tinypic.com/jsewzn.jpg)
    
3. When user searches for a place on the text input field and presses the enter key, nothing happens. It does not add markers on the map. The user really needs to choose from the drop down list that google generates. I tried solutions from here [Solution](https://stackoverflow.com/questions/7865446/google-maps-places-api-v3-autocomplete-select-first-option-on-enter) & [Another Solution](https://stackoverflow.com/questions/14601655/google-places-autocomplete-pick-first-result-on-enter-key?rq=1) but none of them worked either.

---

## Deployment

* This is deployed on Github. You can clone or download the repository from this [link](https://github.com/Aesma-Daeva/map-weather-api).

* There are no differences between deployed version and development version.

* Currently, there are no other branches but in the future, there will be a separate branch for rendering the map using LeafletJS.

* Once you have downloaded all the files, open index.html and update this with your own API Key:

    `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY&libraries=places,drawing&callback=initMap" async></script>`

* Once you have created a project and have an API Key, enable Places API and Maps JavaScript API in your Google Cloud Platform Console.

    Read this: [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) to get your google API key. Warning! Google requires credit card information to get an API Key. 

* Open weather.js and update this with your own App ID

    `$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=metric&appid=YOUR-OWN-APP-ID")`

    Go here: [OpenWeatherMap API](https://openweathermap.org/api) to get a free App ID for the weather API. Just make an account and you'll get an API key  for free if you stay within the calls per minute limit.

That's all you need to change to get this up and running. :sunglasses:

---

## Credits

### Media

* [Jumbotron Image](https://threadtripping.boardingarea.com/wp-content/uploads/2015/01/3121199491_e935b03f0b_b.jpg)
* [Results Table Image](https://i.pinimg.com/474x/f7/5b/c7/f75bc7279146aecb06ff74b7133b654b--iphone-wallpaper-wanderlust.jpg)

### Icons

* [Map Icon](https://www.flaticon.com/free-icon/map_854878)
* [Drawing Marker](https://www.flaticon.com/free-icon/navigation_709892#term=map%20marker&page=2&position=82)
* [Accommodation](https://www.flaticon.com/free-icon/sleeping-bed-silhouette_8652)
* [Attractions](https://www.flaticon.com/free-icon/photo_93182)
* [Bar](https://www.freepik.com/free-icon/cocktail-drink-wine-glass_736515.htm)
* [Restaurant](https://www.flaticon.com/free-icon/cutlery_1690025)
* [Store](https://www.flaticon.com/free-icon/shopping-cart_2772#term=store&page=1&position=12)
* [Transportation](https://www.flaticon.com/free-icon/front-bus_60741)

### Footer Icons

* [Github](https://fontawesome.com/icons/github?style=brands)
* [LinkedIn](https://fontawesome.com/icons/linkedin?style=brands)
* [Facebook](https://fontawesome.com/icons/facebook-square?style=brands)
* [Twitter](https://fontawesome.com/icons/twitter?style=brands)
* [Scroll Up Arrow](https://fontawesome.com/icons/arrow-circle-up?style=solid)

### Other Sites Used

* [HTML5 Validator](https://validator.w3.org/)
* [CSS3 Validator](https://jigsaw.w3.org/css-validator/)
* [JSHint](https://jshint.com/)
* [MDn Web Docs](https://developer.mozilla.org/en-US/)
* [Stackoverflow](https://stackoverflow.com/)
* [W3Schools](https://www.w3schools.com/)
* [Slack](https://slack.com/)
* [Github for Modal Issue](https://github.com/twbs/bootstrap/issues/24054)
* [TinyPic for uploading images](http://tinypic.com/)

---

## Acknowledgements

Thank you to:

* [Code Institute](https://codeinstitute.net/) - My school for the comprehensive modules and the fun projects that tests our coding skills.

* Code Institute's Student Care Team that's always ready to help and encourage students. They have been a great support. :blush:

* My Mentor - Chris Zielinski for providing clarity and guidance when I'm feeling stuck. :muscle:

* To everyone else's brains I've picked that helped me with this project - My hubby, Sean, Simen, Tim and Anna.
Thanks for taking the time to review my project and giving me constructive feedback. :relieved: :beers: