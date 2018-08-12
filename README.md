# Yanfoma Website Brochure (Site Vitrine)
This is a component-based website. This website is supposed to be fed by the facil-CMS. Couple of things to know about this architecture below.

## The architecture

### The theme components
Every component is in a folder. It contains the markup, the style (color, size, font, ...), the behaviour (change of shape according to an event, or change of color according to time, etc). For now, components have no behaviours. We don't intent to deal with the state of each component in this code. We expect to control their state through a CMS.

### The root component
the root component contains all the other components. The shadow component paradigm is used here. The root component is contained in src folder.
Ideally, the root component is the only one which should contain layout stylesheet (we will prefer css-grid and flexbox)

## Not yet done
### The root component layout
Everything is still under bootstrap and is not simplified, not compressed, not minified. Not yet.

### Test of compatibility with browsers

### Responsiveness

### Progressive
This is more related to the behaviour according to the connectivity by using PWA techniques.

### Testing components
Some errors in the console can be tested or behaviour testing can be applied here.

## Next step
The next step will be to build and admin page to control the state of each component of this website.
