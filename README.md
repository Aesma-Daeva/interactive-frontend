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
* Users can also see the temperature for that city right at the current time they searched.
* Users will also see the weather for that city at that specific time.
    
Update for weather and temperature is every 2 hours. Don't worry, the weather forecast is reliable and accurate. :relaxed:

Link to [Map and Weather API  Wireframe](https://github.com/Aesma-Daeva/map-weather-api/blob/master/wireframe/map-weather-api-wireframe.pdf "Map and Weather API Wireframe")

---

### User Stories

1. User wants to search for a place to visit. The page asks user to type a city. User types a country, google map shows a dropdown list of places that have the keyword of places with that country name. User gets options of places mostly in the USA. User really needs to type a specific city to get accurate results.
2. User types a particular city. User immediately sees map markers on the map showing accommodations and a table that shows a list that the user can click.
3. User clicks one of the hotels shown on the table. User can see a marker bouncing on the map. User knows that's the exact location of that hotel.
4. User can also click on the map marker and it will also show an info window.
5. User can see an info window with the hotel website, address, telephone number and rating for that place. This will all show in the info window if that information is available.
6. User can click the website link and it will immediately open on google maps app if using the SPA on mobile or tablet OS. If user is viewing the SPA in a desktop or laptop, it will open on a new browser window.
7. If user clicks on a bouncing marker, it will stop bouncing. If each marker is clicked just once, it will just keep bouncing.
8. Once the user types a city, the user can choose markers to show by clicking on the dropdown menu. User can choose accommodations, attractions, bars, restaurants, stores or transportation.
9. User typed a city but there was no markers showing on the map if the user search for accommodations, bars, stores etc. This means there is no establishment like that on that particular place. User will see a pop up window (modal) that will show a message saying, "Sorry! No result was found for this request." and then user needs to click "Close" button to close the window. User can also see the same message on table where marker results show if there were anything to show. This lets the user know there is no information to show about that type of establishment.
10. User moves the map. The markers don't automatically pop up. The user needs to click the dropdown menu again to show new markers for the information they want to see.
11. User clicks the "Show Weather" button. User can see an icon for the current weather, a short description and the temperature.
12. User searched for a city, clicked "Show Weather" button but there was no information about weather in that city. The user will see this message instead, "Weather Status: Unpredictable! The weather information is still brewing for that place."

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

* The map can be moved and the user will need to select one of the options for establishments again  to generate new map markers. I did not set the markers to  auto-populate because I did not want to interrupt the user while using the google map in case the user might still be reading the info window or just familiarising with the map's vicinity/landmarks.
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

#### Weather Features

* There is a "Show Weather" button and once the user clicks it, it shows the weather icon, short weather description and temperature for that city.
* If there is no weather data to show, there is a custom message that will show and fade out after 4 seconds. Custom message:

    "Weather Status: Unpredictable! The weather information is still brewing for that place."

### Features Left to Implement

* Make a map version using LeafletJS
* Add images using Unsplash API
* Add wind speed information to weather API

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

---

## Testing

* HTML5 Validator found an error about the weather icon image source attribute because there is no src attribute and links to the img element. I can not put a default link because the links dynamically change depending on the weather query. This was purposefully omitted on the HTML part because I use jQuery to push the src attribute to the img tag.

    [Img Src Error](http://i65.tinypic.com/2hpn79f.jpg "Img Src Error")

* Another error HTML5 Validator found was not having an alt attribute. I purposefully omitted this because it will always show on the page by default because weather icon only gets generated once the user clicks the "Show Weather" button.

    [Img Alt Error](http://i68.tinypic.com/21kfjm8.jpg "Img Alt Error")

    To remedy that issue, I created a noIcon.js. In case the weather API has no icon  to show, that will generate a custom error message saying, "The icon has gone with the wind."
    
    The source of both errors in HTML5:
    
    `<img class="weatherIcon" onerror="noIcon()">`
    
    How the icon link gets generated:
    
    `var weatherIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";`
    
    How the icon gets created as a DOM element:
    
    `$(".weatherIcon").attr("src", weatherIcon).fadeIn(2000);`

* CSS3 Validator passed

    [CSS3 Validation](http://i65.tinypic.com/zmcbiq.jpg "CSS3 Validation")

I ran all scripts at JSHint and these are the results:

[Map JSHint](http://i68.tinypic.com/2el5nko.jpg)

[Weather JSHint](http://i68.tinypic.com/14bi2kp.jpg)

[getDate JSHint](http://i64.tinypic.com/2wq4aom.jpg)

[scrollUp JSHint](http://i67.tinypic.com/30shmaw.jpg)

[noIcon JSHint](http://i65.tinypic.com/2by5ci.jpg)

#### Issues I Encountered:

* Sometimes, the map will return zero results if there are no establishment of a certain type in the area that the user searched for. There could be no bars or tourist attractions, etc. The map displays no marker because there's nothing to show on the map.

    [DevTools Console Map API Zero Result](http://i63.tinypic.com/rkoeol.jpg)

    My solution was to make a modal and show a message on the result table so the user knows that there's no information to show. If map query returns zero results, the user will see this message, “Sorry! No result was found for this request.”
    
    [Google Map Zero Result Custom Message](http://i64.tinypic.com/34g8thd.jpg)

* While testing the weather API I found 2 places that shows an error stating "404 Not Found". If user will type Dubai or Riyadh and click the 1st result option generated by google map API then click the "Show Weather Button" to show weather information, it does not show anything. These 2 places will return a "404 Not Found" in DevTools console.

    [Place Query Selector](http://i63.tinypic.com/nd35gy.jpg)
    
    [DevTools Console 404 Not Found](http://tinypic.com/view.php?pic=znacmd&s=9)
    
    If the user just types "Riyadh" in text field input and then clicks "Show Weather" button, it does display the right weather. This is a conflict I found between using weather API and google API.
    
    [Weather API Successful Query](http://i67.tinypic.com/ke989v.jpg)
    
    My solution was to place a custom error message so the user knows that something happened when they click the "Show Weather" button and they will know that there's no weather information to show. They will see this custom message:
    
    “Weather Status: Unpredictable! The weather information is still brewing for that place.”
    
    I am not sure what other place or city would return a "404 Not Found" result from weather API so it is best to have a custom error message shown so user is aware there's no information about it.
    
    [Weather API Custom Error Message](http://i64.tinypic.com/jsewzn.jpg)
    





