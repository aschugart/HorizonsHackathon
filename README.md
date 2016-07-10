# HorizonsHackathon-FairSplit

This is a project I worked on individually during the Horizons School of Technology 24-hour Hackathon. Based off tragic real-life experiences with a five-page Google Doc for the Harvard Class of 2018 arranging Uber rides, FairSplit was born. Every time spring break or Thanksgiving break or back-to-school or any major break arrives, posts pop up in the Facebook group: Who wants to split an Uber or UberPool? This solves that problem -- it's simple, quick, organized, and gets the job done in a matter of seconds.

##More About FairSplit
Think about it: there are 6,700 students on campus in a one-mile radius. Right before long breaks, everyone is heading to the airport within a 48-hour period. FairSplit is unique because there is literally a hoard of people all bunched together on a college campus making their way to the airport at the same time. Sure, you could use another ride sharing app to cut down costs of an Uber or UberPool, but whoever you find will probably live at least five minutes away and is a complete stranger -- so the costs outweight the benefits, and it's frankly too much work. Not only is FairSplit environmentally friendly and logical to reduce the Ubers taken from Harvard's campus to airports when they can be consolidated, it'll also save you money -- and it's so quick that it isn't bothersome to use. 

##How It Was Built
The calendar aspect of FairSplit is based off code provided by [FullCalendar](http://fullcalendar.io/), a life-saving JQuery plugin that was discovered long after attempting two other painful calendar implementations. Form implementation and the adding of events was done with handlebars. The messaging aspect of FairSplit was based off similar projects in former Horizons projects, also accomplished through handlebars.

##Opportunities for Improvement
Though only the basic funcionalities were implemented in the 24-hour time limit, there is much more that could be added to the web app. Some options include:
+When clicking "send message," have that username appear as the "to" address, rather than having to retype it. This is critical and shameful that it has not been implemented.
+Implement better security features, as well as a verification service through which a college email address is required.
+Fix the "Add Event" form so that it's a modal rather than a whole new page.
+Clean up the code, particularly the in-line styles that gets messy.
+Add capabilities of choosing your college campus.
+Allow more details to be added to each departure time, such as exact location (the quad is pretty far from the river, after all...) and have options to filter by these general locations (yard, river, quad)
+Set up capability of deleting event once the car limit is reached.
+Link messages to email with Sendgrid, perhaps, so that they come to your email instead.
