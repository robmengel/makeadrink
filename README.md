# Make Me a Drink!
Ever looked at a big pile of alcohol but have no idea what to do with it? Make Me a Drink is here to help!

## Requirements

*   Users should be able to select a list of ingredients from a column of available options (predetermined list tbd)
*   The system should then return a list of drinks that can be made from those ingredients

# Design
## tl;dr
This thing uses an angular front end, running mostly on GCP serverless stuff.

## Data structures
*   The drink ingredients are all held in an in-memory db, auto-generated periodically from a scan of recipes
*   The drinks recipes themselves are held in a noSQL db

# Editing the Code (Still a total WIP)
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-hets6j)
