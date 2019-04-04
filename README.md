# Map and Weather API
## Interactive Frontend Project
This is a single page application (SPA) made by combining Google Map and OpenWeatherMap API. Using Google Map API, users can search for a city they want to visit; find attractions, hotels, bars, restaurants, stores, and bus or tram stations. The OpenWeatherMap API provides information about the current weather and temperature at the city the user searched.

This is for educational purposes only and not intended for commercial use.

---

# UX

In this SPA, user will be able to do the following:

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
    
Update for weather and temperature is every 2 hours.

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

