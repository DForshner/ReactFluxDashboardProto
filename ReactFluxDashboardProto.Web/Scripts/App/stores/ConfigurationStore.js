
// Stores that are part of one section of your application should be contained within a single store.
// Think of them like pages of your webapp, a modal or some other contained section.  Stores that has
// nothing to do with a specific section, like "UserStore", can also be contained within one store.
// What we want to avoid is stores being dependant on each other both ways.