## Overview

**Pokemón Node** is an app where a user can manage trainers and their corresponding
Pokemón to battle in a gym. Users should be able to CREATE, READ, UPDATE, and DELETE Pokemón,
as well as assign Pokemón to the gym (details below).

## INSTRUCTIONS:

```
Fork and clone this repo
cd into repo
npm install
nodemon
```

* You'll need to create a database called `pokemon-node`

__After you run your migrations, seed the database by running:__

```
knex seed:run
```

* Inspect your database tables to make sure that you now have trainers and pokemon
* Follow the stories below.


# Use the following Gherkin (User) stories to guide you through the app:


### Pokemón and Pokemón CRUD

__#1__

```
As a user
When I go to the root route '/'
Then I am redirected to `/pokemon`
```

__#2__

```
As a user
When I visit /pokemon
Then I see a button to 'Add a New Pokemon'
```

__#3__

```
When I click the 'Add a New Pokemon' button
Then I see a form to add a new Pokemon
```

__#4__

```
When I submit the form to add a new Pokemon
Then I am redirected to the Pokemon home page
And I see my new Pokemon listed
```

__#5__

```
When I visit '/pokemon'
Then I see a list of all Pokemón and their properties
And I see a link to DELETE
And I see a link to EDIT
```

__#6__

```
When I visit the Pokemón home page
And I see all Pokemón
When I click on a Pokemón name
Then I am taken to a show page
And I see all the properties for that Pokemón
And I see the name of that Pokemón's trainer
```
__wireframe not shown, implement your own ideas.__

__#7__

Trainers can acquire Pokemón that will belong exclusively to them.
One trainer can have many Pokemón, but each Pokemón belongs to only one trainer.

```
When I visit the Pokemón home page
And I see all Pokemón
And I click the 'EDIT' link for a Pokemón
Then I am taken to a form
And the form is prefilled with information for that Pokemón
And I see the name of that Pokemón's trainer
And that name is in a drop down menu that also has the names of all the other trainers
```

__#8__

```
When I submit an edit form for a Pokemón
Then I am redirected to the show page for that Pokemón
And I see all new details for my updated Pokemón
```

__#9__

```
When I visit the Pokemón home page
And I see all Pokemón
And I click the 'DELETE' link for a Pokemón
Then I am redirected to the Pokemón home page
And that Pokemón is no longer listed
```

__#10__

```
As a user
When I visit the Pokemón home page
And I see all Pokemón
And less than 2 Pokemón are 'in the gym'
Then I see a link 'assign to gym' next to every Pokemón that is not 'in the gym'
```

__#11__

```
When I visit the Pokemón home page
And I see all Pokemón
And there are already 2 Pokemón 'in the gym'
Then I do not see 'assign to gym' links for any other Pokemón
```
__#12__

```
When I go to the Pokemón home page
And I see all Pokemón
And a Pokemón is 'in the gym'
Then I see a link 'remove from gym' next to that Pokemón
And I do NOT see a link 'assign to gym' next to that Pokemón
```

### Trainers

__#1__

```
As a user
When I visit /trainers
Then I see a list of all Trainers
```

__#2__

```
When I click on the name of a Trainer
Then I am taken to a show page
And I see the name of that Trainer
And I see all of the Pokemon they are currently training
```

### In the Gym

__#1__

```
As a user
When I visit the gym home page
And there are no Pokemón assigned to the gym
Then I can select a Pokemón1 from a drop down menu that has all Pokemón names
And I can select a Pokemón2 from a drop down menu that has all Pokemón names
```

__#2__

```
When I visit the gym home page
And there are no Pokemón assigned to the gym
And I select a Pokemón1 from a drop down menu that has all Pokemón names
And I select a Pokemón2 from a drop down menu that has all Pokemón names
When I click 'Add Pokemón to the Gym'
Then I am redirected to the gym home page
And I see my Pokemón 'in the gym'
```

__#3__

```
When I visit the gym home page
And only one Pokemón is 'in the gym'
Then I see a Pokemón name in the Pokemón1 slot
And by the Pokemón2 slot I see a dropdown menu with all Pokemón names
```

__#4__

```
When I visit the gym home page
And only one Pokemón is 'in the gym'
And I select a second Pokemón name from a dropdown menu
And I click the 'Add Pokemón to the Gym' button
Then I am redirected to the gym home page
And I see a Pokemón in the Pokemón1 slot
And I see my selected Pokemón in the Pokemón2 slot
```

__#5__

```
When I visit the gym home page
And only one Pokemón is 'in the gym'
And I select a second Pokemón name from a dropdown menu
And that Pokemón is the SAME Pokemón already in a slot
Then the gym home page is rendered again
And I a see an error message
And that error message says
"A Pokemón cannot fight itself! Please choose a different Pokemón!"
And that message is the color red
```

__#6__

```
When I visit the gym home page
And 2 Pokemón are 'in the gym'
Then I see a Pokemón name in the Pokemón1 slot
And I see a Pokemón name in the Pokemón2 slot
```

__#7__

```
When I visit the gym home page
And two Pokemón are already in the gym
Then I see a 'battle' button
```

__#8__

```
When I visit the gym home page
And only one Pokemón is in the gym
Then I do not see the 'battle' button
```

__#9__

```
When I visit the gym home page
And two Pokemón are already in the gym
And I click the 'battle' button
Then the Pokemón with the higher Combat Power 'wins' the fight
And the winning Pokemón's name is displayed on the page next to the word 'WINNER!'
```

__#10__

```
When I visit the gym home page
And I click the 'reset' button (or link)
Then all the Pokemón are removed from the gym
```

### Stretch Goals

__#1__

```
As a user
When I make 2 Pokemón battle
Then the winner's CP is incremented by 20
```

__#2__

* Write a migration that adds an image field to the Pokemón table that takes an
image url.

* Display the image on both the gym and the Pokemón index page.
