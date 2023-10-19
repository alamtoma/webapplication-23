import type { CreateResponses, Faker } from "./types"



const fakerTitle: string[] = [
    "GlitterGlo Lipstick",
    "QuantumQuench Energy Drink",
    "StellarScent Perfume",
    "PurrfectPillow Pet Bed",

]
const fakerCategory: string[] = ["Math", "code", "science"]
const fakerPrice: number[] =[3,2,1]

//Definere en function som gir en random item from en array
const getRandomItem = <T>(items: T[]) =>{
    //generate a random index within the array's lenget
    const randomIndex = Math.floor(Math.random() * items.length)
return items[randomIndex]

    }
    const getRandomId = () =>{
      return Math.random().toString(36).slice()
    }


export const faker: Faker={
  id:() => getRandomId(),
  title: () => getRandomItem(fakerTitle),
  category: () => getRandomItem(fakerCategory),
  price:() => getRandomItem(fakerPrice),

}


// definere a function som lager create respose

const createResponses: CreateResponses = ({ existingResponses, count, faker}) => {
    // Create a new Map to store responses, initializing it with existing responses.
    const responses = new Map(existingResponses)
  
    // Check if there are no existing responses and the requested count is zero.
    if (responses.size === 0 && count === 0) {
      // If both conditions are met, throw an error to indicate no response added.
      throw new Error("No response added")
    }
  
    // Generate "count" number of fake responses and add them to the map.
    for (let i = 0; i < count; i++) {
      // Generate a unique ID for each response using the faker's id method.
      const response = {
        id: faker.id(),
        title: faker.title(), // Hardcoded question ID for simplicity.
        category: faker.category(), // Get a random category.
        price: faker.price(),
        questionId: "1",
         // Get a random answer option.
      }
  
      // Set a unique key for each response in the map (e.g., "response-0", "response-1").
      responses.set(`response-${i}`, response)
    }
  
    // Return the map of responses.
    return responses
  }
// Export the "createResponses" function and the "getRandomId" function.
export { createResponses, getRandomId }
