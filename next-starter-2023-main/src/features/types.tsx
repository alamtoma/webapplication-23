export type Response ={
    id: string
    title: string
    category: string
    price: number
    qustionId: string
}

export type Faker = {
    id: () => string
    title: () => string
    category: () => string
    price: () => number
   
}

export type CreateResponseParams = {
    existingResponses?: Map<string, Response>
    count: number
    faker: Faker
  }

export type CreateResponses = (
    params: CreateResponseParams,
  ) => Map<string, Response>