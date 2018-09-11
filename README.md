<!--rrcnlas
	READ.md
-->

# **Mobile Web Specialist Certification Course**

This **Restaurant Reviews** project, incrementally convert a static webpage to a mobile-ready web application. 

## Goal

In **Stage :one: One**, a static design that lacks accessibility and responsiveness was provided which needed to be converted with a design on different sized (desktop, tablet, and mobile) displays and accessibility for screen reader use. A *service worker* should also be added to begin the process of creating a seamless offline :mobile_phone_off: experience for the users.

## To begin 
	
1. Get the [Starter Code](https://github.com/rrcanlas/MobileWebSpecialist-Restaurant-Stage-1)

2. Clone the starter code from this [repository](https://github.com/rrcanlas/mws-restaurant-stage-1).

3. From inside the new directory, launch:rocket: a local client server using Python from your terminal :computer: ```python -m SimpleHTTPServer 8000``` then run :running: [http://localhost:8000](http://localhost:8000) from your browser.
	
## My Development Strategy 

1. After the fork :fork_and_knife: and clone :dancers: procedure from the [starter code](https://github.com/udacity/mws-restaurant-stage-1), I launched:rocket: a local client server using *Python* from my terminal :computer:. 
	
2. Entered ```python -m SimpleHTTPServer 8000``` then run :running: [http://localhost:8000](http://localhost:8000) from my browser.
	
3. Created an account to get a [MapBox](https://www.mapbox.com/) :japan: API key

4. Created a token and replaced API key on the text <your MAPBOX API KEY HERE> inside of main.js and restaurant_info.js.

5. Converted the style.css file with responsive design using Flexbox :package: to immediately fix and make things more dynamic. 

6. Created responsive grid-based layout using CSS on the restaurants-list. Used attributes to make sure these items fit a mobile screen.

7. Used media queries that provide fluid breakpoints across different screen sizes and used responsive images that adjust for the dimensions and resolution of any mobile device :iphone:. 

8. Implemented accessibility :wheelchair: features on both HTML by using attributes like tabindex :bookmark_tabs: to indicate if (or where) an element sits in keyboard navigation order (by pressing the Tab key on the keyboard). Labeling and adding role for each element starting on the link at the top :arrow_up: of the site.

9. Added a ServiceWorker script to cache :outbox_tray: requests to all of the site’s assets (so that any page that has been visited by a user will be accessible when the user is offline).

10. Wrote this README.md :cool:

11. Pushed :punch: the project to my GitHub account.

## License
