# Robots-JU FLL Scoreboard

Unofficial web scoreboard for the FLL Robot Game.

This is a private project that is not supported or approved by the FIRST® LEGO® League.
However it may be the official scoreboard for some events organised by [Robots-JU](https://robots-ju.ch/).

Feel free to report bugs and suggestions in the issues !

This new app merges the previously separated UI and libraries for all previous years into a single codebase.

## How to use

[Robots-JU](https://robots-ju.ch/) hosts the latest version at <https://fll-scoreboard.robots-ju.ch/>.
No need to install anything !

### Compile yourself

This is a Mithril single-page application.
It is build with Babel and Webpack via Laravel Mix.

```bash
# Clone the repo, and run the following in it to build the app
yarn install
yarn dev # also check `yarn watch` and `yarn production`, these are standard Laravel Mix shortcuts
# Application is ready in the `site` folder
# Start a web server in the `site` folder, for example with PHP
php -S localhost:4000
# A webserver is required for the javascript routing to work
```

### Unit tests

The scorer for each year is unit-tested based on the rules.
You can run the tests with `yarn test`.

## Images copyrights

The table overview images and the season logos come from the official [Robot Game material](http://www.firstlegoleague.org/challenge).
The images were resized and compressed to a more suitable size.

The missions illustrations displayed with each task come from the [Missions overview page](https://www.first-lego-league.org/en/season/robot-game/missions.html) on the FLL Europe website by HANDS on TECHNOLOGY.
Thanks for making them, they are great !

## Text copyrights

Applies to all mission strings in `missions.json`.

- The English rules are copied from the Hands on Technology [Missions overview page](https://www.first-lego-league.org/en/season/robot-game/missions.html).
- The French rules are copied from the PDF hosted on the EPFL [FLL rules page](https://www.epfl.ch/education/education-and-science-outreach/fr/jeunepublic/fll/fll-regles/).

## Code license

This code is released under [the MIT license](LICENSE.txt).
