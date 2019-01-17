# Movie Search Challenge

## Installation

`git clone https://github.com/fffunctional/MovieSearchChallenge.git`

`cd` into the directory and:
`npm install`
`npm run start`

Voila, the application should now be visible at `localhost:3000`.

## Challenges

The first challenge to become apparent was that, based on the specification
and mockup, the application ran the risk of firing off dozens of useless
requests to the API per second with every changing keystroke: not cool. One
solution to this would be to include a submit button so as to fire off requests
only when the input is complete, but that's no fun. I elected instead to look
into how React handles debounce and was able to import the well-known lodash
solution into my project, though I expect there are other ways at this stage.

The main difficulties otherwise were coming to terms with the unfamiliar React
framework and how it does things. Paradoxically the hardest thing of all was
importing Bootstrap styles to make the pagination element look not awful: with
the clock ticking, I just couldn't find a clear explanation of how this goes. I
presume it's actually a really simple process that a React developer with any
amount of experience could quickly tell me how to do! But in the end I took
the weaselly shortcut and pasted the minified Bootstrap CSS into my existing
CSS file.

## Improvements

I don't much like the way any of this looks; I was assuming that this more a
development challenge than a design one (if I'm wrong, then: oops) so, having
wasted too much time trying to figure out how to import Bootstrap styles, I
threw in just enough CSS to make things not awful.

I wanted to do the "link to a specific search" optional task to but in all
honesty that would have taken me beyond the allotted time. I can see that it
would be easy to generate a link based on the current state variables; the
question is how easy it then is for React to pick up the URL querystring, at
which point it would be a simple matter to extract the variables and set the
state accordingly as the component is constructed. As I say I didn't research
this yet, if it isn't a deadly simple matter then I would certainly assume it
could be done by investigation into React routers and routing generally.

Another dishonest shortcut I took because of time constraints was to filter out results from the API data that didn't come with a poster_path: it would be
better in this case to show the result and some kind of default image, rather
than pretending that the result doesn't exist. But it was a quick way to make
the simple app look less ugly and "broken".

Another nice-to-have for this project would be the ability to sort the output
more meaningfully, e.g. by director, date, country/language.
