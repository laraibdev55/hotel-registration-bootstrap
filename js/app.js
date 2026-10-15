
console.log("Kawaii Hotel JavaScript is connected!");

// Export the hotel object so dom.js can use roomTypes
export const hotel = {
  name: "Kawaii Hotel",
  location: "Indonesia",
  roomTypes: [
    { name: "Single Room", category: "single", price: 300000, available: true },
    { name: "Double Room", category: "double", price: 450000, available: true },
    { name: "Deluxe Room", category: "deluxe", price: 650000, available: false },
    { name: "Family Room", category: "family", price: 800000, available: true }
  ]
};

// Functions from your previous steps
export function createWelcomeMessage(name, location) {
  return `Welcome to ${name} in ${location}!`;
}

console.log(createWelcomeMessage(hotel.name, hotel.location));