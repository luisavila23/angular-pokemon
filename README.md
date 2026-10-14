# Pokémon Search - Angular

A simple Pokémon search application built with Angular that consumes the PokéAPI to retrieve Pokémon information by name.

The project was created as a practical exercise to work with Angular services, HTTP requests, Signals, RxJS and component-based architecture.

## Features

- Search Pokémon by name
- Fetch Pokémon data from PokéAPI
- Display Pokémon name, ID and base experience
- Display Pokémon image
- Display Pokémon types
- Loading state while fetching data
- Error handling when a Pokémon is not found
- Reactive state management using Angular Signals
- Derived data using `computed()`
- Responsive interface with Angular Material

## Technologies

- Angular
- TypeScript
- Angular Material
- RxJS
- Angular Signals
- HttpClient
- PokéAPI
- HTML
- CSS

## API

This project consumes the public PokéAPI:

`https://pokeapi.co/api/v2/pokemon/{pokemonName}`

For example:

```text
https://pokeapi.co/api/v2/pokemon/pikachu