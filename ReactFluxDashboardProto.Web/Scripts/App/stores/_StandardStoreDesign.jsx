// Stores are responsible for managing business logic and data of single domain of the application.
// They may manage a collection or a multiple collections.

// Global object that contains domain data, business
// logic to get/update/delete, and application state. Registers
// for events from the dispatcher and emits events to the
// event emitter.

// Stores are where the real work in our application is done.
// Dispatchers broadcast Actions to all Stores, and the Stores
// registered to listen for those Actions will perform any logic needed to update our Views.

// Stores that are part of one section of your application should be contained within a single store.
// Think of them like pages of your webapp, a modal or some other contained section.

// The only way to update stores is to send them an action by way of the dispatcher.
// They should not have setter methods or properties that allow users to manipulate the store directly.


// Stores register their intent to respond to certain action types and actions with those types are routed to the appropriate handlers in the stores.
// Handlers are called with the action's payload and type as parameters.

// If a store depends on data from other stores, it can wait for those stores to finish handling the currently dispatched action with the waitFor method.

// Stores that are part of one section of your application should be contained within a single store.
// Think of them like pages of your webapp, a modal or some other contained section.  Stores that has
// nothing to do with a specific section, like "UserStore", can also be contained within one store.
// What we want to avoid is stores being dependant on each other both ways.
