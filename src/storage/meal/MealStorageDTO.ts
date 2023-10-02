interface IMeal {
  id: string
  name: string
  description: string
  hour: string
  isDiet: boolean
  date: string
}

export type MealStorageDTO = {
  id: string
  date: string
  meals: IMeal[]
}
