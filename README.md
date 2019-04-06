# Map and Weather API
## Interactive Frontend Project
This is a single page application (SPA) made by combining Google Map and OpenWeatherMap API. Using Google Map API, users can search for a city they want to visit; find attractions, hotels, bars, restaurants, stores, and bus or tram stations. The OpenWeatherMap API provides information about the current weather and temperature at the city the user searched.

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

* The top of the page has a colorful map image with the quote, "Not all those who wander are lost..." - from a poem by Tolkien, "All That is Gold Does Not Glitter".
* The quote has a text animation that makes the word "lost" disappear. I did not set the animation to repeat indefinitely because some might find it annoying. I just wanted something to catch their attention.
* At the footer are links to social media sites and other relevant webpages.
* There is a "Scroll to Top" button at the lower right corner with an arrow sign. So users don't have to keep scrolling up again which is great to use on mobile view.

#### Map Features

* On the top left is the search field where the user can type a city and click one of the options google map shows on the vertical menu that it generates.
* Next, there is a dropdown list where the user can click and select -

    <details>
        <summary>6 different types of establishments:</summary>
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

    <details>
        <summary>Custom Icons</summary>
       <p> 1. Accommodation - Bed Icon</p>
       <p> 2. Attractions - Camera Icon</p>
       <p> 3. Bar - Martini Glass Icon</p>
       <p> 4. Restaurant - Cutlery Icon</p>
       <p> 5. Store - Shopping Cart Icon</p>
       <p> 6. Transportation - Bus Icon</p>
    </details>

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
* There is also a table of results that gets generated in case the map marker that the user wants to click is overlapped by other markers, the user can still see information about that marker by click on the name of the establishment on the table list generated.
* The map can be zoomed in.
* The pegman can be dropped for Google Street View.
* Satellite imagery is also enabled and labels can be turned off.
* Toggle full screen view is also enabled.
* If there is no result for establishment, there is a custom pop up message that will tell the user that there are no results for their query. The user needs to click the "x" or "Close" button to close the modal. The same message will also show in the results table.

#### Weather Features

* There is a "Show Weather" button and once the user clicks it, it shows the weather icon, short weather description and temperature for that city.
* If there is no weather data to show, there is a custom message that will show and fade out after 4 seconds. Custom message:

"Weather Status: Unpredictable! The weather information is still brewing for that place."

### Features Left to Implement

* Make a map version using LeafletJS
* Add images using Unsplash API
* Add wind speed information to weather API

---

