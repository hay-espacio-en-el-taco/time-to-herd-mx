# time-to-herd-mx
Twitter bot who posts every day the days until herd immunity to Covid-19 is reached through vaccinations in Mexico
https://twitter.com/timetoherdmx

![Tweet](https://github.com/hay-espacio-en-el-taco/time-to-herd-mx/workflows/Tweet/badge.svg)
![Build](https://github.com/hay-espacio-en-el-taco/time-to-herd-mx/workflows/Build/badge.svg)

Data from https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv

Calculations from  https://timetoherd.com/

## How data it's calculated

Days = [(Population * 0.7) - (Vaccine Doses Delivered * 0.5)] / (Average Daily Vaccine Doses Given * 0.5)

## Run in local

- Copy .env-tamplate and rename it as .env
- Fill with your Twitter API credentials
- Run `npm run dev`

## How to contribuite

- Fork this repo
- Add your code
- run `nmp run eslint:fix``
- Create your pull request
